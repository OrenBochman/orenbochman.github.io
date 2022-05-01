---
layout: post
title: Language models and explainability
date: 2021-09-24 00:00:00 +0300
description: Language models and explainability
img: cover/python.jpeg
fig-caption: Language models and explainability
tags:
  - data science
  - statistics
  - marketing
bibliography: delphi_method.bib
lastmod: 2022-05-01T05:30:08.679Z
---

# TLDR

What is a language model in NLP? And today how can we make them less opaque?

#  Some questions 
Originally Language models were used to handle the task to determining to what degree a sequence of words would be expected to arise in the wild. Formally, This took the form a joint probability distribution or a conditional probability distribution. Frequentist methods proved inadequate since it was realized by Ziff and others that language distribution followed power laws which in plain English means that when ever we look at a bigger sample there will be a few new phrases that arise but many more that seem to be missing and not because they are ungrammatical, but simply because the sample is too small. This concept is sometimes called the curse of dimensionality, but it raises some additional issues.

To address this challenge a number of techniques were put to use including back-off and smoothing which try to estimate probability of longer sequences using the best available extrapolation for shorter ones. And the second idea was to reserve some probability for handling out of vocabulary tokens which always came up when trying to use a model trained on a corpus with our own data.

What one expects is that language models would capture more structure and meaning of language if they correctly estimate the probability of longer sequences, like the 100-200 word sentences used by Dickens. There are many constructs in language that simply require more than 5 words to capture. On the other hand one would like to see the model reject ungrammatical sequences even if it has never seen them.

To realize this additional techniques like Markov chain, probabilistic grammars and so which allow the model to also learn likelihood of phrase structures.

These models were less bad but required more work to create large supervised data sets. But the common problem seemed to be that beyond a certain sequence length the model would quickly to point that they have only seen a certain sequence once and then show that they prefer to rote learn many sequences rather than generalize the way one would expect. For your typical corpus this number was between 4 and 7 words. This meant that capturing real probabilities of longer phenomena was increasingly challenging - even if one could reject certain errors agreement and pronouns resolution tends to fail as these grow further apart.

But all this seemed to change for two reasons. We started using neural networks which seem to have better capacity for representing relations than most of the previously mentioned techniques. But perhaps more significantly we started to work with significantly larger corpus. 

This led to models that can capture relations between very long sequences (hundreds and thousands of words) and to consider a much richer sets of features for those words.

What we see is that it is very challenging to estimate 

The main problem with these models is that the sparsity of data at longer sequence length.

 # What is a language model?

The classical definition of a language model is a conditional probability distribution for a word given some a context. The context is a sequence of words before after the word being predicted. Context may be enriched with more information, such as relative position, part of speech, and they may be restricted to a certain window size. Word models are ubiquitous in NLP where they are used to estimate the likelihood of a given sequence or to generate sequences.

Why are classical models so hard to get right?
There is a theoretical problem - we have finite evidence (in the corpus) but we want to model an infinite space (all possible sequences in a language), which manifests in the real world as number of challenges. 

The evidence is sparse - For N>3 Almost all word permutations will never be seen in a corpus. This means that there is no evidence if the permutation is ungrammatical, uncommon or that it is part of language not covered by the model
Ziffp's Law - Most words are rare, but a few words are very common.

Sequences of length N > 3 are often unique in the sense that generating text using such n-grams will just recreate long sequences from the corpus and fail to capture the more general structure of language

So to summarize - we only have good data on shot n-grams, but we want the model to capture the true behavior of arbitrary long sequences.

### Back off

A number of statistically motivated methods have been proposed to combine data from shorter sequences into longer sequences. The main idea is that we don't have a trigram probability we can back off to bigrams and use product of their probabilities. However, natural language have complex structure and for back off to produce a good estimate requires that the shorter n-grams are distributed independently which is not the case. We can double the corpus size, but that will only just introduce new words and phrases that are even less common than any we have seen before.

## Why are deep language models SOTA?

In the era of deep learning language model are trained and represented by neural networks. Neural language models have higher capacity for capturing evidence than other language models such as Markov chains. Another facet of higher capacity is that these models learn both the structure and what features are present in the data. I mentioned Markov chains as they are mathematically close to conditional probability distributions with simplifying assumption (similar to back off) which are models. 

Higher capacity allows neural language model to encode more details from the corpus for a given network size than other models. However, since storage is so cheap what this advantage translates to how well the model can recall and generalize from a limited amount of training data.

We should note that neural nets are slow to train slow to evaluate, require lots of data and their high capacity often leads to overfitting as they will learn both signal and noise. Research has shown that for many NLP tasks using the many tricks, models are very simple and research has demonstrated that one can reach equivalent results by fine-tuning non-neural models with the same data. 

How have language models evolved in the last few years?

RNNs (recurrent neural networks) 

The initial breakthrough in NLP were in machine translation using RNNs (recurrent neural networks). But RNN turned out to be one of the most challenging type of models to train. Initially the main problem was to get RNN models to converge - they often entered a chaotic phase and then never leave it later as we learned to get these to converge better than the vanishing and exploding gradient problems came to light which in the case of word distribution was more challenging as the models are multiplicative and when run on GPUs that have low precision representation of floats leads to loss of information due to round off errors. Finally, RNN take longer to train as they grow longer as the models typically need to run N times in series (for N units) which makes poor use of the high parallelism offered by the GPU hardware. In retrospect, we can see that RNN are slow and difficult to train and tend to suffer from information due to an inability to allow information to be accessed over long distances. 

Some of these issues we addressed by *LSTMs* and later *GRUs*. These are more complicated architectures that aim to improve information routing. Using units like *RELU* and *Batch normalization* helped to reduce the vanishing and exploding gradients. Which let RNN become effective at a length of about 100 units. But they still had to run in series, and they still tend to lose information.

This changed when attention mechanisms and transformers architecture were used in seq2seq models. These models could be evaluated for n-units in a single step. They were mathematically much simpler than LSTM and GRUs and could handle sequences of hundreds of units. This allowed them to pick up long distance structure of language that had eluded RNN based models. More recent improvements like the multi-headed attention and the reformer architecture have led to models capable of handling book long sequences in memory. Transformers are also much better at routing information over these very long sequences. 

As a rule of thumb the best way to improve a model is to give it more data though this will also require increasing the size of the net and training longer. Transformers would be trained in an unsupervised fashion on web scale corpuses. Models like BER and GP3 soon became some of the biggest models developed for use in Deep Learning. These language models are more flexible that the joint probability models described above in a sense that their internal state seems to capture diverse aspects of both language and of the real world and allows them to perform well on many tasks they were not trained on.

When is bigger not necessarily better?
One of the more fatuous points made in the literature is how almost anything that improves the model works as a regularizer - a mechanism that reduces overfitting. Neural nets are notorious for overfitting data due to their high capacity and many methods like early stopping and restoring model weights, adding penalties on kernels, weights, biases and outputs to the loss. Using drop out and batch normalization are some possibilities for use to combat overfitting. 

"Providing more data works well as a regularizer". This is best understood by considering that language acquisition is many layers ability much like a linguistic onion. The first level might be the use of 1000 core words, a limited vocabulary but all the grammatical words. This is enough for a foreigner to communicate. Next one might master 3000 words get a better grasp of intermediate grammar, and morphology. We could communicate more freely and no longer need a learner's dictionary. To pick up idioms and phrases that are used in a newspaper one might need to reach 5000 words. To master a technical area like business or medicine one needs about 15000 more words mostly unique to that field so at 20000. But 15,000-20,000 is also the amount of words used by native language speakers. A dictionary for English might have 150,000 words which would give one access to reading literature and even many obsolete words used in older religious works. After that we can consider encyclopedias full of technical information. Wikipedia has over 6,000,000 articles covering many technical and non-technical areas. News and Web sized corpus are even larger.

When we are training a language model it would acquire the most common grammatical words and their grammar. It will, with enough data proceed to learn to acquire the semantics of core concepts in the language even with a limited corpus. At any corpus suited to a given level of words in our onion there will be some words from the next which appear too rarely to fully master. But by the time the model has a distributed representation of say 2000-8000 words and perhaps much sooner the model should be able to comprehend unknown words based on its context and other words most familiar for that context. Models like BERT are trained specifically to predict missing words from sentences.

This follows from the law of large numbers arises from a random walk. We know that real signals like features tend to aggregate over time while spurious signals tend to cancel out. The challenge is that each time we double our data we will add new features in the form of rare words phrases entities and even senses for words that have not been seen before. At the same time evidence will build up due to chance for phrases or grammatical structures. The net will try to learn all of these.
Like technical term in a news corpus may we will make sense because the net is trained to penalize bad input and as more evidence is presented it will learn to tell apart spurious data patterns that arise due to chance from real patterns. The law of large numbers means that distributions tend - but it needs to see the real ones patterns in such quantity that their signals overpowers noise. (Adding more data also adds more chance that some spurious patterns will appear frequently)much more frequently.
The unreasonable effectiveness of transformers soon lead us to see that test used in evaluating the language skill, comprehension ability of these models are easily beaten by ML. We are not easily able to make tests that are easy for humans and almost impossible for models. Also, it can be challenging to tell text generated by these models (and cherry-picked by the developers) from text written by human writers. This has led many people to think that these models have become truly intelligent in the sense that they comprehend texts about the real world.

Deeper scrutiny shows that neural language models are incapable of doing basic arithmetic which is not a language skill. They are also seemed to recall and recreate approximation of text that they have seen - much like 4-GRAM models trained on the works of Shakespeare - they will spew long sequences they remember. It is not impossible to make very smart models, but it is much easier to make a model that seems smarter than it is.

An early result in image processing comes to mind - a model that was able to tell apart tanks from trucks was able to do this by summing all the pixels because one group was taken on a sunny day and the other an overcast day. Image classifiers will learn to focus on a single pixel per class if such pixels are unique to each class. It becomes increasingly challenging as the data grows to ensure what is going on within the model. 

Models like GPT3 used massive compute and lots of data but were developed using poor methodology, so that success on downstream tasks could not be credited to anything other than having seen similar data.

This leads more NLP practitioners to consider that the larger model sizes is not necessarily a better model in the sense that a smarter/more efficient representation should be able to provide better results. While there are general research groups like Open AI who build bigger model like GPT2 and GPT3 there are other researchers who work on 

Some known issues with neural networks are that they tend to overfit the data which means that every larger datasets are required to regularize this. Recent language models like GPT2, GP3 etc. use a very large number of parameters. Scrutiny of their output leads to output that appears to be written by humans. However, this is familiar issue from 4-grams or 5-grams N-grams models where sparsity of data (say the complete works of Shakespeare) leads to more and longer sequences being memorized by the (Markov chain model) and the output being a somewhat lossy compression of the corpus. As DNN will prefer to memorize and then retrieve the data rather than to model and infer. In the case of DNN with internet sized corpuses the researchers can easily fool themselves that the model is not stitching up its output from more examples rather than learning to model what is needed to represent the language. (Note Wikipedians also frequently stitch up articles on subject they are not very knowledgeable about and only domain experts can readily find the glaring errors that betray the ineptitude.) 

Specifically we are now seeing and therefore expecting deep language models to learn the grammar, the lexicon, semantics, pragmatic commonsense knowledge of the world, and a rudimentary logical reasoning ability. 

Classic Linguistic theory postulates that an efficient representation of language should consist of a grammar and a lexicon. This approach was shown to make sense in computational area of morphology where finite state morphologies were most efficiently represented by specified and combining a grammar with a lexicon.

# Making models less opaque?

If we think about language model arising from something like an HMM using Vitrebi with two components - one that generates the evolution of the hidden state and the second an emission matrix that generates a lexeme for each state. We might even oversimplify and imagine the first is a morphosyntactic state and the second a semantic probabilistic lexicon. The second part seems to be fairly simple - just a big lookup table. While the first part is a model for the grammar and morphology. But if we have a good representation we might actually be able to learn the first part faster than the second. 

How come - the lexicon is finite, but the grammar can generate infinite number of sentences. But the grammar is represented using a small set of rules with just a few symbols per rules say 4 on average. And the cardinality of the symbols in that component is perhaps many orders of magnitude smaller than the full lexicon. 

So while we will always have just an approximation of each component we should expect to see each rules of length 3 many times before we see all our trigrams. The challenge is for the model to capture the reality that we have the same syntax for such varied semantics.

So how can we make the model less opaque?

Let's imagine that the model really learns all this stuff - it has captured a much deeper grammar for language than we have ever envisioned. Let's also imagine we have a regularization process to distill this knowledge and discard the noise learned along with the signal. The problem is that we want to extract this representation, but the state is very complicated it has stuff from most linguistic theories as well as some constructs we never even came up with (like Alpha Go's strategies.) And all the 'stuff' is jumbled up into matrix which represents all these jointly using inscrutable embeddings.

What we want is to unscramble the state matrix into one populated with symbols for the constructs we already know about and perhaps a few extra god-symbols that perhaps we don't know about. 

A second paradigm is that we might not be able to unscramble this but, we might be able to query it and extract all the constructs up to a certain level.

Again it may well be the case that we will discover that the model under constraints of regularization will pick a rather small dimension of symbols for its semantic atoms and for its grammar and not require a massive grammar. I.e. we might end up with a rather smaller model then most we have been training. Where 99% of the data is the lexicon, but the lexicon might have a number of arbitrary looking genders which organize features from different levels.

We could try a number of approaches, one is to include in out model higher level nodes in out parse tree as nodes which we can recognize (NP for noun phrase) and we might have some more other constructs like frames for verbs and scripts for complex actions

## A fearful symmetry

We may even imagine a situation where we have separated the language into a number of constructs each with its hidden states and an emission matrix which converts the signal at the interface. Most signals get processed layer by layer but on occasion they might skip or cross. 

## How Can we explicitly process higher level construct 

As pointed earlier models that model sequences using a probabilistic grammar rather than looking just at sequences is going to capture a much richer view of language. 

There are a couple of reasons for this. Perhaps the more significant factor is the ability to capture much longer sequences which will expose the model to much richer wealth of signals. Grammar is typically represented using production rules which typically replace a symbol with two or more new symbols. These require moderately shorter sequences, and they also have a much lower cardinality for the symbols needed to represent the grammatical entities, at least when compared to the cardinality of the words in a language or its leading categories. For rich morphologies even more significantly. Which means that grammar should be learned much faster than a detailed lexicon. Since rules are so much shorter than sentences the grammar should be learned with significantly higher confidence at any given point. 