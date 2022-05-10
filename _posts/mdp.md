---
title: e-commerce MDPs
lastmod: 2022-05-06T12:44:54.887Z
description: e-commerce problems formalized as markov decision processes
categories:
  - ai
tags:
  - rl
  - e-commerce
draft: true
---
mdp.md

# Markov Decision Processes and the Markov property

One assignment in the course is to create 3 MDP. MDP can  be low or high level specifications that have three elements:

1. the states
1. the actions
1. the rewards

States should obey the markov property, i.e. they have no memory of the past. We formalise it using@@\mathbb{P}_{ss′} = \mathbb{P}[S_{t+1}=s′|S_t=s]@@

according to David Silver we should also need a state transition matrix. However the assingment did not require this part.

# the base line MDP - insulin store

I call this MDP monopoly store because the is no competition and the sales don't depend on the price

## States

A state is <p,i,c> where:
    - p is the price
    - i is the inventory
    - c cost
    - h is total sales for this state (i.e. at price p)
    - count - number of time units this state was chosen

There are N states corresponding to different prices drawn from a range [min_p,max_p]

## Actions:
 - N - null - do nothing.
 - S - sell 1 unit with probability @lambada@
 - I - buy more units and restock
 - U - increase prices
 - D - decrease prices

## Rewards 
 - Sell ()

    
# What next?


# e-Commerce MDPs




The more I think about this projects the more I see ways to make the MDP capture additional behavior from the given data.  




This project is about specifying agents to learn policies with states comprising of different information and with diverse goals. It is possible to capture ever greater levels of detail by adding more agents and actions.

For example we might have:

- Consumer1...N
- Retailer1...M
- Supplier1...K

Each may have a policy subject to constraints. For examples: Consumers have aHowever firms



The challenges are incorporating historical data on sales while without violating the the markov property. This means including data aggregating sales history in the state. Other challenges are adjusting rewards so as to learn multiply items simultaneously.

## agent constraints :

profit:
    : maximize profit in all cases.

clearance:
    : sell as much of the inventory by a given date when it expires. penalty 
     @@ \text{penalty} =\sum_{id} \text{inventory}_{id} \times \text{cost}_{id}@@

volume:
    : sell a volume of inventory by a given date, when it is restocked.
    @@ \text{penalty} =\sum_{id} \text{inventory}_{id} \times \text{cost}_{id} \times k @@

under stock:
    : we want to always have some units in stock
    @@ \text{penalty} =\sum_{id} \text{inventory}_{id} \times \text{cost}_{id} \times k @@

mrp:
    : when we sell at below minimum recommended price set by suppliers we get a penalty.
    
loyalty:
    : we want customers to come back to us (we can offer them promotions, etc).

satisfaction:
    : we want to keep our customers happy so they come back to us and price hikes (increase) makes clients unhappy.

substitutes:
    : substitutes products are ordered by superiority, and we should avoid pricing superior goods less than inferior goods

brand:
    : brands like substitutes are ordered by superiority and pricing should respect this order.

To train different agents we can adjust their rewards to be @@ \text{reward} = \text{profit} - \sum_i \text{violation}_i  @@

## MDP Single product monopoly pricing  

We consider an mdp for pricing of a product. To allow us to  consider historical sales we track historical sales total and the number of days the price was used.

### States:

A state is a tuple : @< id, price, cost, units, days >@ 
where:
    - @id@ is the product id
    - @price@ is within @[\text{minimum price}, \text{maximum price}] @
    - @cost@ is the cost for the product 
    - @inventory@ is the number of units in stock
    - @units@ is total historical sales
    - @days@ is the number of days the product is priced at @price@.
    
There are n states corresponding to prices picked uniformly in the @[\text{minimum price}, \text{maximum price}] @ range say at 10 cent intervals.

### Actions:

1. U - markup product price.
1. D - markdown product price.
1. S - sell n units at price P
1. R - restock n units
1. N - no action

### Rewards:

1. R(U)  = R(N)
1. R(D)  = R(N)
1. R(S)  = N * (P-C)
1. R(S)  = - N * (C)
1. R(N)  = 
The reward is the total daily profit  given by: 

@@reward_{id}=\frac {units \times (price - cost)}{ days}@@


## MDP for Single product monopoly pricing with seasonality 

### States

same as above except we replace units,  with
s1unit, ..., s4units and days with s1days ... s4days
corresponding to units sold over day for each season.

### Rewards

we will also have to adjust the rewards as:

There are n states corresponding to prices picked uniformly in the @[\text{minimum price}, \text{maximum price}] @ range say at 10 cent intervals.

## MDP for Pricing a single product under  competition  

### States:
A state is  a vector of prices:  <shelf_price,cost,  competitor_1_price, ... ,  competitor_n_price, position, units_sold, time_periods>

where:
    - @id@ is the product id
    - @price@ is within @[\text{minimum price}, \text{maximum price}] @
    - @cost@ is the cost for the product 
    - @units@ is total historical sales
    - @days@ is the number of days the product is priced at @price@.

position is the number of competitors which are cheaper than us. 0 means we are cheapest, n means we are the most expensive
where  shelf_price are  between a maximum price, minimum price

### Actions:

1. increase price in current position range
1. decrease price  in current position range 
1. change price into top of  position n (equal to competitor n)

### Rewards :
@@reward_{id}=\frac {units \times (price - cost)}{ days}@@


## Product assortment pricing without competition MDP 
we are pricing products that are known to be complements, substitutes or neither. 
Two brands of coffee makers are substitute products.
Coffee capsules are complementary products for the coffee makers.
Knives are neither substitutes nor complements to coffeemakers.
our products are unique so we have no consider prices of the competition

### States
A state is  table:  <id , complements, substitute, price, cost, units, days >

where:
    - @id@ is the product id
    - @price@ is within @[\text{minimum price}, \text{maximum price}] @
    - @cost@ is the cost for the product 
    - @units@ is total historical sales
    - @days@ is the number of days the product is priced at @price@.
    - @complement@ is a complementary products group id
    - @substitute@ is a substitute product group id

### Actions
1. increase/decrease a single product shelf_price, 
1. increase/decrease all prices of a substitutes_group
1. increase/decrease all prices of a complement_group
1. increase all prices of @complement@ and decrease price the @substitutes@
1. decrease all prices of @complement@ and increase price the @substitutes@

### Rewards 
The reward is the total profit: which is given by: units sold * ( shelf_price - cost)

### Notes:
In this alg we are given the group and substitute ids but it would be better if we could learn them. However, this this would require a rewards for finding these clustering signals. 


## MDP Product assortment pricing under competition

now we add competition

## MDP Product assortment pricing under competition second order discrimination

now we add second order discrimination

this adds states with volume discounts

## MDP Product assortment pricing under competition with third order price discrimination

this adds states with personalized discounts

