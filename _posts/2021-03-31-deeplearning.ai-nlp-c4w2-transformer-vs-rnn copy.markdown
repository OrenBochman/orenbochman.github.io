---
layout: post
title: NLP with Attention Models Week 2 Transformers vs RNNs
date: 2021-04-01T10:49:23.948Z
categories: nlp coursera notes
tags:
    - deeplearning.ai
    - deep learning
    - '#DeepLearningAlgorithems'
slug: c4-week-2-transformers-rnns
lastmod: 2021-04-01T10:49:27.772Z
author: Oren Bochman

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

::: danger
Spoiler: ;-) Transformers win.]]
:::

<!--more-->

**Contents**
* This will become a table of contents (this text will be scrapped).
{:toc}

# Learning Objectives:

- Describe the three basic types of attention
- Name the two types of layers in a Transformer
- Define three main matrices in attention
- Interpret the math behind scaled dot product attention, causal attention, and multi-head attention
- Use articles and their summaries to create input features for training a text summarizer
- Build a Transformer decoder model (GPT-2)

# TLDR: Neural Network engineering

For the impatient future self - We will start with  NLP engineering insights from this week.

## How to insert arbitrary functions into a Trax neuarl net layers?
    
Using a [functional layers](https://trax-ml.readthedocs.io/en/latest/notebooks/layers_intro.html?highlight=fn#With-the-Fn-layer-creating-function.)

~~~python
	def Addition(): # this is a a closure
	
		layer_name = "Addition"  # the name 

		# Custom function for the custom layer
		def func(x, y):
			return x + y
	
		return tl.Fn(layer_name, func) # returning an tl.Fn object with name and function
~~~

# Additional coding notes:

Here are some notabel code snippets. 

## How to use numpy to reshape a test tesnsor so it has a (size 0) batch dimenion at the front?

This is needed when inspecting single test inputs instead of working with a batch. The model is expecting to process batches of inputs like it saw during training - we therefore need to add a dimension at the start.

~~~python
padded_with_batch = fastnp.expand_dims(fastnp.array(padded),axis=0)
~~~

~~~python
# get log probabilities from the last token output
log_probs = output[0,-1,:] 
~~~

# Video 1: Transformers vs RNNs

RNNs were a big breakthrough and became the state of the art (SOTA) for macine translation (MT).

This illusrates a typical RNN that is used to translate the English sentence "How are you?" to its German equivalent, "Wie sind Sie?".


![rnn-non-parallel](/assets/week2/c4w2-04-rnn-non-parallel.png#hi)

<hr>


![lstm](/assets/week2/c4w2-10-lstm.png#sl)

The LSTM which goes a long way to solving the vanishing gradient problems requies three times the memory and cpu steps a the vanila RNN.

However, as time went by and models got longer and deeper the biggest challange with iproving RNNs, became  thier use of sequential computation. 
<hr>

![seq2seq-steps](/assets/week2/c4w2-11-seq2seq-steps.png#sl)

Which entailed that to process the word "you", the RNN it has to first go through "are" and then "you". 

Two other issues with RNNs are the:

## Information loss 

It becomes harder to keep track of whether the subject is singular or plural as you move further away from the subject.
<hr>

![transformer](/assets/week2/c4w2-12-transformer.png#hl)

transformer architecture:

in the endocder side 
- lookup layer:  the sourse sequence mapped using an ebedding.
- this is converted to K V matrecies
in the decoder 

<hr>

## Vanishing Gradient

When gradients you back-propagate, the gradients can become really small and as a result.
With small gradient the model will learn very little.


![positonal-encoding](/assets/week2/c4w2-14-positonal-encoding.png#sl)

Transformers which are based on attention and don't require any sequential computation per layer, only a single step is needed. 
<hr>

![summary](/assets/week2/c4w2-13-summary.png#sl)

Additionally, the gradient steps that need to be taken from the last output to the first input in a transformer is just one. 

For RNNs, the number of steps increases with longer sequences. Finally, transformers don't suffer from vanishing gradients problems that are related to the length of the sequences. 
<hr>

# Video 2: Transformer Applications

![application](/assets/week2/c4w2-15-application.png#sl)
Transformers have essentialy replaced RNN,LSTM and GRUs in sequence processing.

<hr>

![application-NLP](/assets/week2/c4w2-16-application-NLP.png#sl)
### Applcations:
- Text summerization
- Autocomplete
- NER
- Q&A
- Translation
- Chat Bots
- Sentiment Analysos
- Market Intelligence
- Text Classification
- OCR
- Spell Cheking

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

While the earlier transofrmer models were able to score high in many differnt tasks without specific training. T5 is setup to handle different inputs and respond with output that is relevant to the requested task.

## Classifcation tasks using T5 
are selected using the initial string:
- Translate English into German
- Cola sentence
- Question
<hr>

![text-to-text-transformer](/assets/week2/c4w2-19-text-to-text-transformer.png#sl)

## Regresion tasks using T5:

- Stbs Sentece1 ... Stbs Sentece2 ...
- Summersize: 

[play triavia against T5 here](https://t5-trivia.glitch.me/)

<hr>

![transformers quiz](/assets/week2/c4w2-21-quiz.png#sl)

I found this one a little confusing. 

We are told that the transformers can do in one operation what RNN needed to do in many steps. Also when querieing transformers it does one task at a time. It seem that this question is about the ability of multiple heads to do serveral tasks at once could not do this is not well understood. 
<hr>

![summary of transformers](/assets/week2/c4w2-20-summary-of-transformers.png#sl)

<hr>

# V3: Dot-Product Attention

![outline-of-dot-product-attention](/assets/week2/c4w2-22-outline-of-dot-product-attention.png#sl)

Dot product attention was introduced in 2015 by *Minh-Thang Luong, Hieu Pham, Christopher D. Manning* in [Effective Approaches to Attention-based Neural Machine Translation](https://arxiv.org/pdf/1508.04025v5.pdf) which is avilable at [papers with code](https://paperswithcode.com/paper/effective-approaches-to-attention-based).

I have summerised this paper in the  blog post available here [link](url).

<hr>

![intro-to-attention](/assets/week2/c4w2-23-intro-to-attention.png#sl)

Dot product attention is the first of three attention mechanisms we will study. In the engineering sense it is suited for a encoder decoder architecture with tasks where the source source sequence is fully available at the start and the tasks is mapping or tansformation the source sequence to an ouput sequqence like inth alignment, or translation.

Dot product attention could be summarized as follows:

<hr>

![queries-keys-values](/assets/week2/c4w2-24-queries-keys-values.png#sl)

## Query, Key & Value

In another talk on youtube Dr Lukcas talks about attention and here he is talking about solving the problem of retrieving infomation from a long sequqence. This is essentially what alignemnt was also trying to do. So if we think about retrieving information from a memory:

- The **Query** is the embeding for a token in the *target* sequence we wish to process. 
- The **Key** is our the embedding of the token from the source sequence 
- The **Value** is the likelyhood that the key is signficant...

::: todo
add link to the video of the lukas talk
:::
<hr>

![concept-of-attention](/assets/week2/c4w2-25-concept-of-attention.png#sl)

Given an input, you transform it into a new representation or a column vector. Depending on the task you are working on, you will end up getting queries, keys, and values. Each column corresponds to a word in the figure above. Hence, when you compute the following: 

<hr>

![attention-math](/assets/week2/c4w2-26-attention-math.png#sl)

This concept implies that similar vectors are likely to have a higher score when you dot them with one another. You transform that score into a probability by using a softmax function. You can then multiply the output by 

You can think of the **keys** and the **values** as being the same. 

<hr>

![atttention-formula](/assets/week2/c4w2-27-atttention-formula.png#sl)

Note that both $K,V$ are of dimension $L_k,D$. Each query $q_i$ picks the most similar key $k_j$

Queries are the German words and the keys are the English words. Once you have the attention weights, you can just multiply it by VV to get a weighted combination of the input. 

<hr>

![attention-quizz](/assets/week2/c4w2-28-attention-quizz.png#sl)

<hr>

![summary-for-dot-product-attention](/assets/week2/c4w2-29-summary-for-dot-product-attention.png#sl)

<hr>

# V4: Causal Attention

First, you'll see what are the three main types of attention. After, I'll show you a brief overview of causal attention. And finally, you'll discover some mathematical foundations behind the causal attention. 
<hr>

![three-ways-of-attention](/assets/week2/c4w2-30-three-ways-of-attention.png#sl)

There are three types of attention mechansims:

Encoder-Decodr attention:    
   - one sentence in the decoder look at to another one in the encoder.
   - e.g. in translation model.

Causual Attention:
   - In the same senence words attend to previous words. - Future words have not been generated yet. 
   - e.g. in text generation of summaries.

Bi-directional self attention:
   - In one senence words look bothe at previous and future words.

<hr>

![causual-attention](/assets/week2/c4w2-31-causual-attention.png#sl)

In causal attention, **queries** and **keys** come from the same sentence. That is why it is often referred to as **self-attention**.  In general, causal attention allows words to attend to other words that are related in various ways. 
<hr>

![causual-attention-mask](/assets/week2/c4w2-32-causual-attention-mask.png#sl)

However, they cannot attend to words in the future since these were not generated yet. Mathematically, it looks like this: 
<hr>


![causual-attention-math-](/assets/week2/c4w2-33-causual-attention-math-.png#sl)

<hr>

![causual-attention-quiz](/assets/week2/c4w2-34-causual-attention-quiz.png#sl)

![summary-for-causual-attention](/assets/week2/c4w2-35-summary-for-causual-attention.png#sl)

# V5: Multi-head Attention

![outline-of-mutihead-attention](/assets/week2/c4w2-40-outline-of-mutihead-attention.png#sl)
![muti-head-attention](/assets/week2/c4w2-41-muti-head-attention.png#sl)
![overview-of-muti-head-attention](/assets/week2/c4w2-42-overview-of-muti-head-attention.png#sl)
![muti-head-attention-scaled-dot-product](/assets/week2/c4w2-43-muti-head-attention-scaled-dot-product.png#sl)
![muti-head-attention-concatenation](/assets/week2/c4w2-44-muti-head-attention-concatenation.png#sl)
![muti-head-attention-math](/assets/week2/c4w2-46-muti-head-attention-math.png#sl)
![muti-head-attention-fotmula](/assets/week2/c4w2-47-muti-head-attention-fotmula.png#sl)
![muti-head-attention-quiz](/assets/week2/c4w2-48-muti-head-attention-quiz.png#sl)



Let's summarize the intuition behind **multi-head attention** and **scaled dot product attention**.

Given a word, you take its embedding then you multiply it by the $Q$, $K$, $V$ matrix to get the corresponding queries, keys and values. When you use multi-head attention, a head can learn different relationships between words from another head. 

Here's one way to look at it: 

-  First, imagine that you have an embedding for a word. You multiply that embedding with $Q$ to get $q_1$, $K$ to get $k_1$, and V to get $v_1$

- Next, you feed it to the linear layer, once you go through the linear layer for each word, you need to calculate a score. After that, you end up having an embedding for each word. But you still need to get the score for how much of each word you are going to use. For example, this will tell you how similar two words are $q_1$ and $k_1$or even $q_1$ and $k_2$  by doing a simple $q_1 \dot k_1$. You can take the softmax of those scores (the paper mentions that you have to divide by $\sqrt(d)$ to get a probability and then you multiply that by the value. That gives you the new representation of the word.

If you have many heads, you can concatenate them and then multiply again by a matrix that is of dimension (dim of each head by num heads - dim of each head) to get one final vector corresponding to each word. 

Here is step by step guide, first you get the $Q$, $K$, $V$ matrices: 

Note that the computation above was done for one head. If you have several heads, concretely nn, then you will have $Z_1, Z_2, ..., Z_n$. In which case, you can just concatenate them and multiply by a $W_O$ matrix as follows:


Hence, the more heads you have, the more $Z$s you will end up concatenating and as a result, that will change the inner dimension of $W_O$, which will then project the combined embeddings into one final embedding. 

![summary-muti-head-attention](/assets/week2/c4w2-49-summary-muti-head-attention.png#sl)

# V6: Transformer Decoder


# V7: Transformer Summarizer


# V8: Reading: Content Resource


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


![muti-head-attention-math](/assets/week2/c4w2-50-muti-head-attention-math.png#sl)
![muti-head-attention-math](/assets/week2/c4w2-51-muti-head-attention-math.png#sl)
![muti-head-attention-math](/assets/week2/c4w2-52-muti-head-attention-math.png#sl)
![muti-head-attention-math](/assets/week2/c4w2-53-muti-head-attention-math.png#sl)