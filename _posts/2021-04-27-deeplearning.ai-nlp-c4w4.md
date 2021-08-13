---
layout: post
title: NLP with Attention Models Week 4 Chat Bots
description: Concepts, code snippets, slide commentaries for this week's lesson of the  Course notes from the deeplearning.ai natural language programming specialization.
date: 2021-04-14 18:16:16 +0300
categories:
    - NLP 
    - coursera 
    - notes
tags:
    - deeplearning.ai
    - Course notes
    - DeepLearningAlgorithms
    - transformer
    - reversible transformer
    - teacher forcing
    - positional encoding 
    - locality sensitive hashing
    - attention
    - dot product attention
    - LSH Attention
    - GPT3
    - reformer
    - reversible layers

    - chat bot development
    - intelligent agents
    - NLP
    - question answering task
    - bibliography
    - literature review
lastmod: 2021-04-01T10:49:27.772Z
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Chat-bots
---

<style>

hr { 	
  clear:both;  
}

img[src*='#sl'] { 
  float: right; 
  width:55%; 
  margin:10px 10px 10px 0px; 
  border: 2px solid gold;
  display: block;
}

img[src*='#hi'] { 
  width:85%; 
  display: block;
  margin: 10px auto 10px auto;
  border: 2px solid gold;
}

img[src*='#logo'] {
      width: 20%;
      float: right
}
</style>
![deeplearning.ai](/assets/img/logos/logo_deeplearning.ai.png#logo)

# Question Answering

Notes for: NLP with Attention Models Week 4
Natural Language Processing with Attention Models - Chat Bots

<!--more-->

**Contents**
* This will become a table of contents (this text will be scrapped).
{:toc}

## Week's Learning Objectives:

* [ ] Explain the motivation for reversible layers
* [ ] Integrate locality sensitive hashing into attention layers
* [ ] Describe the Reformer model

Deep learning and A.I. researchers push the field forward by looking for new techniques as well as refinements of old ideas to get better performance on tasks.

In this lesson we cover *reversible layers* which allow us to leverage a time memory tradeoff to process book length sequences and handle contexts over a conversation. 

<!-- ## TLDR: Neural Network engineering -->

## Video 1 : Tasks with Long Sequences

![week-4](/assets/img/articles/week4/v01-001.png#sl)

In this week you are going to learn about tasks that require processing longer sequences:
- Writing books 
- Storytelling and understanding
- Building intelligent agents for conversations like chat-bots.

More specifically we will understand how *re-former* model (AKA the reversible transformer) and *reversible layers* work.

This week you will learn about the bottlenecks in these larger transformer models, and solutions you can use to make them trainable for you. You will also learn about the. Here is what you will be building for your programming assignment: A chatbot! 

In many ways a Chat bot is very similar to a Q&A system which we built last week and that is also similar to query based summarization another task we covered a week before that. The new challenge is to manage what parts of the new and old context we keep around as the dialogue progresses. 

Chatbot are smart A.I. agents and much of the techniques developed under the umbrella of knowledge based AI is also relevant in developing these. For instance carrying out actions on behalf of the user.

Chatbots can also get a very simple ui via the web or as an mobile app, which is another area I have some experience. However an even more powerful paradigm here is the ability to interact using voice which has many additional benefit for example supporting people with disabilities and operating in hands-free mode.

Here is a link to an [AI Storytelling system](https://play.aidungeon.io/main/landing).
<hr>

## Video 2: Transformer Complexity

![week-4](/assets/img/articles/week4/v02-002.png#sl)
One of the biggest issues with the transformers is that it takes time and a lot of memory when training. Concretely here are the numbers. If you have a sequence of length @L@ , then you need @L^2*N@ memory to handle the sequence.

So if you have @N@ layers, that  means your model will take @N@ times more time to complete. As @L@ gets larger, the memory and the time quickly increases.

Perhaps this is the reason people are looking into converting transformers into RNN
after training.<hr>

![week-4](/assets/img/articles/week4/v02-003.png#sl)

When you are handling long sequences, you frequently don't need to consider all L positions. You can just focus on an area of interest instead. For example, when translating a long text from one language to another, you don't need to consider every word at once. You can instead focus on a single word being translated, and those immediately around it, by using attention. 

To overcome the memory requirements you can recompute the activations. As long as you do it efficiently, you will be able to save a good amount of time and memory. You will learn this week how to do it. Instead of storing N layers, you will be able to recompute them when doing the back-propagation. That combined with local attention, will give you a much faster model that works at the same level as the transformer you learned about last week. 


- one area where we can make headway is working with a subsequence of interest.
- during training we need to keep the activations in memory for the back propagation task. Clearly for inference we may be able to save on memory.
- the alternative is to discard the activations as we go along and recalculate later. This can allows trading memory for compute time. However with larger models compute time is also a bottleneck.

<hr>

![week-4](/assets/img/articles/week4/v03-004.png#sl)

## Video 3: LSH Attention

In Course 1, we covered how *locality sensitive hashing* (LSH) works. You learned about:

* KNN
* Hash Tables and Hash Functions
* Locality Sensitive Hashing
* Multiple Planes 

Here are the steps to follow to compute LSH given some vectors, where the vectors may correspond to the transformed word embedding that your transformer outputs.

Attention is used to try which query (q) and key (k) are the most similar.

To do so, you hash q and the keys. This will put similar vectors in the same bucket that you can use. The drawing above shows the lines that separate the buckets. Those could be seen as the planes. 

Remember that the standard attention mechanism is defined as follows: 

@@A(Q,K,V) = softmax(QK^T)V@@

Once you hash @Q@ and @K@ you will then compute standard attention on the bins that you have created. You will repeat the same process several times to increase the probability of having the same key in the same bin as the query. 


<hr>

![week-4](/assets/img/articles/week4/v03-005.png#sl)

- Given the sequence of queries and keys, you hash them into buckets. 
Check out Course 1 Week 4 for a review of the hashing. 
- You will then sort them by bucket.
- You split the buckets into chunks (this is a technical detail for parallel computing purposes). 
- You then compute the attention within the same bucket of the chunk you are looking at and the previous chunk. 

> Q. Why do you need to look at the previous chunk?  

You can see in the figure some buckets (both blue and yellow) have been split across two chunks. Looking at the previous chunk will let you attend to the full bucket.
<hr>

In *Winograd schemas* the resolution of the ambiguous pronoun switches between the two variants of the sentence.

> the **animal** didn't cross the street because `it` was too **tired**

> the animal didn't cross the **street** because `it` was too **wide**

>The city **councilmen** refused the demonstrators a permit because `they` **feared** violence.

>The city councilmen refused the **demonstrators** a permit because `they` **advocated** violence.

## Video 4 Motivation for Reversible Layers: Memory!

![week-4](/assets/img/articles/week4/v04-006.png#sl)

For example in this model 
- 2 GB for the input
- 2 GB are required to compute the Attention 
- 2 GB for the feed forward.

There are 12 attention layers  12 feed forward layers. That is equal to @@12 * 2 + 12*2 + 2 (for the input) = 50 GB@@. 
That is a lot of memory. 


If N is the sequence length:
- Transformers need @O(N^2)@ memory.


Each layer of a transformers has an Attention block and feed-forward block.
If we want to process, for example to train a document of length 1 million token with 12 layers we will need 50 GB of ram.

As we use residual architecture during prediction we only need the current layers input and the output for the next layer. But during training we need to keep all the copies so we can back-propagate the errors. 

## Video 5 Reversible Residual Layers

## Video 6 Reformer

can run 1 million token in 16 gb

## Lab 2: Reversible layers

From the `trax` [documents](https://trax-ml.readthedocs.io/en/latest/notebooks/layers_intro.html#2.-Inputs-and-Outputs)

 a Residual, involves first a split and then a merge:

```python


return Serial(
    Branch(shortcut, layer), # split 
    Add(),                   # merge
)

```
where:

- `Branch(shortcut, layers)`: makes two copies of the single incoming data stream, passes one copy via the shortcut (typically a no-op), and processes the other copy via the given layers (applied in series). @[𝑛_{𝑖𝑛}=1, 𝑛_{𝑜𝑢𝑡}=2]@
- `Add()`: combines the two streams back into one by adding two tensors element-wise. @[𝑛_{𝑖𝑛}=2, 𝑛_{𝑜𝑢𝑡}=1]@

In the `Branch` operation each layer in the input list copies as many inputs from the stack as it needs, and their outputs are successively combined on stack. Put another way, each element of the branch can have differing numbers of inputs and outputs. Let's try a more complex example. To work these operations modify the stack by replicating the input needed as well as pushing the outputs (as specified using th `out` parameters).


# References: 

https://arxiv.org/pdf/1509.02897.pdf

## Tokenization

1. [SentencePiece: A simple and language independent subword tokenizer and detokenizer for Neural Text Processing (Kudo & Richardson 2018) ](https://www.aclweb.org/anthology/D18-2012.pdf) sub-word tokenization
1. [Subword Regularization: Improving Neural Network Translation Models with Multiple Subword Candidates (Kudo 2018)](https://www.aclweb.org/anthology/P18-1007.pdf)  sub-word tokenization
1. [Neural Machine Translation of Rare Words with Subword Units (Sennrich et all 2016)](https://arxiv.org/pdf/1508.07909.pdf)  sub-word tokenization
1. [Subword tokenizers TF tutorial](https://www.tensorflow.org/tutorials/tensorflow_text/subwords_tokenizer)  sub-word tokenization
1. [https://blog.floydhub.com/tokenization-nlp/]
1. [Swivel: Improving Embeddings by Noticing What's Missing (Shazeer, 2016)](https://arxiv.org/abs/1602.02215)

## Transformers

1. [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer] (Raffel et al, 2019)  
1. [Reformer: The Efficient Transformer] (Kitaev et al, 2020)
1. [Attention Is All You Need] (Vaswani et al, 2017)
1. [Deep contextualized word representations] (Peters et al, 2018)
1. [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding] (Devlin et al, 2018)
1. [Finetuning Pretrained Transformers into RNNs] (Kasai et all 2021)
1. [The Illustrated Transformer] (Alammar, 2018)
1. [The Illustrated GPT-2] (Alammar, 2019)
1. [How GPT3 Works - Visualizations and Animations] (Alammar, 2020)
1. [Attention? Attention!] (Lilian Weng, 2018)
1. [The Transformer Family] (Lilian Weng, 2020)
1. [Teacher forcing for RNNs](https://machinelearningmastery.com/teacher-forcing-for-recurrent-neural-networks/)
### Question Answering Task:

1. [Title (Author et al., Year)](https://arxiv.org/pdf/1509.00685.pdf) note

## Links

- [Jax](https://github.com/google/jax)
- [Trax](https://trax-ml.readthedocs.io/en/latest/index.html)
- [Trax community](https://gitter.im/trax-ml/community) on Gitter
- [CNN daily mail dataset](https://github.com/abisee/cnn-dailymail)


Lei Mao
Machine Learning, Artificial Intelligence, Computer Science.

[Byte Pair Encoding (Lei Mao 2021)] (https://leimao.github.io/blog/Byte-Pair-Encoding/)

videos:

Q&A
<iframe width="560" height="315" src="https://www.youtube.com/embed/yIdF-17HwSk?start=223" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Subword tokenizers
<iframe width="560" height="315" src="https://www.youtube.com/embed/hAvtJ516Mw4?start=223" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Swivel Embeddings

https://youtu.be/hAvtJ516Mw4

<!-- 
# all images

format all image names like
/assets/img/articles/week3/V000-name.png
run search and replace:
^(assets/img/articles/week3/V.-...-)([^.]+)(\.png)
![$2](/$1$2$3#sl)\n\n<hr>\n\n

 to get them as images get all the names

-->

[Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer]: https://arxiv.org/abs/1910.10683
[Reformer: The Efficient Transformer]: https://arxiv.org/abs/2001.04451
[Attention Is All You Need]: https://arxiv.org/abs/1706.03762 
[Deep contextualized word representations]: https://arxiv.org/pdf/1802.05365.pdf
[The Illustrated Transformer]: http://jalammar.github.io/illustrated-transformer/
[The Illustrated GPT-2]: http://jalammar.github.io/illustrated-gpt2/
[BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding]: https://arxiv.org/abs/1810.04805
[How GPT3 Works - Visualizations and Animations]: http://jalammar.github.io/how-gpt3-works-visualizations-animations/
[Attention? Attention!]: https://lilianweng.github.io/lil-log/2018/06/24/attention-attention.html (Lilian Weng, 2018)
[The Transformer Family]: https://lilianweng.github.io/lil-log/2020/04/07/the-transformer-family.html "(Lilian Weng, 2020)"
[Finetuning Pretrained Transformers into RNNs]: https://arxiv.org/abs/2103.13076 "(Kasai et all 2021)"