---
layout: post
title: # Bayesian Games and Bayesian Equilibrium
  null
date: 2021-04-10 00:00:00 +0300
description: Bayesian Games and Bayesian Equilibrium
img: dice-distribution.jpg
fig-caption: # Add figcaption (optional)
  null
tags:
  - modelling
  - game theory
  - incomplete information
lastmod: 2022-05-02T16:45:46.116Z
---


# TLDR

This post arose from my wish to update some colleague that one of our problems could be better understood as a Bayesian game. I thought I should provide them with an into. Now as I am making progress in a reinforcement learning specialization I am seeing more clearly the benefits an limits of this approach.

# Game Theory in 20 seconds

Game theory is the branch in mathematics for reasoning about rational decisions making. Game theory makes numerous appearances in reinforcement learning but is not considered a prerequisite. Game theory has also become a foundational tool in microeconomics. 

I think that most of game theory to be straight forward and that its extensive terminology is an added benefit which  facilitates reasoning more precisely about a very large numbers of situations.

## Solution concepts:

Bayesian Game theory is a solution concept in game theory.
Solution concepts are a hierarchy assumptions on what we think as a game and the rational decisions for the players in such games. Solution concepts made a late entry into Game theory when it became evident that the methods most frequently used were providing nonsensical recommendation which needed to be excluded. Instead of finding better methods for these situations, the game theorists simply updated their assumptions to rejects such recommendations. Unfortunately, while this  made the beautiful framework more rigorous it became less intuitive.

# Bayesian Games and Bayesian Equilibrium

Bayesian in the name refers to the bayes theorem which intuitively is the updating of our beliefs whenever the moves of the game provide new evidence. Bayesian games deal with situations with incomplete information which we like to think of as uncertainty and represent as probability distributions. 

The first is the type of uncertainty is what kind of players have been 'assigned by nature' to the other agents as this determined their rewards and strategy. The second type of uncertainty is more dynamic and we call it the state of the world. The third type of uncertainty is what other agents thinks about the state of the world. This is a more complicated affair as belief are defined recursively taking into account what other agents might consider.

Lets make it more concrete using the game of Bridge which combines cooperation by pairs which are in competition.

We have four players with different skill levels and temperaments and we can learn these characteristics after some games, still partners may be assigned randomly by sitting order. Next the cards are dealt and each player has only knowledge of their hand. This is the state of the world. In the Bidding steps partners signal the strength of their hands without disclosing their actual contents. Attentive opponents should be able to learn their opponent's and partners strongest suit and number of cards and their strength. Perhaps they will also learn about other weaker suits in those hands. Next as tricks are played there are less unknown cards in play and uncertainty may be reduced. The should use their information to cooperate and finesse their opponents out of fulfilling their contract.

These games have been studied and are solved using a the so called sub-perfect Bayesian equilibrium which is an refinement of Bayesian Nash equilibrium. 

The Bayesian game is a tuple of the form @(N,A,\Theta ,p,u)@ where  
- @N@ is the players 
- @A@ is the actions
- @\Theta@ is the type space 
- @p@ is the probability over type space 
- @u@ is the utility functions

## Strategies
Strategies are defined as:

**Pure strategy**: @s_i : \Theta_i \to   A_i@
i.e. a mapping from type to action,

**Mixed strategy**: @s_i : \Theta_i \to \Pi(A_i)@
i.e. a mapping from a type to a distribution of actions.

Here the following notation **@s_i(a_i|\theta_i)@** refers to the probability under mixed strategy @s_i@ that agent @i@ plays action @a_i@ given @i@'s type is @\theta_i@

i.e. a choice of mixed action as a function of the player's type

# Expected Utility

ex-ante
: the agent has no information about types

Where according to *Sun Tzu* - failure is assured. This however can correspond to some prior about the distribution of types.

interim
: the agents know their own types 

Where according to *Sun Tzu*  - 50% chance of victory and 50% chance of failure.

ex-post
: the agent knows all agent's type.

Where according to Sun Tzu - victory is assured. However we still lack information on the state of the world

player @i@'s interim expected utility:

@@EU_i(s|\theta_i) = \sum_{\theta_{-i}\in\Theta_{-i}} p(\theta_{-i}|\theta_i) \sum_{a \in A} \left( \prod_{j \in N} s_j(a_x|\theta_j) \right) 
u_i(a,\theta_{-i}|\theta_i) @@

player @i@'s ex-ante expected utility:

@@EU_i(s|\theta_i) = \sum_{\theta_i\in\Theta_i} p(\theta_i) EU_i(s|\theta_i)  @@

# Equilibrium

Let's recap starting with the Nash equilibrium.

## Nash equilibrium

In a non-Bayesian game, a strategy profile is a *Nash equilibrium* if every strategy in that profile is a best response to every other strategy in the profile.

## Bayesian Nash equilibrium

- is a refinement of the concept to nash equilibrium for a Bayesian game.

- players' strategies maximize their expected payoff given their beliefs about the state of nature. 
- a player's beliefs about the state of nature are formed by conditioning the prior probabilities @p@ on his own type according to Bayes' rule.
- a strategy profile that maximizes the expected payoff for each player given their beliefs and given the strategies played by the other players.
    
That is, a strategy profile @ \sigma @ is a Bayesian Nash equilibrium @ \iff \forall \text{player}_i \exists \sigma_i : argmax(\text{payoff}(\text{beliefs}_i|\text{player}_i))@ 

a mixed strategy profile s must satisfy: @s_i \in arg max EU_i(s_i',s_{-i}|\theta_i)@

- explicitly models behavior in uncertain environment.
- players choose strategies to maximize their payoffs in response to others accounting for:
    - strategic uncertainty about how other players will play.
    - payoff uncertainty about the value to their actions.

# Perfect BE

Bayesian Nash equilibrium can result in implausible equilibria in dynamic games, where players move sequentially rather than simultaneously. As in games of complete information, these can arise via non-credible strategies off the equilibrium path. In games of incomplete information there is also the additional possibility of non-credible beliefs.

To deal with these issues, Perfect Bayesian equilibrium, in the spirit of sub-game perfect equilibrium requires that, starting from any information set, subsequent play be optimal. Furthermore, it requires that beliefs be updated consistently with Bayes' rule on every path of play that occurs with positive probability.

## Some examples:

### Sheriff's Dilemma

A sheriff is facing an armed suspect. Both must simultaneously decide whether to shoot the other or not.

- The suspect can either be of type "criminal" or type "civilian". 
- The sheriff has only one type. "judge jury & executioner" type :wink:

While the suspect knows his type and the Sheriff's type the sheriff does not know the suspect's type. This is the cause for incomplete information making it a Bayesian game.

There is a probability @p@ that the suspect is a criminal, and a probability @1-p@ that the suspect is a civilian; both players are aware of this probability (common prior assumption, which can be converted into a complete-information game with imperfect information).

#### Payoffs as preferences

- The sheriff prefer to shoot if the suspect shoots, and not to shoot if the suspect does not. (not dependent on type just action)
- The suspect:
    - if a criminal, prefers to shoot .
    - if a civilian, prefers to not shoot.

### Gift Game

https://en.wikipedia.org/wiki/Perfect_Bayesian_equilibrium#Gift_game_1

### Signaling game:
https://en.wikipedia.org/wiki/Signaling_game#Examples

### Cluedo, Bridge and Poker

- [Cluedo](https://en.wikipedia.org/wiki/Cluedo)
- [Bridge](https://en.wikipedia.org/wiki/Contract_bridge)
- [Poker](https://en.wikipedia.org/wiki/Poker)


Now I made this long note on this type of game as I believe it can become a framing mechanism for an Idea I have for NLP processing to resolve uncertainties in text comprehension. If I summarize the Bayesian game where as moves are played the strategies of the players' hidden type are signaled, despite their best intent.

In this case things are rather simpler. Our opponent is some generative process. At every stage it emits lexemes whose true type has to be inferred. 
- some Lexemes have types that are easy to determine
- some lexemes type is quickly determined from their context 
- others form coalitions with shared uncertainty. They require one to compare the viability of counterfactual hypothesis to determine their composition.

In this sense natural language understanding can be viewed as a game of incomplete information in which we want to dynamically resolve each lexeme its unique meaning.

A Bayesian game framework should allow to resolve all the uncertainties of the lexeme in one fell swoop rather than considering it multiple facets one at a time. Also it allows processing a sequence as a sequence of moves each providing new uncertainties but providing data to update our beliefs.

Lexemes have a type e.g. a specific word-sense or specific co-reference.

They? also make moves !? in the sense that words acting in coalitions are arranged in certain ways that around them 


# Resolver scenario:

So we come to the some text generation game in which nature add words while the player tries to resolve ambiguity. 

<!-- 
Notes:
strategy profile 
prefer utility over payoffs.
-->