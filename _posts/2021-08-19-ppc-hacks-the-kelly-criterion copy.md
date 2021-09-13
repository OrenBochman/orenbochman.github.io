---
layout: post
title: Kelly Criterion
date: 2021-08-29 00:00:00 +0300
description: PPC Hacks - Kelly Criterion
img: cover/long-shot.png
fig-caption: # Add figcaption (optional)
tags: [PPC, data science, digital marketing, quantitative marketing, ] 
---

This is the first in what should be a sequence of articles on data analysis on automating digital marketing, in particular - PPC (Pay Per Click) Campaigns and CRO (Conversion rate optimization) of landing pages.

# Question

**Given the CTR of k advertising units (keywords, banners, ad groups, campaigns etc) what are the  data driven method to find the optimal allocation of the available advertising budget?**

So this is going to be different if you have a short campaign or a permanently on campaign


Disclosing your budget upfront may seem like a rookie mistake when you are bargaining. Why pay more for reaching your goals when you can do it for less? So is it a surprise that Google AdWords will ask you to enter your budget as would  would your advertising agency and there a few problems with that:

Google does not disclose how AdWords will allocates your budget. You will get a high level report at the end but at that point you will not be able to untangle any decision they made one your behalf. And they really go out of their way to make it impossible to figure out how they will allocate your budget. This includes building in exception into the allocation rules  (they are permitted to go over the budget) as well as non disclosure of the the key parameters used to give you a discounts or penalties for each unit within their auction - you pretty much only get reports of the aggregate cost which is for the bids you won.

Google have no qualms for billing you extra for a couple of weeks while they optimize you campaign every time there you add a unit. (Yes the same guys that bragged in a paper how they solved predicting CTR at scale about twenty years ago )

Google has a conflict of interest while each advertiser would like to maximize the action at a minimum budget they set up a marketplace where you together with your competitors will maximize cost of action so that you get all get minimal action at your maximum budget.

Your agency has lots of data and knowledge too and they can save their client tons of work and plenty of money. But it is important to always keep in mind that the agency has a different goal than their client. They profit the most from maximizing spend since agencies get a percentage off the top and their main worry is from other agencies. It is up to their client to audit their work and constantly ensure that they are getting the best effort from the agency and that they are delivering good performance on the client's goals and KPI's and not just burning up the budget.

If you want to a fix for these problems you will need to look elsewhere. We can consider the alternative which is to find an optimal allocation of the advertising budget and this is also something that your agency is good at handling and you may want to make sure it is optimal rather than the a supersized rehash of your last budget.

Here we have serval tools at our disposal. 


# Kelly Criterion

The kelly criterion is used in deciding the optimal amount to allocate when one can make the same bet multiple times to maximite winnings. 

The key idea is that this is a strategy for a low risk and high returns. If you take a high risk and bet everything against the house you can make a killing but you will almost certainly go broke immediately. On the other hand if you survive long enough and have a positive expected income then your profits should accrue.

The kelly criterion formalizes this notion and while it is touted by Casino gamblers and Wall street hedge fund managers it comes from the much more sombre field of information theory. Of course in digital marketing we don't gamble with the clients money but we do want to use every tool available to maximize ROI. We also have a fixed cost per ad unit and our returns are certainly not predetermined like in a horse race or a coin toss.

# Asset allocation strategies

One starts with an initial allocation - this will reflect your goals.

## Constant-Weighting Asset Allocation
    - Starting with an initial allocation.
    - Rebalance the budget whenever say a 5% change in the cost:
        - As ad-units become cheaper assign to them more of the budget.
        - As ad-units become more expensive assign to them less of the budget.

This strategy is trying to keep the budget on the same units but correcting for price drift due to conversion rate, competition or other factors.

You may wish to respnd to smaller changes and ultimately rebalanced every 4 hours (depending on the platform's limits). However there may be friction costs to adjusting the campaign which may become suboptimal for up to 14 days as we add or edit ad units.

## Tactical Asset Allocation
    - Starting with an initial allocation.
    - make short term (tactical) adjustments to the campaign to take advantage of unusual opportunities that arise.

## Dynamic Asset Allocation
- Insured Asset Allocation
- Integrated Asset Allocation



# Porfolio optimization