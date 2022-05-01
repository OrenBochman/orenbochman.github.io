---
layout: post
title: Attention for sensor fusion
date: 2021-09-24 00:00:00 +0300
description: Attention for sensor fusion
img: cover/transformer-robot.png
fig-caption: Attention for sensor fusion
tags:
  - attention
  - data science
  - marketing
  - sensor fusion
  - statistics
  - autoecoder
bibliography: sensor_fusion.bib
lastmod: 2022-05-01T05:59:58.818Z
---

## An overview of the Autoecoder.

A typical task in sequence to sequence modeling is machine translation. The standard autoencoder architecture has one encoder and one decoder. The encoder compresses the input signal into a hidden state representation and the decoder reproduces it. The decoder might have to reproduce the same sequence, or it might have to generate it in a different language or even in a new modality say as an image. *All things being equal* models should learn the simplest representation. For *seq2seq* (sequence to sequence) modeling this is a one to one mapping. Simply learning to *memorize* all the sentences and their translations in a single layer look up table. To alleviate this tendency to force learning over memorization techniques like bottlenecks, and drop out are used. 

*Bottlenecks* require the encoded or hidden state to be shorter than the source sentences. But since natural language is highly redundant it is fairly easy for the model to face bottlenecks by simply learning to represent the language more efficiently and still memorize as much as it can. We call these new representations embeddings and acknowledge that they are a step in the right direction. However, one still want to reduce the tendency to memorize input output pairs while promoting the acquisition of more general translations mappings. A second way this can be done is to use drop out to destroy parts of the input or parts of the network forcing the representation to be more redundant. These are just two of a family of methods called regularization which are used to reduce overfitting, which is a term for the tendency to memorize both signal and noise.

For example, by encoding German text and then decoding English text one could perform machine translation. In this scenario we want our model to learn an abstract rotation matrix that lets us look up words and phrases in context (i.e. specific word senses) and get their translation. We call it a rotation since it is supposed to more or less preserve the order and length of the semantic sequence. Of course beyond learning the *phrase book* there is a second part to translation which is to transform the input sequence to account for differences in grammar of the output language. In this case one might envision a more abstract mapping that preserves different phrases in the text accounts for their change across languages. This mapping must be  be less trivial when the semantic relation one wishes to preserving cross different interfaces such as phonetic, phonology, morphology, syntax, and pragmatics. Abstractly each may be a might be a simple mapping. In reality however they can also reorder the sentence and, they may need to be applied in the correct order, or simultaneously. Particularly challenging are cases where an explicitly marked state in the target language e.g. gender agreement is unmarked in the source sequence. In many cases errors arises when multiple generated sequences are available to the decoder. The typical beam search algorithm, will pick the most probable sequence where a better translator would proceed by eliminating options by referencing certain contexts in the surrounding text.

One might envision that generating grammatical sentences from a hidden state, may benefit from unsupervised training the decoder on language modeling tasks as these should boost it ability to approximate grammar by penalizing ungrammatical sequences. This has the advantage of being able to train on a corpus that are significantly larger than the typical parallel corpus. And indeed having more data has a regularizing effect, as it helps the model to better discriminate recurring patterns and effectively forget more of the noise it has learned.

However, as mentioned above to learn to generate and or eliminate sequences based on what can be long term association in the text is a challenge which requires attention mechanism.


Questions:

Why exactly do we need beam search. (Is it just to avoid generating `this and that and the the `  sequences? or does it )
Most transformers generate text one word at a time. To accommodate many limitations of autoregressive language models, their output is mined by a beam search alg which essentially looks at a tree of likely sequences. It can then eliminate any ungrammatical sequences and then make a more informed choice on the word it picks. The beam search alg has a horizon which limits the distance it looks at.
1. Are there types of patterns that will be missed due to horizon's distance?
1. Is there a beam search that augments the probablitic conditioning of a sequence with an attention mechansim. The model uses attention for the current word. 
1. We might be generating good sequences by the data for deciding case, gender or other agreement choices might be masked in the future. Do we gain accuracy if we are allowed to revise our choices. 
 the word that. Is there a variant of beam search that uses multiple attention heads to pick generate a sequence.


## Agreeing to disagree - 
In game theory one cannot agree to disagree since in a Bayesian game, agents who observe each others' actions will inevitably converge to the same 'view of the world' even if they began with divergent information. Can we set up attention that approximates this Bayesian game.
1. Imagine we are translating a complex sequence of cause and effects working with a causal
1. 