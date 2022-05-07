---
title: RL Fundamentals W3 - Value Functions & Bellman Equations
slug: rl-fundamentals-w3-functions-bellman-equations
description: Fundamentals of Reinforcement Learning Course Notes Week 3 - Value Functions
  and Bellman Equations
author: Oren Bochman
date: 2022-05-02T17:24:17.269Z
lastmod: 2022-05-07T16:56:09.633Z
draft: false
tags:
  - Coursera
  - notes
  - rl
  - reinforcement learning
  - Value Functions
  - Bellman Equations
  - Optimality
  - Optimal Policies
  - Optimal Value Functions
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

## Week 3: Value Functions and Bellman Equations/

Read: 
- [x] [RL Book§2.1-7](http://incompleteideas.net/book/RLbook2020.pdf#page=47) pp. 24-36 -> before lessons.
- [x] [RL Book§2.8](http://incompleteideas.net/book/RLbook2020.pdf#page=64) pp. 42-43 -> before assignments.

Once the problem is formulated as an MDP, finding the optimal policy is more efficient when using value functions. This week, you will learn the definition of policies and value functions, as well as Bellman equations, which is the key technology that all of our algorithms will use.

### Lesson 1: Policies and Value Functions

- Recognize that a policy is a distribution over actions for each possible state
- Describe the similarities and differences between stochastic and deterministic policies
- Identify the characteristics of a well-defined policy
- Generate examples of valid policies for a given MDP
- Describe the roles of state-value and action-value functions in reinforcement learning
- Describe the relationship between value functions and policies
- Create examples of valid value functions for a given MDP
 
### Lesson 2: Bellman Equations

- Derive the Bellman equation for state-value functions
- Derive the Bellman equation for action-value functions
- Understand how Bellman equations relate current and future values
- Use the Bellman equations to compute value functions

### Lesson 3: Optimality (Optimal Policies & Value Functions)

- Define an optimal policy
- Understand how a policy can be at least as good as every other policy in every state 
- Identify an optimal policy for given MDPs
- Derive the Bellman optimality equation for state-value functions
- Derive the Bellman optimality equation for action-value functions
- Understand how the Bellman optimality equations relate to the previously introduced Bellman equations
- Understand the connection between the optimal value function and optimal policies
- Verify the optimal value function for given MDPs
