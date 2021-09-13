---
title: Deep Learning Intuitions
layout: post
date: 2020-10-25 08:11:16 +0300
categories:
    - intuition
tags:
    - data analysis
    - python,
    - deep learning
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: some titles
---

# TLDR

Stacking n-layers RELUS in a feed forward neural network is functionally equivalent to a set of nested inequalities.

# RELU intuition

In think this is something I came up with during first going over Jeffery Hinton's Deep learning Course on Coursea. Would be nice to think if other DL  blocks have a simple conceptual form.

You may have heard of linear programming - even learned about it in high school. Linear programming is a basically optimizing under linear constraints. 

TODO: add a small sketch on how this looks.

RELU feed forward networks are very similar to constraints used in linear programming.

let's consider how and why.


```python

relu = lambda x: x * gradient if x> bias else 0 #relu
x = np.random.randn(3, 1) #random initialization

out = relu(Weights * x +bias) 
```
@@
    \left{ 0 & x < b \\
    x & x >= b 
@@

so for each input in x we only see values in (x>bias)
if we set biases = 0 which we can if we normalize and center our data during preprocessing then in the out put we only see values of x>0


## for a 2 layer network

```python
relu = lambda x: x * gradient if x> bias else 0 #relu
x = np.random.randn(3, 1) 
activation_1 = relu((W * x)+b)
out = relu(np.dot( W,relu(np.dot(W_1,x)+b_1)+b_2)
```

## forward-pass of a 3-layer neural network: 

```python
f = lambda x: 1.0/(1.0 + np.exp(-x)) # activation function (use sigmoid) 
x = np.random.randn(3, 1) # random input vector of three numbers (3x1) 
h1 = f(np.dot(W1, x) + b1) # calculate first hidden layer activations (4x1) 
h2 = f(np.dot(W2, h1) + b2) # calculate second hidden layer activations 
(4x1) out = np.dot(W3, h2) + b3 # output neuron (1x1)
```

the functional form of a DNN with one RELU layer looks like:

y = ax+b



A fully connected layers of RELUs with zero biases is just a set of inequalities e.g.

@@
x>a or $x \in (a,\infty)
x<b
y>c
y<c 
@@

based on the parameters. A second layer of RELU has second order inequalities e.g.

@x < b and x > a or x \in (a,b)@
@x > a and y > a or (x,y) in ()X()@
