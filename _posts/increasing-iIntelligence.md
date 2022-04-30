---
lastmod: '2021-12-24T21:00:47.308Z'
title: Increasing Intelligence
---

Language models are getting pretty big, and they can generate some interesting texts. Undoubtedly language models like BERT and GPT-3+ can put together sentences and paragraphs quite well. Yet even the result are cherry-picked generally don't seem to go anywhere creative. The model is good at regurgitating similar material to what is requested, and it often shirks the task in a "sneaky" way. This may be fine for creating SEO filler for a search engine to read. For general consumption even if the reader may find it challenging to discern the origin of the text they may not find it particularly satisfying to read. This is because this is not just an AI problem - most humans need to learn creative writing and still tend to produce rather awful first drafts - particularly when the story is longer (say a screenplay for a feature).

At this point I should like to point out that a neural language model is really a glorified approximation of a joint probability for words sequences. Telling a story requires planning (setting goals and sub-goals). For a decent story you also require structure. Telling a great story needs to handle conflict and intangibles like elicit emotions.

So how can we how can we improve the output if generated scenarios and stories. - We could take a pre-trained BERT and try to teach it about structure, emotion, creating interest and so forth.

The first challenge of discourse is to persist context beyond sentence boundaries. This is needs to be separated into local and global contexts. Global context can contain commonsense knowledge about the real world. Local context includes what has happened in the last sentence or paragraph. 

The second is to capture enough elements of story structure so that the story can be closer to what a human might write. Feeding lots of stories into a machine could help but up to a point. Give the model enough stories and it will be copying and pasting parts from similar stories. It is something that humans often want to do. At a certain point it will become almost impossible to improve. 

Another approach is to make an adversarial model.  In this approach we train a writer and a critic. The writer writes texts and the critic is shown these and real world text and has decided if these were written by human. This has one advantage to not require very complicated setups. A second advantage is that we can also train the model to handle planning as strategy and tactics by approaching this a search space and using techniques developed for "solving" to learn these from scratch by using a Monte Carlo search which balances exploration of need regions and exploitation of established material.

However, this is complicated. For my first POC I want to take a transformer type of neural language model and augment it with transformers geared at specific aspects of story structure which would be encoded in tensors such as: breaking the text into beats, scenes, sequences and acts. Discerning in the beat to what degree it is narrative action (e.g. a physical altercation constituting the inciting incident), character building action (e.g. a "save the cat" moment which establishes the opposing point of view and values that drive the conflict) character building exposition and narration (Information on characters we don't want to show but need to tell the audience about to increase empathy and sympathy for the characters).

Capturing the calculus of events in the narrative - where, when, who did what.

Overlayed on this is a type of rhetoric which ask also why and expects in terms of the values driving the conflicting point of view and a system of changing them - either through 

 
Evoking emotion requires empathy - we should identify with the characters and can use sympathy we should be invested in them love or hate.) Encoding dramatic irony
