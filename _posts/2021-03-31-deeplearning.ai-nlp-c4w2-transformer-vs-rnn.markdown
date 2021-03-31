---
layout: post
title: "Course 4 Week 2 Transformers vs RNNs"
date:   2021-03-31 16:10:06 +0300
categories: nlp coursera notes
tags: ["deeplearning.ai", "deep learning","#DeepLearningAlgorithems"]
---
![deeplearning.ai](/assets/logo_deeplearning.ai.png){: style="float: right"}

Notes for: NLP with Attention Models Week 2
Transformers vs RNNs

Spoiler: ;-) Transformers win.

**Contents**
* This will become a table of contents (this text will be scrapped).
{:toc}

## Learning Objectives:

- Describe the three basic types of attention
- Name the two types of layers in a Transformer
- Define three main matrices in attention
- Interpret the math behind scaled dot product attention, causal attention, and multi-head attention
- Use articles and their summaries to create input features for training a text summarizer
- Build a Transformer decoder model (GPT-2)

## TLDR: Neural Network engineering

For the impatient future self - We will start with  NLP engineering insights from this week.

### How to insert arbitrary functions into a Trax neuarl net layers?
    
Using a [functional layers](https://trax-ml.readthedocs.io/en/latest/notebooks/layers_intro.html?highlight=fn#With-the-Fn-layer-creating-function.)

~~~python
	def Addition(): # this is a a closure
	
		layer_name = "Addition"  # the name 

		# Custom function for the custom layer
		def func(x, y):
			return x + y
	
		return tl.Fn(layer_name, func) # returning an tl.Fn object with name and function
~~~

## Additional coding notes:

Here are some notabel code snippets. 

### How to use numpy to reshape a test tesnsor so it has a (size 0) batch dimenion at the front?

This is needed when inspecting single test inputs instead of working with a batch. The model is expecting to process batches of inputs like it saw during training - we therefore need to add a dimension at the start.

~~~python
padded_with_batch = fastnp.expand_dims(fastnp.array(padded),axis=0)
~~~

~~~python
# get log probabilities from the last token output
log_probs = output[0,-1,:] 
~~~

## W2V1: Intro

## W2V2: Transformers vs RNNs

## W2V3: Transformer Applications

## W2V4: Dot-Product Attention

## W2V5: Causal Attention

## W2V6: Multi-head Attention

## W2V7: Transformer Decoder

## W2V8: Transformer Summarizer

## W2V9: Reading: Content Resource

## Lab1 : Attention

## Lab2 : The Transformer Decoder

## Assignment: Transformer Summarizer
