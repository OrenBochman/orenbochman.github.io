---
draft: true
lastmod: 2022-04-30T09:25:30.897Z

layout: post
date: 2021-04-14 18:16:16 +0300
categories:
  - idea
tags:
  - game theory
  - bayesian games
  - sub-perfect bayesian equilibrium
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Bayesian games
---

In the real world problems in data science are very challenging. In many cases we may have many ideas on how to model the challenge. Neural Networks have great capacity they give good results but they are slow in both inference and in training. Most famous models like Inception, BERT, GPT3, required massive investments in data and compute power and most data scientist do not have a Google sized budget.

In most such cases no one model gives the optimal predictions or explanation for the data. In the real world problems spaces have large but sparse solution space for the model to optimize in. When the decision surfaces are complex different algorithms have very different convergence rates. When there are multiple minima gradient descent algs like (SGD) and Hamiltonian monte-carlo (HMC) will not find the optimum because they only explore a subset of the sparse solution space once they get trapped in a local minimum. Optimization is an open area, but there are a number of strategies to overcome limitations of this type. Some also apply to smaller data sets.

Bayesian networks and Bayesian models can give good results starting with very little data. Bagging is a divide and conquer strategy that builds models that learn from their own mistakes. Ensembling is a strategy for using multiple copies of the same architecture to exploit more of the search space. Gated Bayesian mixture of experts is a classic approach to train multiple models which as they specialize give worse overall outcomes but when weighed give better outcomes than one model. 

Q. why not use all the resources on working with a single big model?
Models with higher capacity will converge slower. It will tend to overfit by memorising more of the noise in the data. It will learn to fit more and more noise.

Using several low capacity model should get better fit for each model. If you can train model with diverse specialization you can even train a model to put them to work in an optimal fashion. This is called a mixture of experts model.

There is however a caveat when working with many models. Repeated use of the evaluation (test) set split tends to be 

However, working with multiple model. Doing these, is not without
Ensamble workflow
When the decision surface has multiple minima each time we train we may be getting an model with different prediction errors. In such a case we can probably do better by using an ensemble and then combine them.   
get the data
preprocess
construct a hyper-model. 
tune the hyper parameters
use hyperband
use early stopping
use learning rates schedules
pick top model
retrain n version using a custom loop that emphasizes train a gated bayesian mixture of experts using the models as a starting point.
Mixture Pipeline - Top N
 is when your data 
get the data
preprocess
construct a hyper-model. 
tune the hyperparameters
use hyperband
use early stopping
use learning rates schedules
pick top N models
train a gated bayesian mixture of experts using the models as a starting point
Mixture Pipeline - Draw from parameter distribution
get the data
preprocess
construct a hyper-model. 
tune the hyper parameters
use hyperband
use early stopping
use learning rates schedules
pick top model hyperparameters
model them as a joint distribution
train a gated bayesian mixture of experts by drawing sets model parameters from the parameter distribution.






