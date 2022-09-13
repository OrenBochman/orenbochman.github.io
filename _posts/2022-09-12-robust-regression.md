---
title: Robust Regression
slug: reinforcement-learning-quiz
description: Robust Regression
author: oren bochman
date: 2022-09-12T16:03:06.877Z
lastmod: 2022-09-12T16:13:54.042Z
draft: true
tags:
  - robust regression
  - bayesian data analysis
  - drift detection
  - regime change
  - Koglomerov-Smirnov
  - two sample test
  - outliers
  - anomalies
  - quantile-regression
  - student-t
  - horse-shoe prior
  - slab and spike prior
  - concept drift
  - distribution drift
  - covariant drift
categories:
  - data science
  - robust regression
---

# Robust regression TLDR

Robust regressions are extensions to baysian and OLS regression that are less impacted by the presence of outliers. 

## Some notes on robust regression.

One useful way to think about your data/model duality is using robustness :
- initial model - model trained on a narrow data set.
- robust model - model trained on a  wide data set.
- stale model - model whose data set has drifted.

## The initial dataset and model

A narrow dataset is one which is just about sufficient to train the model and pass its diagnostics. For regression there are diagnostics per each of its many assumptions but in this case I am thinking about primarily the degrees of freedom, and uncorrelated features. What makes the dataset narrow is that it does not capture the full domain of the data producing process and thus is a sample of a much larger distribution.

## Robust model

To become more robust the dataset on which the model is trained needs to capture more of the domain of the generating process. 

How much is data is required for a model to achieve robustness? 

This is hard to say. **Intuitively what we want is that if some outlier appears in the dataset, the regression line won't move much.** For this to happen the model must have seen enough data that the outlier isn't particularly unexpected. For example a spike in sales in Christmas may present as an outlier the first time. But even a strong Christmas wont be as shocking after two lackluster years.

A more abstract way of considering this is to look at leave one out cross validation impact of each point. If it is sufficiently mall we are robust. 

If we don't have a way of getting lots of data we need to bake in robustness statistically. 

## Small samples

For small samples we replace the `Normal distribution` with the `Student-T distribution` and add the degree of freedom to our model. The reason that the normal distribution is less robust is that it has less mass in its tail so that any new point in $\mu +\sigma_3$ is going to move $\mu$ a lot. Student T and other heavy ailed distributions are less impacted by this behavior.

**For a small sample size we should use a student-T as a drop in replacement for the Normal**

## Resistance to outliers

However once our degree of freedom reach about 40 there is almost no difference between `Normal distribution` with the `Student-T distribution`. A second statistical tool is `quantile regression` which uses the median rather than the mean as a centrality indicator. And since mode is far less affected by outliers the model is naturally more robust.

**Once the sample is no longer small we may want to move to use quantile regression**

The passage of time is generally not enough to guarantee robustness. 

We need for the data generating process to have sampled a sufficient part of its domain. 

Once way to visualize this is using a galactic quadrant map familiar to trekkie's. Since In reality high dimensional data sets only fill a small region of space. One could try to imagine the full data set like a spherical galaxy. Initially we sample a few neighboring quadrants which correspond to some small angle slice in a few dimensions.

Changing conditions will teleport our sample to a distant new quadrant. Once we try to make prediction for points in this quadrant we will suffer epic failures since we never trained on this part of space and conditions here are quite different. 

## Drift detection

The first rule of model drift is detecting the drift!

In many domains e.g. online advertising data becomes stale quite quickly. (People buy their heart's desire or change their preferences and two month old data is worth next to nothing).
If we made our models fairly robust we may not so easily notice that the data had drifted.


1. `concept drift` in a marginal distribution, say price, which is like moving from one edge of the quadrant to the other.

2. `covariate drift` e.g. inflation would increase price, reduce income and decrease demand. This is a more complex pattern and corresponds to jumping to a strange new quadrant. 

3. `label shift` - this is where someone renamed a product or a category. Worse they may have completely replaced one web site with another - all product pages have changed and need to be remapped.

The solutions are fairly simple - retain the model adding more recent data. Remap old labels to new schema.

### Accuracy

Also if accuracy isn't impacted by the drift we may not be as worried. Chip Hugen suggest to monitor production accuracy metrics like: `F1 score`, `recall`, `AUC-ROC`, etc. When these are negatively impacted, it is worth noting there are a number of drift we would want to monitor.

### Summary statistics

`min`, `max`, `mean`, `median`, `variance`, various quantiles(such as 5th, 25th, 75th, or 95th quantile),

### Two sample tests

Two-sample hypothesis tests, shortened as `Two sample test`. Unfortunately a statistical significance in a two sample test doesn't immediatly translate to a practical significance.

Some tests are 
- `Kolmogorov–Smirnov` 
- `Maximum minimum discrepency`
- `Least kernal MMD`

see `Alabi detect` for implementations.

A second aspect of drift detection is the time window used