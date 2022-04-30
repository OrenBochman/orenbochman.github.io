---
layout: post
title: CRO - Classification rules
description: Constructing classification rules from historical lead data
date: 2021-04-24 12:16:16 +0300
categories:
  - NLP
  - notes
tags:
  - CRO task
  - lecture notes
  - bibliography
  - client ranking
  - lead ranking
  - automatic extraction of rules
  - online marketing
  - transactions
  - tabular Date
  - naive bayes classifier
  - decision rules
  - programmatic campaigns
  - web analytics
  - analytics
  - conversions
  - Lead
  - CRO
  - bayesian methods
  - bandits problem
  - cost-sensitive decision trees
  - unbalanced data
lastmod: 2022-04-30T09:14:08.122Z
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Question Answering
slug: cro-classification-rules
draft: true
---

> Hostile armies may face each other for years, striving for the victory which is decided in a single day. This being so, to remain in ignorance of the enemy's condition simply because one grudges the outlay of a hundred ounces of silver in honors and emoluments, is the height of inhumanity
>- Sun Tzu, The Art of War.

Many online marketers risk vast marketing budgets on media purchases but begrudge spending on analytics and optimization. The most basic application of web analytics can quickly identify issues that lead to half the media purchase going to waste. With typical conversions rates being what they are and an optimization effort that increase CTR by just one percent can have a dramatic effect on marketing performance.

# Leads and conversion

Conversion rate optimization (CRO):
    is the attempt to maximize performance of a marketing campaign. Conversion usually refers to the completion of a transaction in which money changes hands. 

As marketing efforts can be diverse and involve manifold activities with numerous steps
one needs to pick the key performance indicator which serves as a metric for measuring success.
It is best to consult with the stakeholders to identify the KPI to optimize. Typically, these will be either conversions or revenue. Revenue data is considered very sensitive and in most cases consultants or a digital marketing agency will be asked to work on the conversion data without seeing the actual revenue generated. In either case a lot of work can be done to improve outcomes.

## Getting a unified picture of the lead

I helped guide a corporate client through a multi-year project to measure and integrate all their data into one place (a marketing data warehouse) thus providing a unified picture for all their activity. 
The main need was that the in most cases the conversions took place offline and had lost the data associating it with a campaign. However once the connections were made it became possible to close the attribution loop and make very good analysis of the marketing data.

The first step is to wrangle the data being collected into a useful form. In larger organization or when working with multiple advertising platforms the raw data for marketing is usually split into several silos. For instance I've had worked with a client that had:
- Campaign specs & performance from serval advertising platforms
    - Google Adwords
    - Facebook
    - Instagram
    - Youtube & Smaller Video Aggregators
    - Taboola & Outbtrain
    - Buzz feed
    - Mail Chimp
- Web site sessions:
    - main website
    - landing pages
    - redirect pages
- Application install in app store platforms
- Application session.
- Lead in a lead management systems.
- Registration data in the company's customer relation management (CRM) system.
- Call data 
    - from Goggle Adwords.
    - from their call center's software.
    - Offline to online advertising via phone tracking providers.
- Online experiments i.e. A/B tests.

But what is a useful form?

- DBA will propose a database with several levels of [normalization](https://en.wikipedia.org/wiki/Database_normalization) which makes explicit the relationships between different entities while avoiding *data duplication* - a known source of errors.
- [Tidy data](https://www.tidyverse.org/) for data analysis is usually done on tabular data (either data frame or a spreadsheet) 
    - removing or imputing missing values and keeping track of these operations.
    - Timestamps split into their parts.
    - Splitting fields with several data items.
    - Ordinal variables converted to a numerical form.
    - Categorical variables encoded numerically and converted to dummy columns.
    - Which has been arranged as a set of observed variables on which out KPI depends.

Challenges

- This is ideal for long term efforts but the reality is that most marketing activity move very quickly and often without the benefit of a DBA to support them.
- For analysis we will want to queries to unify the data from many tables in denormalized form which is more amenable for analysis. 
- Another point is that the data we usually get does not even have the KPI we want. KPI are unusually aggregates. Analytics data is a transaction log which lacks aggregates.




## Decision Tree algorithms

|name                                               |year| association criterion| pruning| features |
|---------------------------------------------------|----|----------------------|--------|--------- |
|CHAID (Chi-square automatic interaction detection) |1980| @\chi^2@             |        | non parametric|
|CART (Classification And Regression Tree)          |1984| GINI/Entropy         |        |          |
|ID3 (Iterative Dichotomiser 3)                     |1986|                      |        |          |
|C4.5 (successor of ID3)                            |1993|                      |        |          |
|Regression Trees                                   |    |                      |        |          |
|Random Forest                                      |    |                      |        |          |
|MARS                                               |    |                      |        |          |   
|Conditional Inference Trees                        |    |                      |        |          | 

### Decision Tree construction 

> Algorithm parameters: step size  @\alpha \in (0 , 1] , \epsilon > 0@ 
Initialize  @Q  ( s, a ), \  \forall s \in S^+ , a \in A ( s ),@ arbitrarily except that @Q ( terminal , \cdot ) = 0@
>
> Loop for each episode:  
@\quad@Initialize @S@
@\quad@Loop  for  each  step  of  episode:    
@\qquad@Choose  @A@ from @S@ using some policy derived from @Q@ (eg @\epsilon@-greedy)   
@\qquad@Take action @A@, observe @R, S'@
@\qquad Q(S,A) \leftarrow Q(S,A) + \alpha[R+\gamma \max_a(S', a) - Q(S, A)]@
@\qquad S \leftarrow S'@
@\quad@ until @S@ is terminal


1. set the current node as the root node:
1. while the current node's depth <= `max_depth`:
    1.A decision tree learns a sequence of nodes. These nodes are "if then" questions with each question splitting the feature on a value.
Resulting in two or more child nodes. (some algorithms can split to more than two children)
        - if the node has items from multiple target class is *impure*. 
            - if it has sufficient items it and will be split to improve accuracy.
            - if it does not it will be assigning the most common target class 
        - A node has items from a single target class it's *pure* and is not split further

! The basic steps to train a decision tree can be written down very easily:

1. Loop through each column of the dataset in turn.
1. For each column, loop through each possible level of that column in turn.
1.        Try splitting the data into two groups, based on whether they are greater than or less than that value (or if it is a categorical variable, based on whether they are equal to or not equal to that level of that categorical variable).
        Find the average sale price for each of those two groups, and see how close that is to the actual sale price of each of the items of equipment in that group. That is, treat this as a very simple "model" where our predictions are simply the average sale price of the item's group.
After looping through all the columns and all the possible levels for each, pick the split point that gave the best predictions using that simple model.
We now have two different groups for our data, based on this selected split. Treat each of these as separate datasets, and find the best split for each by going back to step 1 for each group.
Continue this process recursively, until you have reached some stopping criterion for each group—for instance, stop splitting a group further when it has only 20 items in it.

A good value (one that results in the largest information gain) for a split point is one that does a good job of separating one class from the others. 


### Challenge - Imbalanced data

The decision tree algorithm is effective for balanced classification, although it does not perform well on imbalanced datasets.
The split points of the tree are chosen to best separate examples into two groups with minimum mixing. When both groups are dominated by examples from one class, the criterion used to select a split point will see good separation, when in fact, the examples from the minority class are being ignored.

``` python
from sklearn import model_selection

# define model
weights = {0:0.1, 1:1.0}
model = DecisionTreeClassifier(class_weight=weights)
rf_sub_cv = ensemble.RandomForestClassifier(random_state=34,
                                            class_weight='balanced_subsample')
parameters = {'n_estimators': [10, 100, 500],
    'max_depth': [5, 10, 30],
    'min_samples_split': [2,5],
    'min_samples_leaf': [1,2,5]
    }
clf = model_selection.GridSearchCV(rf_sub_cv, 
    parameters, 
    cv=5, 
    scoring='f1_weighted')

clf.fit(X_train, y_train)

clf.best_params_

y_pred = rf_sub.predict(X_test)

confusion_matrix(y_test, y_pred, rf_sub)


## The Chi-squared Automatic Interaction Detection (CHAID) 

### Overview

[(CHAID) Chi-squared Automatic Interaction Detector, Gordon V. Kass 1980](). is one of the oldest DT algorithms.
- CHAID builds decision trees for classification problems 
- CHAID uses multiple decision nodes for classification. 
    - pro: more intuitive interpretations of categorical variables
    - con: nodes can quickly become too small 
    - con: trees can be very shallow and hard to relate to business problems.
- CHAID handles missing values as a class, which it can merge with another class
- CHAID does not have pruning
- CHAID decision criteria for merging is 
    - when the dependent variable is continuous, the [F test]() is used 
    - when the dependent variable is categorical, the [chi-square test](https://en.wikipedia.org/wiki/Chi-squared_test) is used.  

@@ \chi^2 = \sum_i {(y_i – \widetilde y_i )^2 \over  \widetilde  y_i} \tag{ χ-squared test} @@ 

@@ F = \frac{\text{explained variance} }{\text{unexplained variance} } 
     = \frac{\text{between-group variability}}{\text{within-group variability}} 
     = \frac{ \sum_{i=1}^{K}
                \frac{ n_i(\widetilde{y}_{i\cdot} - \widetilde{y})^2 }{ (K-1) }}
            { \sum_{i=1}^{K} \sum_{j=1}^{n_{i}}  \frac{ \left( y_{ij}-\widetilde{y}_{i\cdot} \right)^2}{(N-K) } }
 \tag{ F test}
 @@

The @\chi^2@ test is being replaced by a G-test, which is proportional to to the Kullback–Leibler divergence of the theoretical distribution from the empirical distribution....

@@ G = 2 \sum_i y_i \cdot \ln {\left(  y_i \over  \widetilde  y_i \right) } \tag{ G test}@@ 

```python
#scipy.stats.power_divergence #with lambda_=0
from scipy import stats
from scipy.stats import power_divergence

#stats.chisquare(tmp_counts)

power_divergence(f_obs=[16, 18, 16, 14, 12, 12],
                 f_exp=[16, 16, 16, 16, 16, 8],
                 lambda_='log-likelihood')
```

where : 
- @y_i@ is the observed value  
- @\widetilde  y_i@ is the expected value.

### How a tree is built:

When building Classification Trees (where the dependent variable is categorical in nature), CHAID relies on the Chi-square independence tests to determine the best split at each step. 

Chi-square tests check if there is a relationship between two variables, and are applied at each stage of the DT to ensure that each branch is significantly associated with a statistically significant predictor of the response variable.

Additionally, categories of each predictor are merged if they are not significantly different between each other, with respect to the dependent variable. In the case of Regression Trees (where the dependent variable is continuous), CHAID relies on F-tests (instead of Chi-square tests) to calculate the difference between two population means. If the F-test is significant, a new partition (child node) is created (which means that the partition is statistically different from the parent node). On the other hand, if the result of the F-test between target means is not significant, the categories are merged into a single node.

### Implementation of CHAID:

- [Python](https://github.com/Rambatino/CHAID)
- [R implementation](https://www.r-bloggers.com/chaid-and-r-when-you-need-explanation-may-15-2018/)


## CART

CART is an algorithm that produces binary Classification or Regression Trees, depending on whether the dependent (or target) variable is categorical or numeric, respectively. 

It handles data in its raw form (no preprocessing needed), and can use the same variables more than once in different parts of the same DT, which may uncover complex interdependencies between sets of variables.

In the case of Classification Trees, CART algorithm uses a metric called Gini Impurity to create decision points for classification tasks. Gini Impurity gives an idea of how fine a split is (a measure of a node’s “purity”), by how mixed the classes are in the two groups created by the split. When all observations belong to the same label, there’s a perfect classification and a Gini Impurity value of 0 (minimum value). On the other hand, when all observations are equally distributed among different labels, we face the worst case split result and a Gini Impurity value of 1 (maximum value).

In the case of Regression Trees, CART algorithm looks for splits that minimize the Least Square Deviation (LSD), choosing the partitions that minimize the result over all possible options. The LSD (sometimes referred as “variance reduction”) metric minimizes the sum of the squared distances (or deviations) between the observed values and the predicted values. The difference between the predicted and observed values is called “residual”, which means that LSD chooses the parameter estimates so that the sum of the squared residuals is minimized.

LSD is well suited for metric data and has the ability to correctly capture more information about the quality of the split than other algorithms.
The idea behind CART algorithm is to produce a sequence of DTs, each of which is a candidate to be the “optimal Tree”. This optimal Tree is identified by evaluating the performance of every Tree through testing (using new data, which the DT has never seen before) or performing cross-validation (dividing the dataset into “k” number of folds, and perform testings on each fold).
CART doesn’t use an internal performance measure for Tree selection. Instead, DTs performances are always measured through testing or via cross-validation, and the Tree selection proceeds only after this evaluation has been done.