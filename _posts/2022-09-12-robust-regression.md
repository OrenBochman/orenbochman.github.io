---
title: Robust Regression
slug: reinforcement-learning-quiz
description: Robust Regression
author: oren bochman
date: 2022-09-12T16:03:06.877Z
lastmod: 2022-09-12T16:13:54.042Z
draft: true
tags:
  - regression
  - bayesian data analysis
categories:
  - data science
  - regression
---

# Roust regression

## Some notes on robust regression.

One usefull way to think about your data/model duality is using robustness :
- initial model - model trained on a narrow data set.
- robust model - model trained on a  wide data set.
- stale model - model whose data set has drifted.

## The intial dataset and model

A narrow dataset is one which is just about sufficent to train the model and pass its diagnostics. For regression there are diagnostics per each of its many assumptions but in this case I am thinking about primarily the degrees of freedom, and uncorrelated features. What makes the dataset narrow is that it does not capture the full domain of the data producing process and thus is a sample of a much larger distribution.

## Robust model

To become more robust the dataset on which the model is trained needs to capture more of the domain of the generating process. 

How much is data is required for a model to achieve robustness? 

This is hard to say. **Intuitively what we want is that if some outlier appears in the dataset, the regression line won't move much.** For this to happen the model must have seen enough data that the outlier isn't particularly unexpected. For example a spike in sales in Christmas may present as an outlier the first time. But even a strong Christmas wont be as shoking after two luckluster years.

A more abstract way of considering this is to look at leave one out cross valdation impact of each point. If it is sufficently mall we are robust. 

If we don't have a way of getting lots of data we need to bake in robustness statisticaly. 

## Small samples

For small samples we replace the `Normal distribution` with the `Student-T distribution` and add the degree of freedome to our model. The reason that the normal distribution is less robust is that it hass less mass in its tail so that any new point in $\mu +\sigma_3$ is going to move $\mu$ alot. Student T and other heavy ailed distributions are less impacted by this behaviour.

**For a small sample size we should use a student-T as a drop in replacement for the Normal**

## Ressistance to outliers

However once our degree of freedom reach about 40 there is almost no difference between `Normal distribution` with the `Student-T distribution`. A second statistiacl tool is `quantile regression` which uses the median rather than the mean as a centrality indicator. And since mode is far less affected by outliers the model is naturally more robust.

**Once the sample is no longer small we may want to move to use quantle regression**

The passage of time is generally not enough to gurantee robustness. 

We need for the data generating process to have sampled a sufficent part of its domain. 

Once way to visualise this is using a galactic quadrant map familier to trekies. Since In reality high dimentional data sets only fill a small region of space. One could try to imagine the full data set like a spherical galaxy. But intially we typicaly only sample a few nighbouring quadrants which corresspand to some small angle slice in a few dimensions.

Changing conditions will teleport our sample to a distant new quadrant. Once we try to make prediction for points in this quadrant we will suffer epic failures since we never trained on this part of space and conditions here are quite differet. 

## Drift detection

The first rule of model drift is detecting the drift!

In many domains e.g. online advertising data becomes stale quite quickly. (People buy thier heart's desire or change thier prefrences and two month old data is worth next to nothing).
If we made our models fairly robust we may not so easily notice that the data had drifted.

Also if accuracy isn't impacted by the drift we may not be as worried. Chip Hugen suggest to monitor production accuracy metrics like: `F1 score`, `recall`, `AUC-ROC`, etc. When these are negatively impacted, it is worth noting there are a number of drift we would want to monitor.

1. `concept drift` in a marginal distribution, say price, which is like moving from one edge of the qudrant to the other.

2. `covariate drift` e.g. inflation would increase price, reduce income and decrease demand. This is a more complex pattern and corresponds to jumping to a strange new quadrant. 

3. `label shift` - this is where someone renamed a product or a category. Worse they may have complely replaced one web site with another - all product pages have changed and need to be remapped.

The solutions are fairly simple - retain the model adding more recent data. Remap old labels to new schema.
