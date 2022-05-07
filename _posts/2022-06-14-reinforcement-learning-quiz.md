---
title: Reinforcement Learning Quiz
slug: reinforcement-learning-quiz
description: Reinforcement Learning Quiz
author: oren bochman
date: 2022-05-07T16:03:06.877Z
lastmod: 2022-05-07T16:13:54.042Z
draft: true
tags:
  - quiz
  - rl
categories:
  - quiz
  - rl
---

# Reinforcement Learning Q&A

These are the main learning objectives from the RL courses I am auditing. I put them into Question format and added answers.
 
1. Define reward?
    - the immediate value for taking an action.
1. What is the temporal nature of the bandit problem?
1. Define k-armed bandit
    - it is 
1. Define action-values
    - it is 
1. Define action-value estimation methods
    - it is 
1. Define *exploration* and *exploitation*
    - if an choosing an optimal action it called a greedy action then exploration is selecting from no greedy actions while exploitation is selection from greedy ones
1. Select actions greedily using an action-value function
    - Since the action-value function v(a) assigns a value to each action and selecting greedily is picking any of the highest performing actions.
    @@ a : v = argmax_a v(a) @@
1. Define online learning
    - this is learning in a setting where one is given a state and and one infers for it an action and we are not told what the correct action was, only the reward, possibly later.
1. Understand a simple online sample-average action-value estimation method
1. Define the general online update equation
1. Understand why we might use a constant step size in the case of non-stationarity
1. Define epsilon-greedy
    this is a bandit strategy that
@@ 
    f(x)= \left\{ 
        \begin{array}{ c l }
         \text{exploit} & X \geq 1-\epsilon   \newline
         \text{ explore}  & X < \epsilon
        \end{array}
   \right.
 @@
1. Compare the short-term benefits of exploitation and the long-term benefits of exploration
    - exploit returns the best short term returns.
    - explore lets one discover the best long term returns.
1. Understand optimistic initial values
    - they are a mechanism to make the bandits alg try out all options initially.
1. Describe the benefits of optimistic initial values for early exploration
    - they are a mechanism to make the bandits alg try out all options but once they have been tried once the value is revised and early exploration can end with the top option being exploited. 
1. Explain the criticisms of optimistic initial values
    - if there are few episodes and many options they may present a high cost.
    - they are inadequate if the target is moving.
    - if we have stochastic arms we may never learn their true expectation.
1. Describe the upper confidence bound action selection method
1. Define optimism in the face of uncertainty

TODO: complete Q&A for the above
TODO: append more learning objectives.




# online learning 
In RL, we focus on the problem of learning while interacting with an ever changing world. We do not expect our agents to compute a good behavior and then execute that behavior in an open-loop fashion. Instead, we expect our agents to sometimes make mistakes and refine their understanding as they go. The world is not a static place: we get injured, the weather changes, and we encounter new situations in which our goals change.  An agent that immediately integrates its most recent experience should do well especially compared with ones that attempt to simply perfectly memorize how the world works.
The idea of learning \emph{online} is an extremely powerful if not defining feature of RL. Even the way that this course introduces concepts tries to reflect this fact. For example, bandits and exploration will be covered before we derive inspiration from supervised learning. Getting comfortable learning \emph{online} requires a new perspective. Today, RL is evolving at what feels like breakneck pace: search companies, online retailers, and hardware manufacturers are exploring RL solutions for their day to day operations. There are convincing arguments to be made that such systems can be more efficient, save money, and keep humans out of risky situations. As the field evolves, it's important to focus on the fundamentals. E.g. DQN combines Q-learning, neural networks, and experienced replay. This course covers the fundamentals used in modern RL systems. By the end of the course, you'll implement a neural network learning system to solve an infinite state control task. We'll start with the multi-armed bandit problem: this introduces us to estimating values, incremental learning, exploration, non-stationarity, and parameter tuning.

# Multi-armed Bandits

What distinguishes RL from other types of learning is that it uses training information that evaluates the actions rather than instructs by giving correct actions. Because we do not know what the correct actions are, this creates the need for active exploration to search for good behavior.
- Purely evaluative feedback indicates how good the action was, but not   whether it was the best or the worst action possible.
- Purely instructive feedback indicates the correct action to take, independently of the action actually taken.

To emphasize: evaluative feedback depends entirely on the action taken, whereas instructive feedback is independent of the action taken.
To start, we study the evaluative aspect of reinforcement learning in a simplified setting: one that does not involve learning to act in more than one situation. This is known as a non-associative setting. We can then take one-step closer to the full RL problem by discussing what happens when the bandit problem becomes associative, i.e. when actions are taken in more than one situation.

