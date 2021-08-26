---
layout: post
title: Algorithmic Intuition
date: 2021-08-13 00:00:00 +0300
description: Algorithmic Intuition for Isolation Forest
img: dice-distribution.jpg 
fig-caption: # Add figcaption (optional)
tags: [modelling, chat bot, wikipedia, support] 
---

# Decision Trees

- A tree is a list of constraints that divide a set into boxes.
- A decision tree induces a Topology on a (data)set.
- Trees often binary
- Trees are built using a greedy algorithm
- Building the tree is done recursively until a meta-constraint is reached:
    1. depth. (just consider the tree)
    1. total leaf nodes. (just consider the tree)
    1. largest node size. (consider the data partition)
- Each node can be assigned an Entropy or a GINI score

## Pros:

- Trees are fast to train and inference
- Simple to code and read.
- Considered interpretable Model.
- Work for regression and classification problems.

## Cons:

- Many variants of trees exists.
- Decision boundaries are at 90 degrees to each axis.
- Have a tendency to over-fit.
- Can be highly sensitive to small changes of the sample. (chaos).

## Bagging

## Boosting

## Random Forest

- try different subset of variables and values when building a tree

## Anomaly detection using - Isolation Forest

- trees a grown in a random fashion !?
- outliers and anomalies are naturally isolating and will therefore tend to be positioned closer to the root of the tree.
- nodes in a cluster are harder to isolate and require deeper tree.



## Bayesian Trees


## Some ideas

1. How can we qualify and quantify the difference between different datasets/language models drawn from a newspaper/encyclopedic/technical papers/novels/tweets/forums/transcribed radio shows/ conversational language.
    1. different words
    1. word probabilities
    1. similar words (replaceable words)
    1. related words (word affinity)
    1. semantics 
        1. top word sense per lexeme
        1. word sense distribution per lexeme
    1. n-gram probabilities.
    1. difference in the grammar.
        1. mean length of sentence.
        1. mean complexity of vocabulary.
        1. co-reference frequency.
        1. use of pronouns and wh-words.
        1. other constructs
        1. questions
        1. use of affect, sarcasm
    1. etc
2. Suppose we had could characterize all these moderately well using a number of covariance matrices and distributions or even HMM. 
3. Could we use a KL distribution to simulate one from the other.
4. Could we build a transformer to translate one into the other.
5. How would we test/evaluate these.

Test case:

Hebrew/English movie subtitles
