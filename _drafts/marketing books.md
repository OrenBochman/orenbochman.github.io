---
layout: post
title: Marketing Models
date: 2021-04-10 00:00:00 +0300
description: Marketing Books
img: dice-distribution.jpg 
fig-caption: # Add figcaption (optional)
tags: [modelling, game theory, incomplete information] 
---

A quick look at books on marketing, modeling and data analysis

- What models are most commonly used.
- Do the books provide data and or code ?
- Is there a Kaggle competition with dataset suited to this on?

# 2004

## Statistical Modeling and analysis of data
Author Bruce Ratner Phd

1. EDA
3. Logistic Regression: The Workhorse of Database Response Modeling
4. Ordinary Regression: The Workhorse of Database Profit Modeling
5. CHAID for Interpreting a Logistic Regression Model
9. Market Segment Classification Modeling with Logistic Regression
11. Identifying Your Best Customers: Descriptive, Predictive and Look-Alike Profiling

# 2008

## Database Marketing Analyzing and Managing Customers

By Robert C. Blattberg, Byung-Do Kim and Scott A. Neslin

1. Customer Lifetime Value
1. RFM model (Recency,Frequency and Monentary Value) - ANOVA
1. Market Basket analysis
1. Collaborative Filtering
1. Binary Response Model
1. Linear Probability Model
1. Binary Logit (or Logistic Regression) and Probit Models
15. Logistic Regression with Rare Events Data
15. Discriminant Analysis
15. Multinomial Response Model
15. Models for Count Data
15. Poisson Regression 
15. Negative Binomial Regression
15. Censored Regression (Tobit) Models and Extensions 
15. Time Duration (Hazard) Models
15. Characteristics of Duration Data 
15. Analysis of Duration Data Using a Classical Linear Regression
15. Hazard Models
15. Incorporating Covariates into the Hazard Function 

## Handbook of Marketing Decision Models

Editor is Berend Wierenga

Models via TOC:

1. Developments in Conjoint Analysis 
3. Interactive Consumer Decision Aids
4. Advertising Models
5. Sales Promotion Models 
6. Models for Sales Management Decisions
7. Modeling Competitive Responsiveness
8. Models of Customer Value
9. Decision Models for Customer Relationship Management (CRM)
10. Marketing Models for Electronic Commerce
11. Time-Series Models in Marketing 
12. Neural Nets and Genetic Algorithms in Marketing 
13. Decision Models for the Movie Industry
14. Strategic Marketing Decision Models for the Pharmaceutical Industry 
15. Models for the Financial-Performance Effects of Marketing 
16. Marketing Engineering: Models that Connect with Practice 

# 2015

## Modeling Markets: Analyzing Marketing Phenomena and Improving Marketing Decision Making

 Models via TOC:

1. General linear model
6. Re-estimation
    - Generalized Least Squares 
    - Maximum likelihood estimation
    - Bayesian Estimation
7. Examples of Models for Aggregate Demand 
    - Product Class Sales Models 
    - Brand Sales Models  
    - Market Share Models
    - Normative/Prescriptive Models 
    - Allocation Models 
    - The [Dorfman–Steiner Theorem](https://en.wikipedia.org/wiki/Dorfman%E2%80%93Steiner_theorem)
8. Individual Demand Models 
    -  Choice Models 
    - Binary Choice Models Specification  
    - Multinomial Choice Models  
    - Markov Models  
    - Purchase Quantity Models  
    - General Structure  
    - Purchase Timing: Duration Models  
    - Hazard Models
9. Examples of Database Marketing Models 
    - Customer Life Time Value 
    - Customer Selection and Acquisition 
    - Customer Development 
    -  Models for Customer Retention 
    - Support Loyalty/Reward Programmes 
    - Churn Prediction 
    - Customer Engagement 


## Dorfman–Steiner theorem On optimal advertising spend.

How much should a firm spend on advertising ?

Firms can increase their sales by either decreasing the price of the good or convincing consumers to buy more by increasing advertising expenditure.

The optimal level of advertising for a firm is found where the ratio of advertising to sales equals the price-cost margin times the advertising elasticity of demand. The obvious result is that the greater the degree of sensitivity of quantity demanded to advertising and the greater the margin on the extra output then the higher the level of advertising.

@@ \frac{A p_{A}}{p.q} = \frac{p-c}{p}.e_{A} @@

where:

- @p_{A}@ is the price per unit of advertising
- @A@ is the amount of advertising
- @p@ is the price of the good
- @q@ is the output of the good
- @c@ is the average or marginal cost of production
- @e_{A}@ is the advertising elasticity of demand.

 Upon inspection, however, the Dorfman-Steiner  theorem is found to be trivial with respect to advertising. It says that a firm should stop with that volume of advertising at which an additional dollar of advertising just produces an additional dollar of net revenue.

the result is extended [here](https://sci-hub.do/10.2307/2487185) for cases of advertising in multiple periods with a lag effect.



# see also:
- R. Dorfman and P. 0. Steiner (1954). Optimal advertising and  optimal quality. American Economic Review 44, December, 826-36.
-  Haim Levy and Julian L. Simon (1989) A Generalization That Makes Useful the Dorfman-Steiner Theorem with Respect to Advertising. Managerial and Decision Economics, Vol. 10, No. 1 (Mar., 1989), pp. 85-87

- https://www.econometrics-with-r.org/