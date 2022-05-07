---
title: RL Fundamentals W4 - Dynamic Programming
slug: rl-fundamentals-w4-dynamic-programming
description: Fundamentals of Reinforcement Learning Course Notes Week 4 - Dynamic
  Programming Bandit Problem
author: Oren Bochman
date: 2022-05-02T17:24:17.269Z
lastmod: 2022-05-07T17:04:47.554Z
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
This week, you will learn how to compute value functions and optimal policies, assuming you have the MDP model. You will implement dynamic programming to compute value functions and optimal policies and understand the utility of dynamic programming...

Read: 
- [x] [RL Book§2.1-7](http://incompleteideas.net/book/RLbook2020.pdf#page=47) pp. 24-36 -> before lessons.
- [x] [RL Book§2.8](http://incompleteideas.net/book/RLbook2020.pdf#page=64) pp. 42-43 -> before assignments.

Notation:
Mathematics is much easier if you recall the definitions and  notation, here are the essentials at a glance.

- @\pi@ `policy` - a decision making rule for every state.
- @\pi_*@ `optimal policy` - which returns the maximum rewards.
- @G_t@ `return` at time t, for a @(s_t,a_t,r_t...)@ sequence discounted by @\gamma@.
- @p(s',r \vert s,a)@ - `transition probability` to state @s'@ with reward @r@ from state @s@ via action @a@ AKA `four valued dynamics`
- @p(s' \vert s,a)@ - `transition probability` to state @s'@ from state @s@ via action @a@ AKA `Markov process transition matrix`
- @r(s,a)@ - `expected immediate rewards` for action @a@ in state @s@ AKA `reward` of a `Markov reward process`
- @v_\pi(s)@ - state's `value` under policy @\pi@ which is its expected return
- @q_\pi(s,a)@ - the `action value ` in state @s@ under policy @\pi@

### Lesson 1: Policy Evaluation (Prediction)
 
- [ ] Understand the distinction between policy evaluation and control
- [ ] Explain the setting in which dynamic programming can be applied, as well as its limitations
- [ ] Outline the iterative policy evaluation algorithm for estimating state values under a given policy 
- [ ] Apply iterative policy evaluation to compute value functions
### Lesson 2: Policy Iteration (Control) 
- [ ] Understand the policy improvement theorem
- [ ] Use a value function for a policy to produce a better policy for a given MDP
- [ ] Outline the policy iteration algorithm for finding the optimal policy
- [ ] Understand “the dance of policy and value”
- [ ] Apply policy iteration to compute optimal policies and optimal value functions

### Lesson 3: Generalized Policy Iteration
- [ ] Understand the framework of generalized policy iteration
- [ ] Outline value iteration, an important example of generalized policy iteration
- [ ] Understand the distinction between synchronous and asynchronous dynamic programming methods
- [ ] Describe brute force search as an alternative method for searching for an optimal policy
- [ ] Describe Monte Carlo as an alternative method for learning a value function
- [ ] Understand the advantage of Dynamic programming and “bootstrapping” over these alternative strategies for finding the optimal policy
