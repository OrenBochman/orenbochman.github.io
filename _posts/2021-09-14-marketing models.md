---
layout: post
title: Marketing Research Models
date: 2021-08-29 00:00:00 +0300
description: Marketing Research Models
img: cover/chaotic-time-series.jpeg
fig-caption: # Marketing Research models
tags: [PPC, data science, digital marketing, quantitative marketing, intelligence] 
---

[toc] 



# What are the main areas of marketing research ?
	
1. Customer decision journey [David Court et all](https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-consumer-decision-journey) 2009 article. 
2. Pricing. [(Lipovetsky et al., 2011)](https://www.researchgate.net/publication/220518145_Pricing_Models_in_Marketing_Research)
3. Competitive Analysis.
4. Brand awareness.
5. Marketing message testing.
6. Market segmentation.
7. Product development.
8. Advertising budgeting, planning and attribution.

# What are the main research methods ?

1. Observation
1. Focus groups
1. Surveys
1. Interviews
1. Social media listening
1. Experiments and field trials
1. Competitive analysis
1. Analyze sales data
1. Augmenting from Commercial and Public domain databases

## Why Don't More Managers Use Decision Models?
-  Judgmental models are often good enough.
-  Models are incomplete.
-  Models require precision.
-  Models emphasize analysis whereas managers prefer action.
-  Many managers don't have marketing engineering background

# Models

## Introduction

1. There are a great many model still not covered here - some are listed in the end of the document. 
1. It may not be much of a surprise that the bulk of these models are just our statistically significant others: linear regression, logistic regression, multinomial regression, decision trees, ANOVA. Occasionally we may encounter an unusual statistical suspects like multilevel modeling, a Polya model, survival analysis, and there are also econometric models and their game theoretic cousins Stackelberg, Cournot, Bertand competition model and Action theory. In this case your background and education might make these more familiar.
1. Once a marketing problem is specified certain model and algorithm naturally come to mind. Segmentation requires clustering models and can benefit from PCA. In many situation a data scientist will need be able to plug the data into an established algorithm and get good results. You may need to massage the data, and apply more than one algorithm. This second pattern is common in much of the modern research.
1. Parametric models are often quicker to implement and can work well as a baseline. To make better use of the data you will want to use non-parametric models like trees, neural network and modern regressions.
1. Many simple models have been adapted to the marketing domain and require an effort to understand and apply. Tobbit's censored regression variant and BTYD models are in this category. Knowing the conventions, terminology and motivation is key to successfully implementing these.
1. You might not be running pre/post test trails on new products but you should be aware of the methodology, how data is collected and how to conduct the analysis. This is let you do much better A/B testing and usability studies.

## Judgmental Methods

The book "Long Term Prediction" (Armstrong, J. S. 1985) starts with forecasting using judgmental methods.  In 2021 these methods still play a major part in decision-making. Let us review why these methods are still in use:

1. Judgmental methods like other models are better than no models at all.
1. Judgmental methods can encode knowledge of the market. This is similar to building a prior in Bayesian analysis.
1. Judgmental methods can give good results
1. Some people in marketing are unfamiliar with or untrained in the use of qualitative methods.

### Asking the sales team

A firm's sales team due to their constant contact with clients have early and greater exposure to information on the Market and Competition. 
Running a survey using the sales team can tap into this information. However, there is one problem—sales team surveys are often biased.

Some members of the sales force who anticipate an increase in their sales quotas will present a pessimistic view of market conditions. While other members of the sales force who want new accounts may present an optimistic view of the market. Finally, there is *recency bias* where estimates may be colored by recent successes or failures of with their existing clients. 

Transparency of how the data is going to be used can mitigate some of these biases but they remain an issue.

## The committee of execs

The next 

## Delphi method

The Delphi method originated with the military is a technique for forecasting which relies on a panel of experts.

### Assumptions:
- A group has a potential to make a better decision than a n individual since a group has access to more information.
- Rank, power, etc get in the way of making decision and can lead to group think.

### Delphi Procedure

Delphi is based on the principle that forecasts (or decisions) from a structured group of individuals are more accurate than those from unstructured groups.[6] Experts answer questionnaires in multiple rounds. Following each round, the facilitator [7] provides an anonymized summary of the experts' forecasts and their reasons for their decision. 

The panel is encouraged to revise their earlier answers in lieu of the new information. Each round of sharing information may reduce the range of the answers with the goal of reaching a consensus. 

Using a predefined stopping criterion the process is ended (e.g., number of rounds, achievement of consensus, stability of results), and the mean or median scores of the final rounds determine the results. ()

Special attention has to be paid to the formulation of the Delphi theses and the definition and selection of the experts in order to avoid methodological weaknesses that severely threaten the validity and reliability of the results.

Multiple rounds
Consensus
Anonymous

## Chain ratio method


This is a method of estimating total market demand for a product in which a base number, such as the total population of a country, is multiplied by several percentages, such as the number in the population above and below certain ages, the number in the population with an interest in motor sport, the number in the population with motor-cycle licencees, in order to arrive at a rough estimate of the potential demand for a particular good or service (in this case, say, a new type of motor cycle helmet.)

Each multiplier should be independent of the others. An advantage each ratio/percentage term can be outsourced to whoever is best suited to estimate it.

# Market Response Models

Response models let us understand how price, quality an advertising contribute to sales or revenues. Once the nature of the relationship is established it is possible to make an informed decision regarding the allocation and timing of an advertising budget to brands, products. 

The 


According to (Saunders 1987) Marketing response models raise three main questions regarding their specification:

1. What responses are realistic and should be modelled?
1. How can responses be expressed?
1. How can a choice be made between the options available?


Functionally, response models are simple extrapolations used to fit a curve for response of the output such as sales, market share, profit, awareness, etc. to a number of input variables such as price, advertising spending, promotional spending. They has limited predictive power.


In (Hanssens et al., 2001) it is shown that by picking certain response models and their parameters will imbue the response with certain desirable properties such as having a zero or a positive minimum, an asymptotic maximum (saturation) having a maximum and then dropping (super saturation), being linear, concave (decreasing returns), convex increasing returns) or s-shaped (increasing return followed by decreasing returns).

Use one of the more advanced curves below like the `logit` or `Gompertz`  response model will create a flexible model which can than be calibrated with data. 

While response models seem basic in practice they present a baseline model that can be made more sophisticated and powerful by:
1. shifting from extrapolation to regression 
1. adding a simple time dependence in the inputs 
1. using auto regressive dependence in input variables (lag and carry over effects)
1. looking at the brand level instead of the entire firm 
1. using market share to introduce indirect dependency on the competition

### The power series model: 

If we are uncertain what the relationship is between X and Y, we can use a power series model. Here the response model is 

@@ Y = a + bX + cX^2 + dX^3 @@

This curve can be made to made to take almost any shapes with relatively few parameters. However power series model have a tendency to provide a poor fit outside the data range which means they are have limited use for extrapolation.

### Fractional root response model

@@Y= a + bX^c@@

Different values of c can create a model linear, increasing and diminishing returns.
When a = 0, we can interpret c as the elasticity. 
When @c=1/2@ we get a square root model.
When @c=-1@ we get a reciprocal model.

### Exponential response model

@@Y = ae^{bx}@@

Again different values of b can create a model linear, increasing and diminishing returns.

### modified exponential response model

@@Y= a (1+ e^{bx} ) + c @@

This model is widely used to model response to `sales` effort. 

### Logistic response model

@@Y = \frac{a}{1+e^{-(b+cx)}} +d @@

The model is S-shaped for c>1 and concave for 0 < c < 1.
It is bounded between b (lower bound) and a (upper bound). 

This model is widely used to model response to `advertising` and `sales`. 

### The Gompertz response model

@@Y = ab^{cx} + d \\
a > 0 \\
1 > b > 0 \\
c <1 @@

Another less widely used S-shaped function.

Both the `Gompertz` and `logistic` curves lie between a lower bound and an upper bound; the Gompertz curve involves a constant ratio of successive first differences of log Y, whereas the logistic curve involves a constant ratio of successive first differences of 1/Y. (The better known logistic function is used more often than the Gompertz because it is easier to estimate.)

## Dynamic response models

One limit of repose models is that they are fixed in time. But we often see that the response variable depends on both current level and previous level of explanatory variables To capture this behavior more sophisticated models are called for which vary over time.

The main phenomena that we want to introduce is memory of zero, one or several previous states. For example following a short-term promotion consumers stockpile more product than they can consume leading to inventory buildup which will will lead to a drop in demand and reduced response to marketing in the following time periods.

@@ Y = a + bX_t + \lambda X_{t-1} @@

The followings are some types of dynamic marketing responses summarized by Saunders (1989).

- Delayed-response effect
- Customer-holdover effect
- Customer retention rate & customer decay rate
- Hysteresis
- New trier effects
- Stocking effects

## Brand level response and competitions

Another of the limits of the simple response models is that they only look at a single firm without considering the effects of competition in the market. WE can make more sophisticated models by looking at response for each brands. This both increase the response model's granularity and incorporates information on the competition. 

@@ \text{Brand Sales} = \text{Market Sales} \times \text{Market Share}@@

Since market share depends on other brands this incorporates the data on the competition as follows:

@@ \text{Market Share} = \frac{Attractiveness_0 } 
   {\Sigma_{i \in brands} Attractiveness_i} @@


## Individual response models

A Multinomial logit model is used to to represent probability of choice. An individual's probability of choosing brand k is:

@@Y= a + bX^C@@

Standard linear Regression
- used to model a continuous dependent variable like sales
- least square estimation
- maximum likelihood 
- sales Y_t

@Y_t ~ N(\mu,\sigma^2)@
@Y_t ~ N(\beta_0+\beta_1 x_1,\sigma^2)@
@Y_t ~ N(\beta_0+\beta_1 x_1,t + ... + \beta_k x_k,t,\sigma^2)@
@Y_t ~ N(X_t \beta,\sigma^2)@ or 

@@Y_y = X_t\beta + \epsilon_t  \\
\epsilon ~  N(0,\sigma^2)@@

where x_i are explanatory variables like price, advertising, promotion

regression is evaluated using adjuster R^2, AIC, BIC

AutoRegression and Vector AutoRegression (VAR)

arise when prices at time T depend on sales at time T-1.

log S_t = \mu_1 + \rho_1 log S_{t-1}+\beta_ 1 log P_t +\epsilon_{1,t}
log P_t = \mu_2 + \rho_2 log P_{t-1}+\beta_ 1 log S_t +\epsilon_{1,t}

also when studying market share

Logit and Probit models for estimating a binomial dependent variable


Let's start with the plain logit model under independence of irrelevant alternatives (IIA). In this model (indirect) utility is given by

@@U_{jti}=\alpha_pj_t+x_{jt}\beta^x+\xi_{jt}+\epsilon_{jti}@@

where @ϵ_{jti}@ is distributed IID with the Type I Extreme Value (Gumbel) distribution. It is common to normalize the mean utility of the outside good to zero so that U_0t_i=ϵ_0t_i. This gives us aggregate market shares

@@ s_jt= \frac{e^\left(αp{jt}+x_{jt}β^x+ξ_{jt}\right)}
     {1 + \sum_k e^\left(αp_{jt}+x_{kt}β^x+ξ_{kt}\right)}@@
 
taking logs we get:

@@log(s_{jt})= αp_{jt}+xjtβx+ξjt−0−log 
∑
k
 exp(αpjt+xktβx+ξkt)@@

and

logs0t=0−log 
∑
k
 exp(αpjt+xktβx+ξkt).

By differencing the above we get a linear estimating equation:

logsjt−logs0t=αpjt+xjtβx+ξjt.

Because the left hand side is data, we can estimate this model using linear IV GMM.


## Optimal Advertising - Dorfman–Steiner theorem (1954)

The [Dorfman–Steiner theorem](https://en.wikipedia.org/wiki/Dorfman%E2%80%93Steiner_theorem) or condition is a theorem due to <cite>Dorfman, Robert, and Peter O. Steiner. (1954) Optimal Advertising and Optimal Quality. American Economic Review 44, 826-36.</cite>.

Firms can increase their sales by either decreasing the price of the good or persuading consumers to buy more by increasing advertising expenditure. The optimal level of advertising for a firm is found where the ratio of advertising to sales equals the price-cost margin times the advertising elasticity of demand.

@@  \frac{ \text{advertising} }{ \text{sales}} = \text{price cost margin} \cdot \text{advertising elasticity of demand}  @@
@@ \frac{p_A A}{p \cdot q} = \frac{p-c}{p} \cdot e_A@@

where | is
------|---
@p_{A}@| is the price per unit of advertising
@{A}@| is the amount of advertising
@p@| is the price of the good
@q@| is the output of the good
@c@| is the average or marginal cost of production
@e_{A}@| is the advertising elasticity of demand.

The author of <cite>Hegji, C. E. (1998)</cite> points out that while the rule above seems intuitive, it is often misunderstood. The price in equation is taken as a fixed value for determining the marginal revenue of advertising, but <cite>Waterson (1984)</cite> stresses that both the price and level of advertising should be chosen simultaneously by the firm. 

Neglecting this interaction between price and advertising is misleading and
reduces the examples of using the DS rule in most textbooks to relatively simple
and uninteresting ones.

The original paper also looks at more complex situation where the firm can vary both price and quality. However the authors point out that the model may be more useful for understanding the tradeoff between price and advertising rather than as a tool for making predictions.

Changing price and  quality and advertising are also what the game theoretic formulation of competition look at.

![](/assets/img/articles/marketing/Dorfman-Steiner-1954.png)


## Wolfe Vidale sales-advertising response model (1957)

This is an early paper from the paper seems to come from the area of operations research (AKA optimization) which studies how sales responds to advertising. It tries to explains the relationship using an ODE with three parameters that allow to vary the form of the response. The authors explain that operation research (optimization techniques) may not have been applied since experimental data was hard to arrive by.

They list three questions they may be able to answer using operaions research:
1. Evaluating effectiveness of a campaign.
1. Budget allocation of among product and media.
1. Criteria that determine the size of the advertising budget.

To formulate their ideas - they got firms to not only share data but also let them run controlled experiments in which different levels of intensity was used for advertising. 

According to <cite>(Wolfe and Vidale 1957)</cite> The increase in the rate os Sales is proportional to the Advertising effort reaching the fraction of available customers less the number of customers being lost. Which can be written as a first order ODE:

@@ \frac{dS}{dt} = r A(t) \frac{M-S}{M}-\lambda S@@

where    | is
---------|---
@S@      | sales rate at time t
@A(t)@   | advertising expenditure at time t
@\lambda@| exponential sales decay constant - which is controls the drop in sales once advertising stops. (This makes sense as people forget/remember exponentially. )
@r@      | is the response to advertising
@M@      | the saturation level parameter (Total market size)
 
Developed by M.Vidal and H.Wolf. this classical advertising response model explains the rate of change of sales when advertising had both immediate and lagged effects:

In this model change of the goods sales volume at time t is the function of four factors: 
1. Advertising expenses
2. Constants expressing sales
3. Reaction to advertising
4. Market saturation levels with the advertised goods
and constants expressing the reduction of sales volume.

The basic equation of the model (advertising budget according to Vidal-Wolf formula) is :

@@ R_b = \frac{(\Delta S + k_2 · S_0)}{ k_1} \cdot \frac{S_{max}}{(S_{max} - S_0)}@@

where      | is
-----------|---
@R_b@      | advertising budget volume
@\delta S@ | change of sales volume level in comparison with the current one;
@k_1@      | reaction constant of advertising turnover
@S_{max}@  | market saturation level of the good (job, service)
@S_0@      | current sales volume
@k_2@      | constant of the reduction of sales volume in the absence of advertising expenses

@@ \frac{dS}{dt} = r \cdot A(t)\frac{(M-S)}{M} - \lambda \cdot S@@

where:   | is
---------|----
S        | sales volume                  |
A        | advertising effort            |
r        | ad effectiveness parameter    |
@\lambda@| sales decay parameter         |
M        | total market size             |

During an advertising campaign of duration T during which spending effort is constant, sales increase, showing a concave response. When advertising ceases sales decline gradually, at a different rate than they increased.

The authors approach is to integrate which allows them to derive a number of results

A number of takeaways from this work are:
1. If a campaign has reached its saturation point continuing or discontinuing will likely to do little to improve sales. So the smart move would be to discontinuing it and put the budget else where.
2. Using pulses


## CLV and Buy Till You Die/Drop/Defect  (BTYD) Models

Many firms interested in estimating customer lifetime value (CLV) which can be used to decide to qualify or sell a lead, set ranges for PPC campaigns, decide about retention interventions to deter churn etc. Pareto/NBD BTYD model considers repeat-buying behavior in settings where customer churn is not directly observed and assumes customers buy at a randomly at a steady rate until they churn.

-  Time to churn is modelled using the Pareto (exponential-gamma mixture) timing model.
- Repeat-buying behavior while active is modelled using the NBD (Poisson-gamma mixture) counting model. 

The frame work termed "counting your customer" seems to be more about counting the the customer's consumption rather then the customers. 


### Pareto/NBD BTYD model Assumptions

1. While active, the number of transactions made by a customer in a time period of length @t@ is distributed Poisson with transaction rate @\lambda@. This is equivalent to assuming that the time between transactions is distributed exponential with transaction rate @\lambda@.
2. Heterogeneity in transaction rates across customers follows a @\Gamma(r,\alpha)@ where @r@ is the shape parameter @\alpha@ is the scale parameter.
3. Each customer has an unobserved "lifetime" of length @\tau@. This point at which the customer becomes inactive is distributed exponential with dropout rate @\mu@.
4. Heterogeneity in dropout rates across customers follows a @\Gamma(r,\beta)@ distribution with shape parameter @s@ and scale parameter @\beta@.
5. The transaction rate @\lambda@ and the dropout rate @\mu@ vary independently across customers.

In practice parameter estimation is difficult and so BG/NBD was proposed as a "drop in" replacement.

###  BG/NBD model and beta-geometric/NBD (BG/NBD),

1. While active, the number of transactions made by a customer follows a Poisson process with transac@\lambda@ follows a gamma distribution.
3. After any transaction, a customer becomes inactive with probability p. Therefore the point at which the customer “drops out” is distributed across transactions according to a (shifted) geometric distribution with pmf.
4. Heterogeneity in p follows a beta distribution.

### Intuition from [SO]()

Imagine you're the newly appointed manager of a flower shop. You've got a record of last year's customers – the frequency with which they shop and how long since their last visit. You want to predict how much business the listed customers are likely to bring in this year. There are a few things to consider:

2. Customers have different shopping habits.

Some people like having fresh flowers all the time, while others only by them on special occasions. It makes more sense to have a distribution for the transaction rate @\lambda@, rather than assuming that a single @\lambda@ explains everyone’s behavior.

The distribution needs to have few parameters, to be fairly flexible, and to take values in the positive real numbers. The Gamma distribution ticks all of those boxes, and is well-studied and relatively easy to work with. It’s often used as a prior for positive parameters in different settings.

3. You may have lost some of the customers on the list.

If Andrea has bought flowers about once a month every month in the last year, it’s a fairly safe bet she’ll be returning this year. If Ben used to buy flowers weekly, but he hasn’t been around for months, then maybe he’s found a different flower shop. In making future business plans, you might want to count on Andrea but not on Ben.

Customers won’t tell you when they’ve moved on, which is where the "unobserved lifetime" assumption kicks in for both models. Imagine a third customer, Cary. The Pareto/NBD and BG/NBD models give you two different ways to think about Cary dropping out of the shop for good.

For the Pareto/NBD case, imagine that at any point in time, there is a small chance that Cary might come across a better shop than yours. This constant infinitesimal risk gives you the exponential lifetime – and the longer it’s been since Cary’s last visit, the longer he’s been exposed to other (potentially better) flower shops.

The BG/NBD case is a little more contrived. Every time Cary arrives in your shop, he’s committed to buying some flowers. While browsing, he’ll consider the changes in price, quality and variety since his last visit, and that will ultimately make him decide whether to come back again next time, or look for another shop. So rather than being constantly at risk, Cary has some probability p of just deciding to leave after each purchase.

4. Not all customers are equally committed to your shop.

Some customers are regulars, and only death – or a sharp price increase – will force them to leave. Others might like to explore, and would happily leave you for the sake of the new hipster flower shop across the street. Rather than a single drop-out rate for all customers, it makes more sense to have a distribution of drop-out rates (or probabilities in the BG/NBD case).

This works very much in the same vein as the shopping habits. We’re after a flexible, well-established distribution with few parameters. In the Pareto/NBD case we use a Gamma, since the rate 𝜇 is in the positive real numbers. In the BG/NBD case we use a Beta, which is the standard prior for parameters in (0;1).

# Product life Cycle



# Rogers diffusion of ideas

![diffusion-of-ideas](/assets/img/articles/marketing/diffusion-of-ideas-rogers-evert.png)


According to Rogers the diffusion of ideas is a risky proposition and so few people will wish to adopt new ideas or technology. Over time people with lower risk preferences will adopt the ideas as they are vetted by more individuals.

Rogers believes that the individuals adoption rate is distributed Normally and he ordered them into groups:


## Bass diffusion model

### Task 

Model designed to answer the question: How many customers will eventually adopt the
new product and when?

### Assumption

- Diffusion process is binary (consumer either adopts, or waits to adopt)
- Constant maximum potential number of buyers (m)
- Eventually, all m will buy the product 
- No repeat purchase, or replacement purchase
- The impact of the word-of-mouth is independent of adoption time
- Innovation is considered independent of substitutes 
- The marketing strategies supporting the innovation are not explicitly included

### Formulation

According to (Mahajan et al., 1993 §2.1) "the Bass diffusion model derives from a hazard function (the probability that an adoption will occur at time t given that it has not yet occurred). Thus, @@\frac{f(t)}{(1- F(t))}= p + qF(t)@@ is the basic premise underlying the Bass model. The density function of time to adoption is given by f(t) and the cumulative fraction of adopters at time t is given by F(t). "


- Innovators are buyers who are triggered by advertising
- Imitators are buyers whose  are triggered by word of mouth (i.e. by existing buyers)

@@n(t) = \frac{dN(t)}{dt} = p(m-N(t))+ 
            \frac{q}{m}N(t)(m-N(t)) @@

where | is the
------|---
p     | coefficient of innovation
q     | coefficient of imitation 
m     | potential number of adopter
t     | time
cumulative number of adopters:

@@N(T) = m \left[
            \frac{1-e^{-(p+1)t)}}{1+\frac{q}{p}e^{-(p+1)t)}}
           \right]
@@
non cumulative number of adopters:
@@n(T) = m \left[
            \frac{
                p(p+q)^2e^{-(p+1)t)}}{(p+qe^{-(p+1)t})^2}
           \right]
@@
The above is a first order differential equations which can be integrated to get an S-shaped cumulative adopter distribution.

Time of peak adoptions
@@
    T^* = -\frac{1}{p+q}\ln(\frac{p}{q})
@@
Number of adopter at the peak time:
@@
    n(T^*) = \frac{1}{4q}(p+q)^2
@@

@@
    N(T^*) = m\left[\frac{1}{2}-\frac{p}{2q}\right]
@@

Cumulative innovator adoptions
@@ N_1(t) = m\frac{p}{q}\ln\left[ 
    \frac{1+\frac{q}{p}}{1+\frac{q}{p}e^{-(p+q)t}}
    \right]@@
Cumulative imitator adoptions
@@ N_2(t) = N(t) - N_1(t)@@
- [Bass diffusion model](https://en.wikipedia.org/wiki/Bass_diffusion_model#:~:text=The%20Bass%20model%20or%20Bass,of%20a%20new%20product%20interact.) 1969
- Generalised Bass model (with pricing)
- Weibull distribution
- Shifted Gompertz distribution

Tobit model

[Tobit model](https://en.wikipedia.org/wiki/Tobit_model)

- e.g. a left censored regression model  - i.e. y cannot be negative or is excuded from a range.

demand analysis of brands

# Advertising

## Sethi model (1983)

[Sethi model](https://en.wikipedia.org/wiki/Sethi_model)

### Extensions:

• Competitive extensions-Nash differential games
• Empirical testing of the Sethi model and extensions
• Stackelberg differential games 
• The Sethi durable goods model


## Mahajan and Muller (1986)

https://faculty.biu.ac.il/~fruchtg/829/lec/7.pdf

## Advertising Budgeting in Practice (Bigné, J.E., 1995)

### Affordable method 
Easy to apply. 
Weakness: no relationship between sales and expenditures.

### Objective/task method 

This is a scientific method for setting an advertising budget. It considers a company's environment and requirements. IT guides the marketing manager to develop his promotional budget by 
1. defining specific objectives.
2. list the tasks they require 
3. estimating the costs of each task.

The sum of these costs is the proposed amount for advertising budget.

The method is based on the relationship between the objectives and the task to achieve these objectives. The costs of various advertising activities to be performed to achieve marketing objectives constitute advertising budget.

- Limitation: no indication how to choose the objectives and how to evaluate them and decide if they worth
the cost of attaining them.


### Percent of sales
- Advantages:
    - Easy to use, and it encourages managers to think in terms of the relationship between advertising cost and sales.
    - Encourages stability if the competitive companies spend the same percentage. 
- Limitation: 
    - Does not provide a logical basis for selecting the specific percentage of sales to use.

### Competitive parity method 

As competition is a leading factor affecting marketing performance, competitors’ advertising activities and costs are evaluated for setting a baseline for the advertizing budget. The advertising budget is fixed as a response to the advertising strategy adopted by competitors.

Thus, competitive factor is given more importance in deciding advertising budget. 

Criticism:

- There may be limited data on the competition.
- As firms differ significantly from their competitors it may not be advisable to follow the competitors blindly. 

## Model-based approaches

### ADBUDG by Little (1970)

ADBUDG is an advertising budgeting procedure which is applicable to brands which have considerable history of advertising and market share response to advertising, including the media and creative effectiveness of that advertising. Budgets are determined quarterly for one fiscal year

ADBUDG is designed to:
1. Decide the level of the annual advertising budget
2. Allocate the advertising budget across time periods.

It models a market's sales response to different levels of advertising.

#### Assumptions

- If advertising is cut to zero, brand share will decrease, but there is a floor (min), on how much share will fall from its initial value by the end of the period 
- If advertising is increased, say to something that could be called saturation, brand share will increase but there is a ceiling (max), on how much can be achieved by the end of one period.
- There is some advertising rate that will maintain initial share.
- An estimate can be made by data analysis or managerial judgement of the effect on share by the end of one period of a 20% increase in advertising over the maintenance rate.

Share Response vs. Advertising in one Period

@@ Share \space Response = b + (a - b)\frac{X^c}{d + X^c }@@

The model is S-shaped for c > 1 and concave for 0 < c < 1. 
It is bounded between b (lower bound) and a (upper bound).

- Cooper, Robert G. (1993) [Winning at New Products](), second edition, Addison Wesley Longman, Reading, Massachusetts, p. 310.
- Lilien, Gary L.; Kotler, Philip; and Moorthy, K. Sridhar (1992) [Marketing Models](), Prentice Hall, Englewood Cliffs, New Jersey.
- Little, John D. C. (1970) [Models and managers: The concept of a decision calculus](), Management Science, Vol. 16, No. 8 (April), pp. B466–B485.
- Saunders, John, (1987) [The specification of aggregate market models]() European Journal of Marketing, Vol. 21, No. 2, pp. 1–47.

### Pulsing Policies by Mahajan and Muller (1986)

- Vijay Mahajan, Eitan Muller [Advertising Pulsing Policies for Generating Awareness for New Products](). Marketing Science 5 (2) 89-106 https://doi.org/10.1287/mksc.5.2.89

This paper tries to model the answer to the question: What should be the the optimal schedule of a campaign to maximize awareness ? 

Building on psychologist [Ebbinghaus (1913)][Ebbinghaus, H., 1913.] research on memory as well as their prior work on Awareness the authors have trie to find a model which can optimise advertising campaigns. In the 1986 mass media dominated advertising and most campaigns being looked were in print. The paper looks at five advertising strategies :

1. blitz - single uniform pulse 
1. pulsed - shorter evenly spaced bursts
1. chattering - at each moment randomly switch from high to low 
1. even policy - long sustained campaign
1. pulsing/maintenance policy - combines the pulse and even.

@@ \frac{dA}{dt} = f(u) (1 - A) - bA @@
where |is
------|--
f | is the advertising response function
A | is the fraction of Awareness at time t
u | level of advertising spending at time t
b | decay or forgetting parameter

## Static Attribution models

The attribution problem is:

When a user has seen K-ads prior to `converting` how to allocate the conversion to the ads.

Picking an attribution seems an afterthought and not very important decision but if you are building long term relations with you clients then the default attribution model will crediting the wrong keywords, ad, adgroup, and campaign. The campaign that get the credit in revenue and conversions will look like it did much better and will naturally get a greater budget. Other campaigns which did most of the legwork end with lower conversion rates and get a reduced budget. 
In the end you pay more for advertising and getting less conversions or sales and probably be none the wiser for it. (Vallaeys, 2019) report another issue with working with a bad attribution model is that automation and optimization feature like smart bidding of the campaign management platform will struggle to converge on a solution for your account. 

An example A customer:
1.  finds your site by clicking one of your Google Ads ads. 
2. She returns one week later by clicking over from a social network. 
3. That same day, she comes back a third time via one of your email campaigns, 
4. A few hours later, she returns again directly and makes a purchase.

### Last Interaction model:

Assumes users have no memory so the last [[touchpoint]] in the customer journey would receive 100% of the credit for the sale. The problem is that last interaction is not due to an advert.

### Last Non-Direct attribution model, 

Assumes users have no memory but recognizes that direct traffic (using a bookmark) should be attributed to the previous [[touchpoint]] in the customer journey. So all direct traffic is ignored, and 100% of the credit for the sale goes to the last channel that the customer clicked through from before converting.

### Last Google Ads Click attribution model

Assumes users have no memory except the last google ad resulting in the click leading to conversion. Same as before before but only google ads matter.

### First Interaction attribution model

Assumes that the first [[touchpoint]] in the customer journey matters and would receive 100% of the credit for the sale.

### Linear attribution model:

Each [[touchpoint]] in the customer journey path would share equal credit for the sale. 

### Time Decay attribution model

This assumes memory decays exponentially and so the [[touchpoint]]s closest in time to the sale or conversion get most of the credit.

### Position Based attribution model

Assumes the first and last interactions are the most important and the rest not so much. 40% credit is assigned to each the first and last interaction, and the remaining 20% credit is distributed evenly to the middle interactions.

## Model Selection and validation

Given the choices of attribution models how can we evaluate the models? The main problem with these static models is that you cannot actually get the evaluation and so your must make an educated guess as to which is the correct model for you.

Some seem to be clearly better then others. For example Last click non direct seems more sensible than last click. Also just looking at AdWords clicks seems only sensible if you work exclusively with AdWords.

Google defaulted to last no direct click for many years. I  can speculate on a number of reasons why this happened. 
- It puts more money in their pockets, say by encouraging more people to use performance marketing like PPC or PPA which ends up driving up costs.
- If using PPC or PPA you are not paying for unclicked ads or ads that do not convert.
- It is cheapest to calculate and use in adwords.
- It is a first approximation for time decay (The last always gets the highest amount).

Giving all the credit to the last click make more sense when you only pay for a converting click. Or when conversion pay for all the advertising like with a self liquidating offer. Another way to look at it is that you may be working with customers where location and time context is everything and relationship or loyalty have no breaking - say when you have an unplanned commute - you'll decide according to traffic, the weather, your location and the next opportunity. The last cab you used is going to be irrelevant. In such a case any clicks before the last clicks are irrelevant - they belong to past conversion and have no bearing on the current sale. 

But in reality these are extremes which are bad at approximating your situation.

Giving all the credit to a first click means that this touchpoint is where you create a long term relationship with the client and everything else happening later is to all intents and purposes insignificant. 


With  in a domain with no loyalty you spend most of the  or last clicks might make sense in certain cases.

But most have some rather extreme assumptions and these could lead you to a compromise on a position based model or a time decay model.

GA does not actually bother to provide any feedback on how the models actually impact your ads and campaign and so model evaluation , selection and validation are left to chance. 

## Dynamic Attribution Models:

While static weight-based attribution can be used to assign conversions and revenue share it does not help us estimate the contribution of individual ads to the overall campaign's effect. It may come as no surprise that it is possible to construct a data driven attribution model. Google now offers that as an option once it collect sufficent data. So how can we do this?


(Shao & Li, 2011) propose a probablitic model and a Bagged Logistic Regression model (Ren et al., 2018) look at a causal model for assigning attribution
(Dalessandro et al., 2012) use a dual attention neural network model.

In (Katsov, 2017 §3.8.4 pp.154-156) the need to create an algorithmic attribution method that measures the actual contributions and enables the brand to reward the best keywords, ads, ad extensions, ad groups, campaign and channels and remove the worst ones. 

Although I have not seen this done, it should be possible to create a markov chain model and fit it using the Vitrebi algorithm. And where a markov chain will work a Neural Network should do a better.

More challenging To learn how to These



# Pricing Decisions

Profit = Revenue -Total cost P = R-TC
Directly: Revenue = Unit price x Quantity sold R=P x q
Indirectly: Total cost = Unit cost x Quantity sold TC=c x q
But: Quantity is a function of price (the demand curve) q=q(P)

https://faculty.biu.ac.il/~fruchtg/829/lec/8.pdf

These five factors must be taken into account in pricing decisions:

1. The objectives of the organization
2. Consumers willingness to pay for the product
3. The costs of producing and marketing the product
4. Competition
5. Changes in 2,3, and 4 over time




# Product development

# New product pre-test/post-test models

Much of the expenditure on new products occurs after the firm has developed the product in small batches including it packaging and commercials. 

New product pretest models is used in marketing decision support systems (MDSS). The model involves estimating functional relations between buyer states of awareness, trial, and repurchase based on consumer preferences and actions in a pretest situation of the marketing offer and campaign. 

It involves enrolling 300+ paid test subject to evaluate the new product/service and its commercials in setting that simulates buying in a competitive environment:
- A pretest survey assess competing brands and their products and advertising.
- People are shown a shuffled set of commercials for the different products.
- People are given money and opportunity to buy their choice from the products.
- If they don't but they are given some samples of the product
- Later once they have had a chance to sample the product at home there is a post test  survey or interview and an opportunity to order more of the product by mail.

Several new product pre test models are proprietary but some are described in academic papers.

- NEWS
- TRACKER
- SPRINTER
- BASES
- ASSESSOR
- LTM

Classically since the data is viewed as to waves - the pretest and post test and these are analysed at a group level using ANOVA. In (Alessandri et al., 2017) second order multiple group latent curve modeling `SO-MG-LCM` could represent a useful methodological tool to have a more realistic and informative assessment of intervention programs with two waves of data. 

## ASSESSOR 

# Competition Models

First we look at models of competition that arise in game theory and economics and deal primarily with pricing. While they provide interesting strategic and general results about competition, it is less obvious how to use these in practical application of product pricing.

However, I am hopeful that as these become more familiar I will see at least how to adapt the game theoretic frame works to work with some of the other models which do not consider  in competition.

Other type of models that incorporate competition are:
response models for brands that incorporate marker share 
and pretest product model that also look at market share.

## Monopoly


## Oligopoly

An oligopoly is a market characterized by a small number of firms who realize they are interdependent in their pricing and output policies. The number of firms is small enough to give each firm some market power. Oligopolistic competition can give rise to wide-ranging outcomes, in some situations, companies may employ restrictive trade practices such as collusion or  market sharing  to restrict production and to inflate prices in much the same way that a monopoly does. Whenever there is a formal agreement for such collusion, between companies that usually compete with one another, this practice is known as a cartel.

### Examples:
Globally: OPEC
In Israel there are many examples: Banks, Cellphone, Foreign Calls, Fuel, TV, Retail suppliers , car importers, all form oligopolies.

### Characteristics:
• Profit maximization conditions
• Firms have the ability to set price or quantity or quallity
• Barriers to entry are high. Regulation favor existing firms
• Small number of firms so that each firms action influences the others
• Long run profits 
• Perfect knowledge (internal) interfirm knowledge mat be incomplete


Oligopoly theory makes heavy use of game theory to model the behavior of oligopolies:

Stackelberg's duopoly where firms move sequentially.
Cournot's duopoly where firms simultaneously choose quantities
Bertrand's oligopoly where firms simultaneously choose prices.

When compared with Cournot and Bertrand's model, it can be seen that price competition is more aggressive and competitive, and also it is easier to sustain collusion under price competition

### Comparison of oligopoly models,

- The aggregate Stackelberg output is greater than the aggregate Cournot output, but less than the aggregate Bertrand output. 
- The Stackelberg price is lower than the Cournot price, but greater than the Bertrand price.
- The Stackelberg consumer surplus is greater than the Cournot consumer surplus, but lower than the Bertrand consumer surplus.
- The aggregate Stackelberg output is greater than pure monopoly or cartel, but less than the perfectly competitive output.
- The Stackelberg price is lower than the pure monopoly or cartel price, but greater than the perfectly competitive price.

## Stackelberg competition Model 1934

[Stackelberg_competition](https://en.wikipedia.org/wiki/Stackelberg_competition)

In game theory terms, the players of this game are a leader and a follower and they compete on quantity. The Stackelberg leader is sometimes referred to as the Market Leader.

A firms may engage in Stackelberg competition if it has some sort of advantage enabling it to move first to become a market leaader. More generally, the leader must have commitment power.

Moving observably first is the most obvious means of commitment: once the leader has made its move, it cannot undo it - it is committed to that action. Moving first may be possible if the leader was the incumbent monopoly of the industry and the follower is a new entrant. Holding excess capacity is another means of commitment.

The solution concept used is a sub perfect nash equilibrium.

## Cournot competition

- [Cournot competition](https://en.wikipedia.org/wiki/Cournot_competition)

## Bertrand competition

- [Bertrand competition](https://en.wikipedia.org/wiki/Bertrand_competition)

## Bertrand–Edgeworth model

- [Bertrand–Edgeworth model](https://en.wikipedia.org/wiki/Bertrand%E2%80%93Edgeworth_model)



# Terms
- Awareness
    : Metric used to measure the market share of a brand.
- BOGO
    : Buy One Get One - promotion
- [TouchPoint][TouchPoint]
    : Touch Point
- Market Intelligence
	: inputs that determine the market opportunity, surface key trends and shape the market development strategy.
- Go-To-Market
	: a plan for launching products into a new market.
- Total Addressable Market
	: the amount of revenue potentially available to a product or service.
- Serviceable Available Market
	: the percentage of the market that can realistically be served by your product or service.
- Market Share
	: The percentage of the total addressable market you can realistically target, based on the number of competitors in the category.
- Digital channels
    : 
- Customer loyalty
    : 
- Integrated marketing
    : 
- Response function
    : 
- Promotion
    : an incentive scheme used to increase sales. Examples are Discount, buy one get one free, Free samples.
- Top of Mind
    :

# Journals

• [Marketing Science](https://pubsonline.informs.org/journal/mksc)
• [Journal of Marketing research](https://journals.sagepub.com/home/mrj)
• [Journal of Consumer research](https://academic.oup.com/jcr)
• [International journal of research in marketing](https://www.journals.elsevier.com/international-journal-of-research-in-marketing)

# Books

- [Marketing Dictionary](https://marketing-dictionary.org/)


# List of models

## General Models and Methods

- Cluster Analysis - Used for segmentation.
- Conjoint Analysis
- Decision tree analysis
- Logit
    - Multinomial Logit
    - Nested Logit, 88
- Neural net for forecasting (response model)
- Probit
    - Multinomial Probit
- Sentiment analysis
- Regression
    - Censored regression (Tobit) 134
    - Truncated Regression, 133
    - Type-1 Tobit 
    - Type-2 Tobit
- Time series
    AR (Autoregressive)
    ARMA (Auto regressive moving average)
    ARIMA
- Text analytics

## Specific Models

- ADCAD: Ad copy design
- Advisor
- Analytic hierarchy process
- Choice-based segmentation
- Competitive advertising
- Competitive bidding
- Conglomerate, Inc. promotional analysis
- GE: Portfolio analysis
- Geo-demographic site planning
- Learning curve pricing
- Profit Impact of Marketing strategy (PIMS) model
- Positioning Analysis
- Promotional spending analysis
- Sales resource allocation model
- Value-in-use pricing
- Visual response modeling
- Yield management for hotels

### From Quantitative Models in Marketing Research
- ASSESSOR
- Averaged ideal point
- BASES
- CALLPLAN
- GE/McKinsy portfolio
- Ideal point
- Interactive decision
- Market Share
- Market response
- MDSS
- NEWS
- SPRINTER
- TRACKER
- response
- realocator

### From Quantitative Models in Marketing Research

- Accelerated Lifetime, 166
- Adjacent Categories, 125, 130
- attraction, 47
- duration, 158
- factor, 27
- multivariate, 27
- panel, 27
- Proportional Hazard, 167
- simultaneous-equations, 47
- single-equation, 27
- stereotype, 130
- two-part, 140

