---
layout: post
title: NLP with Attention Models Week 2 Transformers vs RNNs
date: 2021-04-01T10:49:23.948Z
categories: 
   - NLP 
   - Coursera 
   - notes
tags:
    - #deeplearning.ai
    - '#DeepLearningAlgorithms'
    - transformer
slug: c4-week-2-transformers-rnns
lastmod: 2021-04-01T10:49:27.772Z
author: Oren Bochman
img: notes-formulas.jpg
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

![deeplearning.ai](/assets/logos/logo_deeplearning.ai.png#logo)

# Transformers vs RNNs
Course notes for: NLP with Attention Models Week 2 

{% include warning.html content="Spoiler:Transformers win :wink:" %}

<!--more-->

**Contents**
* This will become a table of contents (this text will be scrapped).
{:toc}

# Learning Objectives:

1. [x] Describe the three basic types of attention
2. [x] Name the two types of layers in a Transformer
3. [x] Define three main matrices in attention
4. [x] Interpret the math behind scaled dot product attention, causal attention, and multi-head attention
5. [x] Use articles and their summaries to create input features for training a text summarizer
6. [x] Build a Transformer decoder model (GPT-2)
  
# TLDR: Neural Network engineering

For the impatient future self - We will start with  NLP engineering insights from this week.

## What is dot-product attention ?

- Attention is a general solution for the sequence alignment problem.
- Attention does not reorder the input sequence.
- It provides a linear transformation which filters the relevant parts of the source for predicting the each item in the target.

@@ attention(h_t,\bar{h}_s)= softmax(h_t^T\bar{h}_s)@@

## What is dot-product attention ?

- Dot Product attention is the most common form of attention.
- In the engineering sense it is suited for a encoder-decoder architecture 
- It is the best fit for tasks where the source source sequence is fully available at the start and the tasks is mapping or transformation the source sequence to an output sequence like 
- It is used for alignment and machine translation or translation.

@@ attention_{(\cdot)}(Q,V,K) = softmax(\frac{QK^T}{\sqrt{n}})V@@  

```python
def DotProductAttention(query,key,value,mask,scale=True):                  
    """Dot product self-attention.
    Args:
        scale (bool): if to scale 
    Returns:
        numpy.ndarray: attention array (L_q by L_k)
    """
    # Save query embedding dimension
    depth = query.shape[-1] if scale else 1
    # Calculate scaled query key dot product 
    dots = np.matmul(query, np.swapaxes(key, -1, -2)) / np.sqrt(depth) 
    # Apply the mask
    if mask is not None:
        dots = np.where(mask, dots, np.full_like(dots, -1e9)) 
    logsumexp = scipy.special.logsumexp(dots, axis=-1, keepdims=True)
    dots = np.exp(dots - logsumexp)
    attention = np.matmul(dots, value)
    return attention
```

## What is Causal Attention ?

- Causal attention is also called *self attention*.
- It used to generate a sequence based on previous tokens.
- It requires a mask @M@ to enforce ignoring 'future' values during training.

@@ attention_{self}(Q,V,K) = softmax(\frac{QK^T}{\sqrt{n}}+M)V@@  
where @n@ is the embedding dimension.

```python
def SelfAttention(query,key,value,scale=True):                  
    """Self attention.
    Args:
        scale (bool): if to scale 
    Returns:
        numpy.ndarray: Self-attention array (L_q by L_k)
    """
    # Save query embedding dimension
    depth = query.shape[-1] if scale else 1
    # Calculate scaled query key dot product 
    dots = np.matmul(query, np.swapaxes(key, -1, -2)) / np.sqrt(depth) 
    logsumexp = scipy.special.logsumexp(dots, axis=-1, keepdims=True)
    dots = np.exp(dots - logsumexp)
    attention = np.matmul(dots, value)
    return attention
```

# What is multi-headed attention?

Multi-headed attention replicates the attention mechanism analogously to the multiple filters used in convolutional layers.
  
@@ attention_{mh}(Q,V,K) = softmax(\frac{QK^T}{\sqrt{n}})V@@


# Additional coding notes:

Here are some notable code snippets. 

## How to use Numpy to reshape a test tensor so it has a (size 0) batch dimension at the front?

This is needed when inspecting single test inputs instead of working with a batch. The model is expecting to process batches of inputs like it saw during training - we therefore need to add a dimension at the start.

~~~python
padded_with_batch = fastnp.expand_dims(fastnp.array(padded),axis=0)
~~~

~~~python
# get log probabilities from the last token output
log_probs = output[0,-1,:] 
~~~

# Video 1: Transformers vs RNNs

RNNs were a big breakthrough and became the state of the art (SOTA) for machine translation (MT).

This illusrates a typical RNN that is used to translate the English sentence "How are you?" to its German equivalent, "Wie sind Sie?".


![rnn-non-parallel](/assets/week2/c4w2-04-rnn-non-parallel.png#hi)

<hr>


![lstm](/assets/week2/c4w2-10-lstm.png#sl)

The LSTM which goes a long way to solving the vanishing gradient problems requires three times the memory and cpu steps a the vanilla RNN.

However, as time went by and models got longer and deeper the biggest challenge with improving RNNs, became  their use of sequential computation. 
<hr>

![seq2seq-steps](/assets/week2/c4w2-11-seq2seq-steps.png#sl)

Which entailed that to process the word "you", the RNN it has to first go through "are" and then "you". 

Two other issues with RNNs are the:

## Information loss 

It becomes harder to keep track of whether the subject is singular or plural as you move further away from the subject.
<hr>

![Transformer](/assets/week2/c4w2-12-transformer.png#hl)

transformer architecture:

in the encoder side 
- lookup layer - 
  the source sequence is converted from one hot encoding to a distributed representation using an embedding.
- this is converted to K V matrices

in the decoder side

<hr>

## Vanishing Gradient

When gradients you back-propagate, the gradients can become really small and as a result.
With small gradient the model will learn very little.


![positional-encoding](/assets/week2/c4w2-14-positonal-encoding.png#sl)

Transformers which are based on attention and don't require any sequential computation per layer, only a single step is needed. 
<hr>

![summary](/assets/week2/c4w2-13-summary.png#sl)

Additionally, the gradient steps that need to be taken from the last output to the first input in a transformer is just one. 

For RNNs, the number of steps increases with longer sequences. Finally, transformers don't suffer from vanishing gradients problems that are related to the length of the sequences. 
<hr>

# Video 2: Transformer Applications

![application](/assets/week2/c4w2-15-application.png#sl)
Transformers have essentially replaced RNN,LSTM and GRUs in sequence processing.

<hr>

![application-NLP](/assets/week2/c4w2-16-application-NLP.png#sl)
### Applications:
- Text summarization
- Autocomplete
- NER
- Q&A
- Translation
- Chat Bots
- Sentiment Analyses
- Market Intelligence
- Text Classification
- OCR
- Spell Checking

<hr>  

![sota](/assets/week2/c4w2-17-sota.png#sl)

### SOTA Transformers

Transformers Time Line:
   -  GPT-2: 
   -  ElmO
   -  BERT 
   -  T5  
<hr>

## T5 - Text-To-Text Transfer Transformer

![t5](/assets/week2/c4w2-18-t5.gif#hl)

<hr>

![t5](/assets/week2/c4w2-18-t5.png#sl)

T5 can do a number of tasks with a single model. 

While the earlier transformer models were able to score high in many different tasks without specific training. T5 is setup to handle different inputs and respond with output that is relevant to the requested task.

## T5 Classification tasks  

These tasks are selected using the initial string:
- Translate English into German
- Cola sentence
- Question
<hr>

![text-to-text-transformer](/assets/week2/c4w2-19-text-to-text-transformer.png#sl)

## T5 regression tasks

- Stbs Sentence1 ... Stbs Sentence2 ...
- Summarize: 

[play trivia against T5 here](https://t5-trivia.glitch.me/)

<hr>

![transformers quiz](/assets/week2/c4w2-21-quiz.png#sl)


{% include warning.html content="I found this one a little confusing" %}

We are told that the transformers can do in one operation what RNN needed to do in many steps. Also when querying transformers it does one task at a time. It seem that this question is about the ability of multiple heads to do several tasks at once could not do this is not well understood. 
<hr>

![summary of transformers](/assets/week2/c4w2-20-summary-of-transformers.png#sl)

<hr>

# Video 3: Dot-Product Attention

![outline-of-dot-product-attention](/assets/week2/c4w2-22-outline-of-dot-product-attention.png#sl)

Dot product attention was introduced in 2015 by *Minh-Thang Luong, Hieu Pham, Christopher D. Manning* in [Effective Approaches to Attention-based Neural Machine Translation](https://arxiv.org/pdf/1508.04025v5.pdf) which is available at [papers with code](https://paperswithcode.com/paper/effective-approaches-to-attention-based).

Look at [Review of Effective Approaches to Attention-based NMT]( {% post_url 2021-03-21-review-of-effective-approaches-to-attention-based-neural-machine-translation %})

Dot product attention is the main operation in transformers. It is the dot product between the embedding of source and target sequences. The embedding used is a cross language embedding in which distance between equivalent across languages are minimized. This facilitates finding the cosine similarity using the dot product between words.

<hr>

![intro-to-attention](/assets/week2/c4w2-23-intro-to-attention.png#sl)

Lets try to understand *dot product attention* intuitively by walking over its operations at the word level. The actual algorithm  uses linear algebra to perform many operations at once which is fast but more abstract and therefore difficult to understand.

1. Using a pre-trained  **cross-language** embedding encode:
   - each German word vector @q_i@ is placed as a column vector to form the query matrix @Q@,
   - each English word once as @k_i@ and once as @v_i@, column vectors in the key @K@ and value @V@ matrices. This is more of a preprocessing step.
1. For each German word we want to derive a continuous filter function on the English sequence to pick the most relevant words for translation. We build this filter for word @q_i@ by taking its dot product @q_i \cdot k_i@ with every word vector from the english sequence these products are called the the attention weights.
1. next we convert the rudimentary filter to a probabilistic one by applying a @softmax()@ which is just a differentiable function that converts the *attention weights* to *probabilities* by keeping them at the same relative sizes while ensuring they add to one.
1. now that we have a @q@-filter we want to apply it. This is done by taking the weighed sum of the english words using the attention weights. @@\hat q_i = \sum_{i} softmax(q_i \cdot k_i) \times v_i =  \sum w_a(q_i) * v_i @@ 
<hr>

{% include important.html content="course objective!" %}

### Query, Key & Value

![queries-keys-values](/assets/week2/c4w2-24-queries-keys-values.png#sl)

Attention uses three matrices which are formed as shown in the figure.  The **Query** @Q@, **Key** @K@ and **Value** @V@ are formed from the source and target (if there is no target then just from the source). Each word is converted into an embedding column vector and these are placed into the matracies as their columns. 

In the master class embedded bellow Dr. Łukasz Kaiser talks about attention and here he is talking about solving the problem of retrieving information from a long sequence. At around 16 minutes in he call Q a query vector and K and V a memory, of all the words we have seen, which we want to access.

- The ***Q**uery* is the matrix formed from the column word vector for the German words. 
- The ***K**ey* is the matrix formed from the column word vector for the English words. 
- The ***V**alue* is the matrix formed from the column word vector for the English words.

{% include note.html content="K and V are the same" %}

Once these are called keys since we use them to are we doing a similarity lookup. 
Wand the second time they are called value because we use them in the activation when we apply the weights to them.

The input and output sequences are mapped to an embedding layer to become the @Q@, @K@ and @V@ matrices. 
<hr>

<iframe width="560" height="315" src="https://www.youtube.com/embed/rBCqOTEfxvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<hr>

Given an input, you transform it into a new representation or a column vector. Depending on the task you are working on, you will end up getting queries, keys, and values. Each column corresponds to a word in the figure above. Hence, when you compute the following: 
<hr>

![attention-formula](/assets/week2/c4w2-26-dot-product-attention-math.png#sl)

1. multiply @Q@ by @V@.
1. apply the @softmax()@ to transform to a probability.
1. multiply the softmax by @V@

<hr>

![attention-math](/assets/week2/c4w2-26-attention-math.png#sl)

This is restating the above in a very confusing way. I looked at it many times before I figured out that the square brackets are the dimensions and that we have the following two formulas indicated schematically above:

@@ Z = W_A V @@
where
- Z has size of is a 'Q length' @\times@ 'Embedding size' matrix 
- or for coders @[len(Q),D]@ dimensional array 

@@ W_A = softmax(QK^T) @@

This concept implies that similar vectors are likely to have a higher score when you dot them with one another. You transform that score into a probability by using a softmax function. You can then multiply the output by 

You can think of the **keys** and the **values** as being the same. Note that both @K@,@V@ are of dimension @L_k, D@. Each query @q_i@ picks the most similar key @k_j@.

<hr>

![attention-formula](/assets/week2/c4w2-27-attention-formula.png#sl)

Queries are the German words and the keys are the English words. Once you have the attention weights, you can just multiply it by @V@ to get a weighted combination of the input. 

<hr>

![attention-quiz](/assets/week2/c4w2-28-attention-quizz.png#sl)

<hr>

![summary-for-dot-product-attention](/assets/week2/c4w2-29-summary-for-dot-product-attention.png#sl)

another interesting point made in the talk above is that dot product attention has @O(n^2 *d)@ complexity but typically @d >> n@ since d ~ 1000 while for n ~ 70. So transformers should perform better then an RNN whose complexity is @O(n*d^2)@. And this is before the advantages of using an eficent transformer like reformer.
 
 In [Finetuning Pretrained Transformers into RNNs] there is a reversal of the trend from rnn to transformers. Here  the latest results show a an idea of training big transformers and then converting them to RNN to improve performance. (One get an RNN by training a transformer.)

<hr>

# V4: Causal Attention



- We are interested in three main types of attention. 
- We'll see a brief overview of causal attention. 
- We'll discover some mathematical foundations behind the causal attention. 
<hr>

{% include important.html content="course objective!" %}

![three forms of attention](/assets/week2/c4w2-30-three-ways-of-attention.png#sl)



In terms of use cases there are three types of attention mechanisms:

### Scaled dot product attention:
   - AKA Encoder-Decoder attention.
   - one sentence in the decoder look at to another one in the encoder.
   - use cases:
     - seq2seq
     - machine translation.

### Causal Attention:
   - AKA self attention.
   - attention is all you need.
   - In the same sentence words attend to previous words. 
   - Future words have not been generated yet. 
   - use cases:
     - generation 
     - text generation 
     - summarization.
  
### Bi-directional self attention:
   - In one sentence words look both at previous and future words.
   - use cases:
     - machine comprehension.
     - question answering
<hr>

![causal attention](/assets/week2/c4w2-31-causal-attention.png#sl)

In causal attention, **queries** and **keys** come from the same sentence. That is why it is often referred to as **self-attention**.  In general, causal attention allows words to attend to other words that are related in various ways. 
<hr>

![causal attention mask](/assets/week2/c4w2-32-causal-attention-mask.png#sl)

At a high level
We have K Q V matrices.  corresponding
However, token should not attend to words in the future since these were not generated yet.

Therefore the future token's data is masked by adding a big negative number.
<hr>


![causal-attention-math-](/assets/week2/c4w2-33-causal-attention-math-.png#sl)
 
 Mathematically, it looks like this: 

<hr>

![causal-attention-quiz](/assets/week2/c4w2-34-causal-attention-quiz.png#sl)

<hr>

![summary-for-causal-attention](/assets/week2/c4w2-35-summary-for-causal-attention.png#sl)

<hr>

# V5: Multi-head Attention

![outline-of-muti-head-attention](/assets/week2/c4w2-40-outline-of-mutihead-attention.png#sl)

Let's summarize the intuition behind **multi-head attention** and **scaled dot product attention**.

<hr>

![muti-head-attention](/assets/week2/c4w2-41-muti-head-attention.png#sl)

Q. What are multiple attention heads?

- Multiple attention heads are simply replicas of the attention mechanism. In this they are analogous to the multiple filters used in a convolutional neural networks (CNN). 
- During training they specialize by learning different relationships between words.
- During inference the operate parallel and independently of each other.
  
<hr>

![overview of muti-head attention](/assets/week2/c4w2-42-overview-of-muti-head-attention.png#sl)

This is perhaps the most important slide - but it fails to show the critical part of the algorithm.
Let's suppose we have @k@ attention heads. We see at the lowest level the @K@, @Q@ and @V@ being passed into passing through k linear layers. How is this accomplished and more important why. What is actually happening here is the opposite of concatenation. Instead of processing a query embedding from a space of @d@-dimensions we first split the embedding into @k@ vectors of length @D/k@. We have now k vectors from a k @D/k@-dimensional subspace. We now perform a dot product attention on each of these subspaces.

{% include note.html content="place here a better image of the splitting mechanism !" %}

Each of these dot product attention is operating on a difference subspace. It sees different subsets of the data and therefore specializes. How do these heads specializes is anybody's guess - unless we have a special embedding which has been processed using PCA or some other algorithm to ensure that each subspace corresponds to some interpretable subset of features.

<hr>
![muti-head attention scaled dot-product](/assets/week2/c4w2-43-muti-head-attention-scaled-dot-product.png#sl)

For example if we used a 1024 dimension embedding which concatenates 4 representations.
  1 [0:256] is an embedding trained on a *phonological* task
  2 [256:512] is an embedding trained on a *morphological* task
  3 [513:768] is an embedding trained on a *syntactical* task
  4 [769:1024] is an embedding trained on a *semantic* task

We could devise a number of subspace sampling schemes to give the k different attention heads different areas of specializations.

1. sample from a single sub-space
1. 4 heads sample from one subspace and 4 heads sample from 3 different sub-spaces
1. 5 heads sampling from 2 subspaces different sub-spaces and 3 from 1
1. 5 heads sampling from 2 subspaces different sub-spaces and 3 from three

Each would specialize on a domain or on a interface between two domain or on all data but one domain.
Language is rather redundant so they may be able to reconstruct most of the missing data - but at least they would specialize in a linguistically meaningful way.





<hr>

Given a word, you take its embedding then you multiply it by the @Q@, @K@, @V@ matrix to get the corresponding queries, keys and values. When you use multi-head attention, a head can learn different relationships between words from another head. 

Here's one way to look at it: 

-  First, imagine that you have an embedding for a word. You multiply that embedding with @Q@ to get @q_1@, @K@ to get @k_1@, and V to get @v_1@
<hr>


<hr>

![muti-head-attention-concatenation](/assets/week2/c4w2-44-muti-head-attention-concatenation.png#sl)

<hr>


![muti-head-attention-math](/assets/week2/c4w2-46-muti-head-attention-math.png#sl)

<hr>


![muti-head-attention-fotmula](/assets/week2/c4w2-47-muti-head-attention-fotmula.png#sl)

<hr>


![muti-head-attention-quiz](/assets/week2/c4w2-48-muti-head-attention-quiz.png#sl)

<hr>

![muti-head-attention-math](/assets/week2/c4w2-50-muti-head-attention-math.png#sl)

![muti-head-attention-math](/assets/week2/c4w2-51-muti-head-attention-math.png#sl)

![muti-head-attention-math](/assets/week2/c4w2-52-muti-head-attention-math.png#sl)

![muti-head-attention-math](/assets/week2/c4w2-53-muti-head-attention-math.png#sl)

<hr>
- Next, you feed it to the linear layer, once you go through the linear layer for each word, you need to calculate a score. After that, you end up having an embedding for each word. But you still need to get the score for how much of each word you are going to use. For example, this will tell you how similar two words are @q_1@ and @k_1@or even @q_1@ and @k_2@  by doing a simple @q_1 \dot k_1@. You can take the softmax of those scores (the paper mentions that you have to divide by @\sqrt(d)@ to get a probability and then you multiply that by the value. That gives you the new representation of the word.

If you have many heads, you can concatenate them and then multiply again by a matrix that is of dimension (dim of each head by num heads - dim of each head) to get one final vector corresponding to each word. 

Here is step by step guide, first you get the @Q@, @K@, @V@ matrices: 

Note that the computation above was done for one head. If you have several heads, concretely nn, then you will have @Z_1, Z_2, ..., Z_n@. In which case, you can just concatenate them and multiply by a @W_O@ matrix as follows:

Hence, the more heads you have, the more @Z@s you will end up concatenating and as a result, that will change the inner dimension of @W_O@, which will then project the combined embeddings into one final embedding. 

![summary-muti-head-attention](/assets/week2/c4w2-49-summary-muti-head-attention.png#sl)

<hr>

# V6: Transformer Decoder


# V7: Transformer Summarizer


# V8: Reading: Content Resource

1. [Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer] (Raffel et al, 2019)  
1. [Reformer: The Efficient Transformer] (Kitaev et al, 2020)
1. [Attention Is All You Need] (Vaswani et al, 2017)
1. [Deep contextualized word representations] (Peters et al, 2018)
1. [The Illustrated Transformer] (Alammar, 2018)
1. [The Illustrated GPT-2] (Alammar, 2019)
1. [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding] (Devlin et al, 2018)
1. [How GPT3 Works - Visualizations and Animations] (Alammar, 2020)
1. [Attention? Attention!] (Lilian Weng, 2018)
1. [The Transformer Family] (Lilian Weng, 2020)
1. [Finetuning Pretrained Transformers into RNNs] (Kasai et all 2021)


# Lab1 : Attention


# Lab2 : The Transformer Decoder


# Assignment: Transformer Summarizer

<!-- 
# all images

format all image names like
/assets/week2/c4w2-04-name.png
run search and replace:
^(assets/week2/c4w2-..-)([^.]+)(\.png)
![$2](/$1$2$3#sl)

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