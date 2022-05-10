---
title: RL Fundamentals W4 - Dynamic Programming
slug: rl-fundamentals-w4-dynamic-programming
description: Fundamentals of Reinforcement Learning Course Notes Week 4 - Dynamic
  Programming Bandit Problem
author: Oren Bochman
date: 2022-05-02T17:24:17.269Z
lastmod: 2022-05-07T18:47:18.752Z
draft: false
tags:
  - Coursera
  - notes
  - rl
  - reinforcement learning
  - dynamic programming
categories:
  - notes
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css?family=Schoolbell&v1" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Klee+One&display=swap" rel="stylesheet">
<style>
body {
    font-family: 'Klee One', cursive;
    background-color: #E6E6FA;
}
code {
        background-color:yellow;
}
h1,h2,h3,h4 {
    font-family: 'Schoolbell', arial, serif; 
    color:blue;
}
hr { 	
  clear:both;  
}
img[src*='#sl'] { 
  float: right; 
  width:55%; 
  margin:10px 10px 10px 0px; 
  border: 2px solid gold;
  display: block;
}
img[src*='#hi'] { 
  width:85%; 
  display: block;
  margin: 10px auto 10px auto;
  border: 2px solid gold;
}
img[src*='#logo'] {
      width: 20%;
      float: right
}
</style>

# Fundamentals of Reinforcement Learning

![rl algorithms](/assets/img/articles/rl/alg_selector.jpeg)

## Week 4: Dynamic Programming /
In this week, we learn how to compute value functions and optimal policies, assuming you have the MDP model. You will implement dynamic programming to compute value functions and optimal policies and understand the utility of dynamic programming.

The 'programming' in dynamic programming really means solving an optimization problem. We have learned about using the Bellman equations as update rules. Now we look at some basic applications of this idea to solve MDP.

The intuition is pretty simple we have two tasks - one is to decide how good a policy @\pi@ is - think  'discounted summation of the rewards from the best actions over the @s_ta_tr_t@ tree'. This policy evaluation step is named **prediction**, as we don't really know what the actual rewards of stochastic actions will be, only their expectation. But what we really want is to find near optimal policy which is called 'control'. We have a strong theoretical result on how to go about this by iteratively improving a policy by picking its the actions with highest value at each steps.

What is surprising at first is that even starting with a uniform random policy we don't need to explore the tree too deeply in the prediction step to be able to pick better actions. Also we can see from the maze like grid world that we really need to update one or two states every iteration. Which suggest that there is great room for improvement with smarter algorithms.

Read: 
- [x] [RL Book§4.1-7](http://incompleteideas.net/book/RLbook2020.pdf#page=47) pp. 73-88 -> before lessons.
- [x] [RL Book§4.8](http://incompleteideas.net/book/RLbook2020.pdf#page=64) pp. 88-89 -> before assignments.

### Lesson 1: Policy Evaluation (Prediction)
 
- [x] Understand the distinction between `policy evaluation` and `control`.
- [x] Explain the setting in which dynamic programming can be applied, as well as its limitations.
- [x] Outline the `iterative policy evaluation algorithm` for estimating state values under a given policy 
- [x] Apply iterative policy evaluation to compute value functions.

### Lesson 2: Policy Iteration (Control) 

- [x] Understand the `policy improvement theorem`.
- [x] Use a value function for a policy to produce a better policy for a given MDP.
- [ x] Outline the `policy iteration algorithm for finding the optimal policy`.
- [x] Understand `“the dance of policy and value”`.
- [x] Apply policy iteration to compute `optimal policies` and optimal `value functions`.

### Lesson 3: Generalized Policy Iteration

- [x] Understand the framework of `generalized policy iteration`.
- [x] Outline `value iteration`, an important example of generalized policy iteration.
- [x] Understand the distinction between `synchronous` and `asynchronous` dynamic programming methods.
- [x] Describe brute force search as an alternative method for searching for an optimal policy.
- [x] Describe `Monte Carlo` as an alternative method for learning a value function.
- [x] Understand the advantage of Dynamic programming and "bootstrapping" over these alternative strategies for finding the optimal policy.
