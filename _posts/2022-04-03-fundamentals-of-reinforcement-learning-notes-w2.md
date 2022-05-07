---
title: RL Fundamentals W2 - Markov Decision Processes
slug: rl-fundamentals-w2-markov-decision-processes
description: Fundamentals of Reinforcement Learning Course Notes Week 2 - MDPs Markov
  Decision Processes
author: Oren Bochman
date: 2022-05-02T17:24:17.269Z
lastmod: 2022-05-07T16:54:35.041Z
draft: false
tags:
  - Coursera
  - notes
  - rl
  - reinforcement learning
  - Markov Decision  Processes
  - MDP
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

## Week 2 Markov Decision Processes MDPs

### Objectives 
 
- [ ] Understand Markov Decision Processes (MDP).
- [ ] Describe how the dynamics of an MDP are defined.
- [ ] Understand the graphical representation of a Markov Decision Process.
- [ ] Explain how many diverse processes can be written in terms of the MDP framework.
- [ ] Describe how rewards relate to the goal of an agent.
- [ ] Understand episodes and identify episodic tasks.
- [ ] Formulate returns for continuing tasks using discounting.
- [ ] Describe how returns at successive time steps are related to each other.
- [ ] Understand when to formalize a task as episodic or continuing.


David Silver shows in his lecture how to develop MDP. He starts with a Markov process with (states and transitions), My adding rewards we get a Markov rewards process. By adding actions we get a markov decision process. 

He notes in the notes the following MDP extensions:
- Infinite and continuous MDPs - the case of optimal control
- Partially observable MDPs.
- Undiscounted, average reward MDPs.

## Markov Process

Markov Property for a state space where The future is independent of the past given the present.

A state S@_t@ is Markov if and only if:
    @@ \mathbb{P}[S_{t+1}  \vert  S_{t}] =  \mathbb{P}[S_{t+1}  \vert  S_1,...,S_t]@@

* The state captures all relevant information from the history 
* Once the state is known, the history may be thrown away i.e. 
* The state is a sufficient statistic of the future

For a Markov state s and successor state s′, the state transition probability is defined by:

@@\mathbb{P}_{ss′} = \mathbb{P}[S_{t+1}=s′  \vert  S_t=s]@@

State transition matrix @P@ defines transition probabilities from all states @s@ to all successor states @s′@,

@@\begin{align}
  P=\left( \begin{array}{cc}
      p_{11} & \cdots & p_{1n} \newline
      \vdots & \ddots & \vdots \newline
      p_{n1} & \cdots & p_{nn} \end{array} \right)
  \end{align}@@
  
Definition: A Markov Process (or Markov Chain) is:
    : a tuple @⟨S,P⟩@ where:
        - **@S@** is a (finite) set of states
        - **@P@** is a state transition probability matrix, @P_{ss'} =P[S_{t+1}=s'  \vert S_t=s]@



### Markov Reward Process

A Markov Reward Process **(MRP)** is a Markov chain with values.

Definition: A Markov Reward Process is:
    : a tuple @⟨S, P, R, γ⟩@ where
        - **@S@** is a finite set of states
        - **@P@** is a state transition probability matrix,   where @P_{ss′} =  \mathbb{P}[S_{t+1} = s′ \vert  S_t = s]@
        - **@R@** is a reward function, @R_s = \mathbb{E}[R_{t+1}  \vert  S_t = s] @
        - **@\gamma@** is a discount factor, @\gamma \in [0, 1]@

The return @G_t@:
: is the total discounted reward from time-step t.

    @@ G_t =R_t+1+\gamma R_t+2+...=\sum_{k=0}^{\infty} \gamma^k R_{t+k+1} @@

The value function:
:   The state value function v(s) of an MRP is the expected return starting from state s
    @@v(s) =\mathbb{E} [G_t  \vert  S_t = s]@@

#### Bellman equations for MRP

The value function can be decomposed into two parts:
- immediate reward @R_{t+1}@ and 
- a discounted value of successor state @\gamma v(S_{t+1})@

@@\begin{align} 
v(s) &= \mathbb{E}[G_t  \vert  S_t=s] \newline
& = \mathbb{E}[R_{t+1} + \gamma R_{t+2}+\gamma^2 R_{t+3} + ...  \vert S_t = s]   \newline
& = \mathbb{E}[R_{t+1} + \gamma( R_{t+2}+\gamma^2 R_{t+3} + ... )  \vert S_t = s]   \newline
& = \mathbb{E}[R_{t+1} + \gamma G_{t+1}  \vert  S_t = s]   \newline
& = \mathbb{E}[R_{t+1} + \gamma v(S_{t+1})  \vert S_t = s] 
\end{align}@@

@@\begin{equation} 
    v(s) = \mathbb{E}[R_{t+1} + \gamma v(S_{t+1})  \vert S_t = s] 
    \end{equation}@@

@@v(s) = R_s + γ \sum_{s'\in S} P_{ss'}v(s)@@


