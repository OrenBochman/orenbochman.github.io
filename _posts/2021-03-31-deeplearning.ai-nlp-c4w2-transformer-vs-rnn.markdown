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
---

![deeplearning.ai](/assets/logos/logo_deeplearning.ai.png#logo)

Course notes for: NLP with Attention Models Week 2
Transformers vs RNNs

Spoiler: ;-) Transformers win.

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
![transformer-parallel](/assets/week2/c4w2-05-transformer-parallel.png#sl)




The LSTM which goes a long way to solving the vanishing gradient problems requies three times the memory and cpu steps a the vanila RNN.

However, as time went by and models got longer and deeper the biggest challange with iproving RNNs, became  thier use of sequential computation. 
<hr>


![lstm](/assets/week2/c4w2-10-lstm.png#sl)
![seq2seq-steps](/assets/week2/c4w2-11-seq2seq-steps.png#sl)

Which entailed that to process the word "you", the RNN it has to first go through "are" and then "you". 

<hr>
Two other issues with RNNs are the:

## Information loss 

It becomes harder to keep track of whether the subject is singular or plural as you move further away from the subject.

![transformer](/assets/week2/c4w2-12-transformer.png#hl)

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

<hr>

![application-NLP](/assets/week2/c4w2-16-application-NLP.png#sl)

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
  
## SOTA Transformers

![sota](/assets/week2/c4w2-17-sota.png#sl)

<hr>

<div class="mermaid">
journey
    title NLP Transformers Time Line
	Section NLP
      GPT-2: 1 : GPT-2
      BERT : 2 : Bert
      T5   : 3 : T5
</div>

<hr>

## T5 - Text-To-Text Transfer Transformer

![t5](/assets/week2/c4w2-18-t5.gif#hl)

<hr>

![t5](/assets/week2/c4w2-18-t5.png#sl)

can do a number of tasks with a single model

Classiifcation tasks are selected using the initial string:
- Translate English into German
- Cola sentence
- Question
<hr>

![text-to-text-transformer](/assets/week2/c4w2-19-text-to-text-transformer.png#sl)

Regresion tasks using:
- Stbs Sentece1 ... Stbs Sentece2 ...
- Summersize: 

[play triavia against T5 here](https://t5-trivia.glitch.me/)

<hr>

![quiz](/assets/week2/c4w2-21-quiz.png#sl)

<hr>

![summary](/assets/week2/c4w2-20-summary.png#sl)

<hr>

# V3: Dot-Product Attention

# V4: Causal Attention

# V5: Multi-head Attention

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