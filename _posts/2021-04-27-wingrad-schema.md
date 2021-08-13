---
title: Q&A and the Winograd schemas
layout: post
date: 2021-04-27 18:16:16 +0300
categories:
    - idea
tags:
    - AI
    - NLP
    - Intelligence
    - resolution
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Bayesian games
---

The classical Q&A task is fairly easy to solve. But how well does the IR system understand/model the data. The challenge to test this aspect of the system is to provide test of increasing difficulty.

Difficulty can be due to different reasons:

1. Due polysemy of words representing the concepts in the query.
1. Due to synonymy used for the text in the document
1. Due to ambiguity. Ambiguity actually comes in several flavours, morphological (pos) and semantic (word sense) and in the real world there are frequently several ambiguities in a single sentence. Being able to resolve should allow the system to reject many irrelevant results.
1. Due to inference required to reach the answer when the underlying facts are available in the text. 
1. Another challenge might be due to common sense reasoning
1. Another challenge might arise when resolving the query requires specialized domain knowledge.

IR systems typically index information in a document and respond to queries by ranking the document based on some correlation between the contents of the question and the document. 
Most Q&A systems go one step further and learn to point at the answer within the document. In a search engine this might be the snippet or the link might be able to highlight the result in the actual.

To properly evaluate the above capabilities is difficult because one need to be certain the challenge cannot be solved using a much simpler capability.


However for most of these challanges it is entierly possible that the text does not have a answer to extract. 

In *Winograd schemas* the resolution of the ambiguous pronoun switches between the two variants of the sentence.

> the **animal** didn't cross the street because `it` was too **tired**

> the animal didn't cross the **street** because `it` was too **wide**

>The city **councilmen** refused the demonstrators a permit because `they` **feared** violence.

>The city councilmen refused the **demonstrators** a permit because `they` **advocated** violence.

> The trophy doesn’t fit in the brown suitcase because it is too big/small.
> What is too big/small?
> suitcase
> trophy

> Jim comforted Kevin because he was so upset.   
> Who was upset?
> Jim 
> Kevin

> Joan made sure to thank Susan for all the help she had given. 
> Q. Who had given the help?
> Joan
> Susan

> Babar wonders how he can get new clothing. Luckily, a very rich old man who has always been fond of little elephants understands right away that he is longing for a fine suit.  As he likes to make people happy, he gives him his wallet.
he is longing for a fine suit
Answer 2.A Babar


> Paul tried to call George on the phone, but he wasn’t successful/available.
> Who wasn’t successful/available
> Paul
> George

> The man couldn’t lift his son because he was so weak/hevay.
Who was weak/heavy
> fater
> son

> The large ball crashed right through the table because it was made of steel/styrofoam. 
> What was made of steel/styrofoam
> the ball
> the table

> The egg hit the wall and it broke.
> What broke:
> the egg
> the wall

> The truck hit the wall and it broke.
> What broke:
> the truck
> the wall





> Mary scolded/infuriated Jane because she had stolen a tennis racket.
who was scolded/infuriated?
> mary
> jane





How would one go about generating winograd schema:

1. find/generate a sentence with one or more pronoun.
1. drop the sentence if has a co-reference count of 1. (no room for ambiguity)
1. drop sentence if pronoun can be resolved using subcategorization frames.
1. drop the sentence if the pronoun can be solved via selectional restrictions. Recall that these restrictions are preferences.
1. Ontological:
    1. Identifying NE 
    1. resolving relation between NE

note: if generating one may be able to ensure that:

1. schema is a chalanage of knowledge within specific domains.
    * cause and effect
    * social 
    * psychological
    * spatial


Inference 

> The Nile is the longest river with a length of 6,650 km starting at the Rukarara river is the most distant headwater of the Nile. The Amazon river in south america is 150 km shorter than the Nile. Both the Yangtze river and the yellow river are in china. The former is jut 100 km shy of the amazon while the latter is 5,464 km long.

# References

- https://cs.nyu.edu/davise/papers/WSKR2012.pdf
- https://cs.nyu.edu/faculty/davise/papers/WinogradSchemas/WS.html
- http://commonsensereasoning.org/disambiguation.html