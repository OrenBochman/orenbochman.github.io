---
layout: post
title: Bayesian Betting
description: Different Multilevel Models Types
date: 2021-05-18 12:16:16 +0300
categories:
    - Stats 
    - Bayesian 
tags:
    - summarization task
    - lecture notes
    - bibliography
    - literature review
    - Kelly criterion
    - decision theory
    - model selection
    - filtering
    - smoothing
lastmod: 2021-04-24 12:16:16 +0300
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Question Answering
---

CRO is conversion rate optimization but it covers a number of related tasks. First the definition of a conversion varies covering impressions, click through, leads,  one time monetary transaction (sales and deposits), and long term relationships (subscriptions). For each there is a different metric used as an explanatory variable such as cost per mille, cost per click, cost per lead, revenue, and customer life time value). CRO also includes testing interventions to improve CTR or reduce customer churn. There is the planning campaigns to make the most effective use of a marketing budget. When one is running a supply side or demand side platform there is the task of optimizing conversion rates while satisfying supply/demand under budgetary and time constraints. 

In this article I'm considering the all too common task of optimizing lead allocations. In this case the main task is to predict for each lead which client will have the highest click through rate (CTR). As streams of leads leads and conversions events register the CTR model can be updated online. Also since CTR is generally Binomial in nature it is also easy to update in a batch. However conversion frequently take place long (days) after a lead is assigned to a client. 

Anyhow an interview with the client indicated that they *wanted* a real time bidding model. Unfortunately when a preliminary model was delivered that said that what they really *needed* was a set of rules to drive their systems ahead of time. This would allocate a lead according to its features to a client. I thought I could mine the real time model and extract rules from it. However this quickly resulted in an intractable number of rules.

I soon realized that I should run a classification or regression tree and convert its output into a set of rules. While converting a tree to a set of rules is intuitively simple it does present a number of challenges. Such as encoding and decoding the categorical nodes. Pruning redundant clauses of the rules covering the same continuous variable, merging branches of multiple levels of related categories. But then I realized there were additional complications - the data is unbalanced. The classification tree were ok except they used historical data over the optimal predictions. The baseline CTR model for real time scenario was not very good for the each transaction's ctr. 

With so many moving parts in the mix there arose a requirement for more stringent evaluations and some degree of EDA would also be useful.

A number of challenges appeared with this project. 

1. Conversion data is highly unbalanced as most of the lead will never convert.
1. Also other features are clustered unevenly e.g. for most clients there is little or no data. 
1. The curse of dimensionality compounds the above issue further since when one consider predictor variable factors they are often sparse. 
1. CTR for many web based events is less than 5% but since it is **a ratio** it can take take very large values should a  conversion occur first. This will give a sequence of 100% 50% 25% 12.5% 6.25%. The CTR trends will eventually correct themselves as leads convert But during this time the new client is allocated a disproportionate number of leads.
1. Once there is a good CTR model run a classification tree using the predictions.
1. Extract rules from the classification tree
    1. decode the numeric levels back to categorical values 
    1. discard redundant clauses
    1. merge different categorical levels for the same feature to a single clause
1. evaluate the model.



## Agility and Model selection

For each of these issues there are any number of possible fixes. However since our goal is to optimize conversion rates and maximize revenues we should be weary of any remedies that detract from the model's agility. A quick fix that renders the models sluggish to adapt to changing conditions will leave money on the table in the form of missed opportunities.

One question to raise at this point: Are we trying to solve a multi armed bandit problem (estimate unknown set of CTR) or are we dealing with a constantly moving target. If it is the former (learning long term trends) we should give our model long term memory but if it is the latter (moving target) we may want recent information to quickly drown out older signals. The tipping point is called the Goldilocks point.

## Handling Demand & Budgets

On the other hand there are other issues

 The bayesian paradigm does provide a formal way to gauge the impact of different interventions in the form of *Model Selection*.

1. Bayes Factor
1. Decision Theory
1. Kelly Criterion
1. Goldilocks learning.
1. Balancing exploration and exploitation

## Imbalanced Data :

There are two main approaches to ways to handle unbalanced data.
    1. Balance it by sampling from the larger clusters.
    1. Give more weight to the items in the smaller clusters.

However in practice implementing either strategy can be challenging. Discarding 95% of your data might not seem to be the best idea. And how do you set up a weighing scheme for different levels of each features. One should also verify that the strategy put into place to correct the imbalance works. For example decision trees algorithms consider the larger groups first and can merge smaller groups. So you need to ensure the model is classifying conversions and not overfitting on the noise and ignoring the signal. Things can be even challenging if one is optimizing for more than one goal.

### Open Questions:

1. What diagnostic should be used to verify that that the model isn't biased against the the smaller class? 
    - (accuracy/rmse/cross entropy loss on test set?
1. Can partial pooling or other multilevel modeling techniques can be used to correct imbalanced data?

## Data sparsity

Data sparsity can be handled by:
1. getting more data
1. smoothing add a n conversions and k leads to all clients.
1. Back off from hours to day to week to month in the CTR calculations. Backing off is the first solution I used as it is easiest to implement. However back off probabilities can inflate CTRs.

## Ratio Instability

There are a number of ways to handle this. But since it is a ratio we can break down these intervention into a smoothing component which adding a conversion and a stabilizing component which adds a number of leads to the numerator.
1. use a **heuristic** to keep CTR near zero until there are k leads. This will not resolve the issue when enough of the k-leads convert and boost CTR into two figures.
1. introduce our prior knowledge of CTRs sizes by **modifying the prior**. Instead of starting with an unstable uniform prior use @\beta(1,5)@ which should start the CTR at about 3%. Under a multi armed bandit scheme it will still get some leads to let it correct the CTR. One new issue that this creates is it artificially reduces that uncertainty associated with new client. However the numbers used should make this minimal.
1. Another approach could be to put use **partial pooling** in our CTR prediction to increase number of leads to a global value so long as the actual number of leads is low. This will start the CTR low but allow it to forget this prior value as it gets more leads.

@@\hat{\alpha}_j \approx \frac{(n_j/\sigma_y^2)\bar{y}_j +
(1/\sigma_{\alpha}^2)\bar{y}}{(n_j/\sigma_y^2) + (1/\sigma_{\alpha}^2)}@@


These approaches fix the issue of unstable CTR but marketing models need to be agile and to respond as quickly as possible to changing conditions. Any fix that renders the models sluggish to adapt to new conditions will leave leave money on the table in the form of missed conversion.

### Questions
1. How can we quantify the uncertainty of a clients' CTRs and what is the optimal way to factor this uncertainty into our estimate of the CTR. 
    - Simulation
    - Custom loss function
1. How to make a model that learns long term trends but is also flexible and responsive to the most recent trends. 
    - find the Goldilocks point
    - different features for different time frames.
    - partial pooling
1. How to compare different rules sets?
    - **Model selection** is the theoretical framework. But with the caveats that it is complex, perhaps even intractable, an engineering headache and can introduce additional errors instead of reducing errors.
    - simulation + RMSE/Classification
    - Regret - the cost of misclassification.
1. How to ballance exploration and exploitations?
    - introduce a parameter for exploration vs exploitations.
    - use model selection to evaluate the parameter with same caveats as before.
1. Is there an decision tree algorithm that takes raw log data and classifies using estimated CTR ?