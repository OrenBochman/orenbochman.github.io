---
title: TensorFlow probability Independent
layout: post
date: 2021-06-01 12:16:16 +0300
categories:
    - ML
tags:
    - AI
    - NLP
    - Bijectors
    - Auto Regressive Flows
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: just a handy command line conversion recipe
ipynb: https://github.com/jessstringham/notebooks/tree/master/2018-12-27-KL-Divergence.ipynb
---

These are my course notes on Probabilistic Deep Learning with TensorFlow by Dr Kevin Webster of Imperial College London 2 
The [course url](https://www.coursera.org/learn/probabilistic-deep-learning-with-tensorflow2/home/welcome)


## Distributions - the sample the batch and the event

The way we are taught probability and statistics and later how we approach multivariate data in data science reinforces a static and low dimensional view of data. But when we want to work with Graphical models, Bayesian networks, Multilevel models and later with probabilistic neral networks we need to expand our thinking about these. One key new skill one must develop is creating distributions with specific shapes and transforming to new shapes.

This manipulation of tensors should already be familiar from work with convolutional or sequence models. But is those cases you typically only need to handle shapes at the input or output of the model and the framework mostly deals with these nitty gritty details. With TensorFlow probability shapes these details need to be part of one's thinking. Unless they are second nature you will struggle to implementing the with the more complex parts and TFP is just a part of a much bigger picture.

## Independent - moving dimensions from batch to event

Indeed!  This is taking multiple low dimensional distribution and histing them to be higher dimensional. This is a super powerful idea. I first came the notion when researching complex values distribution in one of my early attempts at representing uncertainty and fuzziness. What little data that I could find said these can be viewed as two distributions....

Some alternatives:

A multivariate normal with a diagonal covarience matrix


A multivariate normal with a full covarience matrix



## Resources:

if like me, you initially feel that numpy array broadcasting feels strange and awkward you may want to look at:

- [Numpy Broadcasting Guide](https://numpy.org/doc/stable/user/basics.broadcasting.html)
- [Array Broadcasting in Numpy](https://numpy.org/devdocs/user/theory.broadcasting.html)