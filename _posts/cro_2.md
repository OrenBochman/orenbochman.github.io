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
    - Client ranking
    - Lead ranking
    - automatic extraction of rules
    - Online Marketing
    - Transactions
    - Tabular Date
    - Naive Bayes classifier
    - Decision rules
    - programmatic campaigns
    - Web Analytics
    - Analytics
    - Conversions
    - Lead
    - CRO
    - Bayesian Methods
    - Multiple Bandit problem
    - Cost-Sensitive Decision Trees
    - Imbalanced Data
lastmod: 2021-04-24 12:16:16 +0300
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Question Answering
---


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

> Algorithm parameters: 
    - df:= a data_frame
    - y:= the dependent variable
    - max_tree_depth
    - max_nodes
    - min_node_size
@\quad@**initialize**: 
@\qquad@ tree = [], nodes = [Root], 
@\quad@**while** tree.size > max_nodes AND node in nodes :
@\qquad@ **if** node.depth > max_tree_depth OR
@\qquad\quad@node.size < min_tree_depth OR
@\qquad\quad@node.is_pure( ) : 
@\qquad\quad@**continue**
@\qquad@**for each** col in df.columns: 
@\qquad\quad@**for each** level in df.col.levels:         
@\qquad\qquad@split data-frame rows into two groups on the value:
@\qquad\qquad\quad@**if** column is categorical:
@\qquad\qquad\qquad@ G1 = df[var == value]
@\qquad\qquad\qquad@ G2 = df[var != value]
@\qquad\qquad\quad@**else**: (column it is numerical):
@\qquad\qquad\qquad@ G1 = df[var >= value]
@\qquad\qquad\qquad@ G2 = df[var < value]
@\qquad\qquad@split_difference =  G1.y.avg - df.y.avg + G2.y.avg - df.y.avg
@\qquad\qquad@**if** split_difference < best_split[difference] :
@\qquad\qquad\quad@best_split = (split_difference,col,level)
@\quad\quad@nodes.append(G1,G2)
@\quad\quad@nodes.remove(node)
            

> 1. while the current node's depth <= `max_depth`:
      1. A decision tree learns a sequence of nodes. These nodes are "if then" questions with each question splitting the feature on a value. resulting in two or more child nodes. (some algorithms can split to more than two children)
        - if the node has items from multiple target class is *impure*. 
            - if it has sufficient items it and will be split to improve accuracy.
            - if it does not it will be assign the most common target class 
        - A node has items from a single target class it's *pure* and is not split further


The basic steps to train a decision tree can be written down very easily:





A good value (one that results in largest information gain) for a split point is one that does a good job of separating one class from the others. 


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