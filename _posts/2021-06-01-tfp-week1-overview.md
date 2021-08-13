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



One point to note is that many ML courses delve into the "dry" engineering aspect and gloss over the "motivating" examples which are just a demonstration and not the main item. There are two issues with this approach. One is that a model needs some kind of environment to test and evaluate it. And the student benefits more by learning how to think and reason about the techniques than by just learning to replicate the code as a black box. 

So to get the most out of a course you may to review complementary materials. Your milage may vary depending on the learning curve:
     - videos, particularly ones that give a survey of the problems you are working on
     - articles with similar techniques.
     - books on theory
     - research papers if nothing else is available 

On the flip side you should be aware that just as much as teachers like to skip over details they can't resist showing you certain techniques. So try to master these. Try to think where else they may be used and try to incorporate them into your work before they fade away. Look over the title of recent papers by the profferers and don't be shy to asks them about methods or problems they have worked on - this can have many many benefits.

I recommend you should approach the material with plenty of enthusiasm and invest energy in making up for any such shortcoming. 

Learn to own the code as soon as possible. Can you remember the methods. Understand the problem being presented. The problem definition begins with a task and is ML delineated by the variables and features available in the data. Two big questions to consider are what *prior knowledge* should be incorporated into the model and what *types of uncertainty* is one dealing with. With deeper understanding of the relations of the features one can modify the model to make these explicit. These can be a hierarchy, correlations, variance and covariance, conditioning, independence, causation and other structures things like mediation.

Next one should consider a baseline model? This should be the simplest model possible - in the realm of probability this is usually a model with a single most important parameter - the mean. You should try to implement this. Jeremy Howard frequently points out that  more sophisticated models may not fate much better. 
This type of model is getting you to think more like a statistician and you will  immediately be able to think about improvement. Adding a second term with a higher moment. What about first order interactions between variables and higher order interactions. Can pooling help, can partial pooling help more. But rather than implementing all these you should consider what other algorithms could be used. Once you have a baseline model you should be able to try out these model with two or three lines of code which leads to the next major point

How should the model be evaluated. What's the best metric (KPI) for the task. Loss, accuracy. What regularization can keep complexity and overfitting at bay. How do we handle a model which outputs both a prediction and a certainty level? Can we train faster of better. Should we use regret. Some models can just be queried others require extra care and work to coax a good result. These could be using embeddings with a vector space metrics, doing a beam search or other methods. Like I mentioned above always be on the look out for new methods to mine you models.

Finlay its time to think about main item. Can we break down the model conceptually break into it moving parts. What are the model assumptions? Working with probabilistic and statistical models provides a data scientist with many diagnostic capabilities which should become part of the analysis. When assumptions are violates outcomes may require attention but often the model will still function.
Think  what is the neural net part trying to do and what is the probabilistic component doing? E.g. The NN might look for faces and the probabilistic part may just be a softmax which squishes the outputs into  a probability distribution.

Though I mentioned evaluation before, more in the context of the tasks and baseline model. You will need to have a second go with you specific model in mind. Look at over/under fitting and at tunning hyper-parameter and how do we tune them.

## Skills:

the official learning objectives are:
- Sample and compute probabilities from a range of Distribution objects
- Create multivariate independent distributions from separate distributions
- Understand and manipulate shape semantics for Distribution objects
- Understand and apply broadcasting rules in the creation of distributions
- Create and train parameterised distributions to optimise data likelihood

but there is a lot more to be learned here:
1. recall basic probability theory: definitions of expectation, variance, standard deviation.
1. create distributions tensors for univariate, bi-variate and multivariate.
1. sample from a distribution
1. understand the sample, broadcast, event components of a tensor. 
1. reshape distributions dimensions from batch to event.
1. understand how broadcasting works.
1. learnable parameters for a distribution.
1. develop a Naive Bayes classifier for newsgroup articles.
1. develop a custom training loop in tensor flow

## Distributions - the sample the batch and the event

The way we are taught probability and statistics and later how we approach multivariate data in data science reinforces a static and low dimensional view of data. But when we want to work with Graphical models, Bayesian networks, Multilevel models and later with probabilistic neral networks we need to expand our thinking about these. One key new skill one must develop is creating distributions with specific shapes and transforming to new shapes.

This manipulation of tensors should already be familiar from work with convolutional or sequence models. But is those cases you typically only need to handle shapes at the input or output of the model and the framework mostly deals with these nitty gritty details. With TensorFlow probability shapes these details need to be part of one's thinking. Unless they are second nature you will struggle to implementing the with the more complex parts and TFP is just a part of a much bigger picture.

## Resources:

if like me, you initially feel that numpy array broadcasting feels strange and awkward you may want to look at:

- [Numpy Broadcasting Guide](https://numpy.org/doc/stable/user/basics.broadcasting.html)
- [Array Broadcasting in Numpy](https://numpy.org/devdocs/user/theory.broadcasting.html)