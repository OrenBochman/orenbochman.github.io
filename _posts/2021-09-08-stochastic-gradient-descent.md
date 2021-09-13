---
layout: post
title: Stochastic Gradient Descent - The good parts
date: 2021-08-29 00:00:00 +0300
description: Stochastic Gradient Descent - The good parts
img: cover/dice-distribution.jpg 
fig-caption: # Add figcaption (a mountain trail )
tags: [data science, deep learning, algorithms, optimization, unfinished, needs more love] 
---

# TLDR

What's the best way to scale a mountain ?

Stochastic gradient descent (SGD) seems is quite a mouthful and it is a class of a optimization algorithms used to train deep neural networks. In these we consider the loss function a mountain that needs climbing and being lazy we make it negative so we only have to go down. Confused?  If you are here you probably knew that already this article is both an overview and a repository of answers to questions I came up with about SGD over the years as I learned it and thought it.

# Stochastic Gradient Descent - The good parts

I think I first first learned about gradient descent in second year of collage more or less this monte carlo methods and simulated annealing. Today the stochastic variant is commonly used in the context of training deep neural network models with forward and back propagation and in this context is seems more complex. I also has a lot of mathematics. I love mathematics and most of the math for SGD is not particularly difficult. Formally what you need first year calculus and linear algebra. 

When I came back to SGD to using it for fitting Deep Neural Networks I had many questions and not much in the way of answers. I'd like to present some of these and the solutions I came across and others that I figured out and I will also try to go over some of the variants and ideas being used used.

I got a lot of input about geometry from Geoffrey Hinton's course and I got some practical advice from the book answers from (Montavon et al., 2012) and I got input on online learning using regret from Goodfellow

# Decision boundary and Weight Space.

Say we want to classify cats and dogs or perform OCR. In the case of binary classification we can imagine the data as two groups of point mixed either separable or more likely overlapping. As data is seen by the model it adds weights to adjust a decision surface which attempts to best separate the two groups.

Underfitting means we have not given the model enough data points to get the decision boundary right in some areas. Overfitting means the boundary is represents both the true nature of the data, AKA the signal and the noise. Fitting the noise will make the model less likely to fit new data.

# SGD

SGD is a general purpose optimization technique for fitting a function using some parameters. However it is worth pointing out that the algorithm is attempting to find a spot within the space of weights that minimize the overall error for predicting the training set. A major problem is that dnn are highly nonlinear with many local minimas. Also a model like VGG had 138 Million parameters.

# Picking a minima

There is an idea in statistics called model selection. The idea is that as more data comes in certain models are eliminated and others become less likely. While SGD is not a bayesian procedure I think one could extrapolate:

All thing being equal given two local minima which would we prefer?

The deeper of the two basin as it would give us a model with lower loss. This usually will score higher on other metrics such as accuracy.
The wider of the two basins if they have the same depth. As a basin of attraction is wider and it will give us a more stable solution. Many DNN are hard to fit. More stable also means we can reach to the optimum quicker.

Based on the Bayesian model selection I would hazard a guess that a wider basin would be preferable to a narrow one as it could contain a larger range of models which would be likely to generalize better than a smaller basin.

Why choose just one local minima?

Ensemble methods combines multiple models to make better predictions. We can use completely different models (different architecture and algorithm) or pick the same model and architecture but use weights that have converged to different local minima. Different minima we should expect to be able give a similar loss but due to different decision surfaces and we can use two or more to give a better model. While hardly a new idea, this is still used to get better results out of the state of the art and in competition.


# So how do we get to the minima?

The main idea is that taking the negative of the gradient of the error is a vector that points to the minima. We then take a step in that direction governed by a constant called the learning rate.

# What is the learning rate?

Learning rate is what we call a hyper parameter, that is a setting of the optimization algorithm but not a parameter used by the model. Now is we use a learning rate that is small we will be taking baby steps and may take a very long time to finish training. If we pick a value that is too large we will over step the goal diverge and possibly even jump to a different attraction basin.

Now learning rate is important and is rarely kept at a single value. Most algorithms will benefit from adjusting the learning rate to accommodate the form of the basin or based on the epoch used for fitting.

Finally second order method estimate the second derivative of gradient. This facilitates finding the optimal learning rate and reaching the minima in one step. However, these methods while faster learners have a computational complexity that is not practical.

# What are the main variants of SGD ?

At one end of the spectrum is Gradient Descent which for DNN is prohibitive to perform due to a high computational complexity as calculating the gradient prior to updating the weights would require performing a forward pass on all the data to calculate the error and then back propagate it before each weight update. The upside is that using all the data will generate a precise gradient. The downside is that depending on the initial conditions (how we initialize weights and biases) may have us within the convergence basin of a local minima. GD will lead us there and will not be able to get us out.

At the other extreme is the online version of gradient descent. This uses just one sample for each step. The upside is that we can make one step per sample in each epoch. downside is that we could have low quality gradient estimate. On the upside we can more easily jump between local basins of attraction. The main issue is that the gradient varies a lot and it becomes difficult to understand if the model is improving or not and if it is overfitting or not.

The compromise is Batched gradient descent. What this does is do a forward pas on a small batch of data points and use the averaged error adjust the weights in a single BackProp step. The direction used is in one dimension and we use the dimension with biggest gradient.

# Batch size

Batch size is one of the main hyper parameters used in SGD. We use batches to let multiple rows of data inform the direction our optimization step should take. The larger the batch size the more we are likely to be going in the a good direction (to our local minima)! But it also means that we make less steps per  per epoch. 

Hey we want to get to the global minima. To get out of a local minima we need to allow just the opposite.

Also batches are are a wellunderstood and consitant method of speedomg up SGD faster since batches are computed in parallel and the more parallel the algorithms the more compute we can leverage.
However many acceleration techniques like conjugate pairs only work on batches ) So in the end we will want to use the biggest batch size that our gpu will allow and that depends first on the number of cores, the second constraint is the the memory needed per row. It can be large if it is an image or a very big embedding. This means that this important hyperparmeter which controls hardware speedups is decided primarily by the hardware.

# Learning rates, decay and schedules

@@ W(t+1) = W(T) -\eta \frac{\partial E^T }{ \partial W} @@

The learning rate @\eta@ is probably the most important hyper-parameter. It corresponds to the step size on takes in the direction of the gradient. 

It can be a single number in a simple algorithms but it can take the form of a diagonal matrix with a value for each row. This is often essential as learning happens at different rates as we get further from the source of the error at the top layer.

Finlay it is also common to change the learning rate recognizing that on a plain we should take big step but near a cliff we should be more restrained. Again the simpler idea is to let the learning rate decay but using a more complicated schedule can have different benefits.

As mentioned in the previous section first order algorithm tend to go after local minima and shrinking the learning rate can trap them inside a local minima.

 There are a number of strategies to help the algorithm get out of the rut. One strategy to use periodic learning rate schedule which will easily let the algorithm jum out of the local minima but these usually come with a safety mechanism of saving snapshots in case it jumps to the middle of nowhere and we'd like to try again.

 Yet another approach is to try to learn the minimum and maximum training rate by training for an epoch with a schedule triangular schedule. This innovative method pioneered by leslie ... can have dramatic speedups.

# Momentum

@@ \Delta W(t+1) = \eta \frac{\partial E_{t+1} }{ \partial w} + \mu \Delta w(t)@@

Momentum is another method used to increase the size in the direction where curvature is spherical and damps it in the directions where it is not. I like to think of this as a second order learning rate in which we introducing momentum to add an element of memory to the learning rate. Algorithms with momentum seems to do better navigating saddle points.

## Nesterov momentum

one problem with momentum is it may be lagging behind the gradient causing us to overshoot. There is a simple correction to this called the Nesterov Accelerated Momentum (NAG) which allows to compensate for this lag.


# Shuffling and bookkeeping

We can speed learning with the the following two strategies to use rows with maximum information content:

1. Shuffle the training set so that successive training examples are unlikely belong to the same class.
1. Present input examples that produce a large error more frequently than examples that produce a small error.


## Out of core learning 

Many of the training loops I wrote for NLP transformers use an out-of-core approach. This simply means there is a low level generator for the data set we cannot store in memory and there is a higher level loop or generator that uses an index or a hash for the data and fits in memory where we manage metadata such class, error rates, and other metadata. We then manage shuffling and augmentation and batching at the second level . One Example is when working with reformer style transformers in NLP we want to bucket together rows of certain length. Another aspect of using this approach is due to  augmentation where we want to generate and cache augmented cycles. Of course all these make the notion of an epoch more complicated. But  dea has to do wThis makes the notion

# Initilization schemes

the intilization scheme of the network seems to be another aspect that can affect its convergence rate.

# Second order methods

Second order methods calculate or estimate the Hessian or second order derivative matrix. This then allows to make much better steps towards the global maximum. However, inverting this matrix for a neural network is often intractable.

some words on second order methods.

look at the paper on training and

variants - adam, adagrad, etc - do we care on these

adding figures.

# AutoML and the future of SGD !?

Some years back I attended a couple of talks by google ai execs. They have a very broad overview of work being done in the field and reported some of the more amazing projects conducted by google ds. Since Google makes an effort to nab all the best researchers and entice them with unlimited compute power, some of the stories are pretty amazing.

In one such talk by Jeff Dean who heads AutoML discussed their work on evolving better optimization algorithms that beat SGD. What I liked about this is that it is looking at the problem from first principles and that he reports that the AutoML program made a number of discoveries that eventually created a variant of SGD with a RELU and a feed forward network. The program developed a rather terse piece of code for this where we use complex libraries. IT also takes an expert interpreter to determine what each successive improvement in low level code corresponds too. Jeff Dean pointed out that when they let AutoML run on it eventually evolved a number of variants that beat SGD.

AutoML and similar platforms for minimal DS are often touted as a replacement of data scientists. Perhaps one day they will be just that. Lots of DS work is very routine. On the other hand others Google executives are quick to point out that without good DS your models may converge very slowly, maybe never. Trying to optimise the hyper-parameters for a single SGD algorithm is a very compute intensive task so evolving the algorithm from scratch is orders of magnitude more of a challenge. One imagines that the compute costs for something like this might be enough to fund a dozen startups.

# Terminology

- Back propagation 
    : Also Backprop, the backwards pass through a neural network in which we attribute the overall output to each node and change their weights. This is the more complicated step. 
    @@ W(t+1) = W(T) -\eta \frac{\partial E^T }{ \partial W} @@
- Forward propagation
    : The forward pass through a neural network in which we calculate its output. This is the simple step.
- Gradient
    : The slope in all direction of a tangent on a curve.
- Loss
    : The loss is a measure of the sum of the difference between our prediction and the actual value. There are many variants e.g. for classification and regression. However loss is the raw quantity we are trying to reduce. We may calculate more standardized metrics like accuracy.
- Overfitting 
    : when we learn the noise as well as the signal this is often considered to be due to the model being to complex.
- Hyperparmeter
    : These are settings in the algorithm like batch size of learning rate which we can tweak that can make it slower or faster. Slower in this case often means it runs forever. Finding a good setting for our model's Hyperparameters is called Hyperparmeter tuning and is rather time consuming.
- Underfitting
    : When our approximation of the signal is too simple and does not account for local changes.
- Objective function
    : Objective here means target and objective function is simply the function we want to optimize
- Regularization
    : A process or activity used to battle overfitting. Adding more data, using augmentation, reducing number of parameters, use l1 and l0 metrics, early stopping, dropout and using ensembles are all considered regularization techniques.
- Momentum
    : from physics is the tendency of a mass to continue in its path of motion.

# Bibliography

- Montavon, G., Orr, G.B., Müller, K.-R., 2012. [Neural networks tricks of the trade, 2nd ed, Lecture notes in computer science. Springer, Heidelberg.](https://www.springer.com/gp/book/9783642352881)
- Goodfellow, I., Bengio, Y., Courville, A., 2017. [Deep learning.](https://www.deeplearningbook.org/)
- Montavon, G., Orr, G.B., Müller, K.-R., 2012. [Neural networks tricks of the trade, 2nd ed, Lecture notes in computer science. Springer, Heidelberg.]()
- Real, E., Liang, C., So, D.R., Le, Q.V., 2020. [AutoML-Zero: Evolving Machine Learning Algorithms From Scratch.](https://arxiv.org/abs/2003.03384) arXiv:2003.03384 [cs, stat]. 
    - Note: Research about evolving SGD from scratch.
    - [blog post](https://ai.googleblog.com/2020/07/automl-zero-evolving-code-that-learns.html)
    - [paper](https://arxiv.org/abs/2003.03384)
    - [random video](https://www.youtube.com/watch?v=aumUBLMfIA4&ab_channel=HenryAILabs)
    - [github Repo](https://github.com/google-research/google-research/blob/master/automl_zero/README.md)
