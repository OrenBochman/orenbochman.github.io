---
title: RL Fundamentals W1 - The K-Armed Bandit Problem
slug: rl-fundamentals-w1-armed-bandit-problem
description: Fundamentals of Reinforcement Learning Course Notes Week 1 - The K-Armed
  Bandit Problem
author: Oren Bochman
date: 2022-05-02T17:24:17.269Z
lastmod: 2022-05-07T17:00:18.192Z
draft: false
tags:
  - Coursera
  - notes
  - rl
  - reinforcement learning
  - the k-armed bandit problem
  - bandit algorithms
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

## Week 1: The K-Armed Bandit Problem /

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

### **LESSON 1** The K-Armed Bandit /

- [ ] Understand the temporal nature of the bandit problem
- [x] Define k-armed bandit
- [x] Define action-values
- [ ] Define reward

#### k-armed bandits /

In the `k-armed bandit` problem there is an `agent` who is given by the environment a `state` @s@ and must decide on some `action` resulting in getting some `reward` and a new state @s'@

#### Action Values /

The `value` of an action is its `expected reward` which can be expressed mathematically as 
    @@ q_*(a) \doteq \mathbb{E}[R_t  \vert  A_t=a] \space \forall a \in \{a_1 ... a_k\}  @@
where:
 - @\doteq @ means definition
 - @\mathbb{E[r \vert a]}@ means expectation of a reward given some action a

Since agents want to maximize rewards, recalling the definition of expectations we can write this as:

@@ \argmax_a q_*(a)=\sum p(r  \vert a)*r@@

where:
 - @ \argmax_a - \text{means the argument a maximizes ...}@
### LESSON 2: What to learn, understanding Action Values

1. Define action-value estimation methods
1. Define exploration and exploitation
1. Select actions greedily using an action-value function
1. Define online learning
1. Understand a simple online sample-average action-value estimation method
1. Define the general online update equation

### LESSON 3: Exploration vs Exploitation
- Define epsilon-greedy
- Compare the short-term benefits of exploitation and the long-term benefits of exploration
- Understand optimistic initial values
- Describe the benefits of optimistic initial values for early exploration
- Explain the criticisms of optimistic initial values
- Describe the upper confidence bound action selection method
- Define optimism in the face of uncertainty
