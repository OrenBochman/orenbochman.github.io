---
layout: post
title: Inlining Citations for Wikipedia articles
date: 2021-08-13 00:00:00 +0300
description: An algorithm for Inlining Citations for Wikipedia articles.
img: cover/neural-network.png
fig-caption: # Add figcaption (optional)
tags: [modelling, chat bot, wikipedia, support] 
---


One of the problems with AI is that what is called inference is usually prediction and not the deeper logic ability we associate with aristotle's syllogism. Modern test for general intelligence also look at coreference resolution and some other abilities that indicate that the model has learned a good representation of the text. The problem with large language models testing on small data sets is that they learn to cheat. This is a different problem from overfitting what happens is that the model learn to defeat the weakness in the dataset rather than addressing the real problem. It does not help that researchers often help it (perhaps even inadvertently).

Here is an interesting idea find task that are indicative of general intelligence or at least of understanding of non atomic concepts like complex relations, logical inference where multiple deductions may be required to make an inference. And so on. This essentially is going to force the AI to learn multiple level of abstractions.

Some challenges with setting up a challenge at multiple levels of abstraction is that for the lower level like free text we have lots of data but for more abstract we have orders of magnitude less. One reason why your run of the mill language model can't do complex reasoning is that it is learning to fill certain gaps in a text but these gaps only require short and rather simple contexts. If the completions were harder it would be have to learn more complex representations and abstractions. Such a model I'd presume have the added benefit of learning to economizing on the  use of simpler abstractions. Finally if we had concrete entities we are considering at different levels than we may be able to explore visualize how they are captured by the model. (Are there neurons specializing in entities or relations at certain levels of abstractions.)

One approach that I find incredibly attractive is to create a synthetic dataset for this. Creating an extensive syllogism and logical deduction seems of interest particularly as there are few of these in most text. Also this type of thinking is rather limited. First order logic adds to predicate calculus the universal and existential quantifiers and as such seems to deal with absolutes. But absolutes are limiting. You will find few statements of this form in text. When people make use of them they are easily refuted. On the other hand if we are compiling an ontology we easily come across a myriad of such statements but they seem to a human rather trivial - more a fact or definition rather than a high level of abstraction one can use in a deduction. 

On the other hand certain types of writing does seem to have more of this - Scientific writing. Perhaps am advantage is that most of it is structured in such a way that there is a section on conclusions. However even encyclopedia articles tend to exhibit more logical deduction that regular texts.



Another is to look at what humans consider as challenging tasks. One of these has to do with inlining citations. One advantage is that this can be a challenging task. While it is a big challenge it seems to be a problem one could tackle with data mining and IR tools. On the other hand if one wanted to make an AI that quickly learns higher abstractions - these may well be of some interest too. The fact that it can be solved with an data mining and IR tools and that there is plenty of data available indicates that datasets can be built.

: make a model that learns to recommends and inline citations in a text based on pre-existing texts. 

Data :

1. wikipedia articles.
2. citation databases + graphs
3. scientific literature.

# Task

Given a list of citations at the end of an document indicate:
1. Which part of the document is supported by which citation.
2. Which parts of the document are not supported by citations.
3. For the  unsupported sections check if they are an argument or a conclusion based on the currently cited sources. (Like conference resolution).
4. Identify orphan citations and move them to the authorities list (e.g. related links).

And while this blog post discusses wikipedia articles. This type of problems can be seen in many reference works which make terse listing of citations after an article..

# Motivation

'Featured' and  'Good' Wikipedia articles are required to make use of inline citations. In recent years there is a growing requirement to source every sentence in such an article in a hidden comment if an inline citation is not included on the sentence.

Wikipedia editors however are given full artistic licence when it comes to including citations in their articles - so long as they do. Without citations the document may be deleted. 

However, listing citations at the end is clearly inferior to having the list inlined and in such a case the article will get a warning box lamenting this short coming and requesting editors to try and fix this. Also it will not become a good or a featured article until the issue is fixed.

My experience in editing such articles as well as academic papers is that it is very easy to inline your citations while you are researching/writing the article. This is because as you note an idea you can quickly find or better yet recall whence it came from (by a google search or by checking related papers). 

The reverse task of inlining citations listed chronologically or alphabetically into an existing text can be extremely challenging particularly when the list is fairly long. Even if the citations are listed in the order they appear in the text it is still difficult. Some ideas need a single reference while other may require multiple citations. Also some sources may be drawn upon several times in the same document. if the source is because it is not even just a one to one mapping.

I would hazard this notion - that once the list of citations at the end is long enough it is easier to rewrite the article from scratch than to inline he citations - unless the author is so familier with these that he can do it from memory.

I have considered writing a program to match citations with the source using IR methods. If we were so luck to have a Memmex (as envisioned by Venver Bush) we might create a specialized search routine to query each section or sentence on the subset of cited articles in the Memmex. In reality many sources are not available online. Some my only have there have their abstract listed in a database. Some sources may just have the metadata listed. Others which are may be behind paywalls. Others may only be found in an internet archive. So it is not a case of conducting a search, the program may need to try and find the article.

this type of reverse search engine is unlikely to do very well unless the citations contain within them the the target sentences mentioned. Even a layman's summary is going to be challenging to make use of.

# What has changed.

1. Machine learning techniques have become available in NLP that can perform question answering tasks.
2. Large number of citations have been uploaded to wikidata. 
3. Attention is used in models to learn to predict how to to align related text in different documents.
4. WordToVec and related algorithms can model text and its context based on sufficient examples.

It is conceivable to use several tricks to create a ml model to inline citations.

It could be "asked" to consider an full-text, an abstract, metadata, a citation graph and the existing context of the citations if found inline in other locations. If we consider a citations as a tuple of contexts (authors, journal, year, keywords, abstracts) each of which can be used to pool information. which we may expand with other meta data like section headings, layman's summary etc

## word2vec

An algorithm to create an embeddings for a word given its context. 

where we use 

context_left word context_right

where the context is bounded by a window using a hyper parameter.

## cite2vec

An algorithm to create an embeddings for citations based on its context.

Here we would have 

context_left il-citation context_right

which could be viewed as

context_left <journal, domain, authors, institutions, doi, abstract, keywords, year, page, section, line, ...> context_right

also we might expand using other features like reference-graph, headings, f-index, etc ... > 

## Multilevel approach to citations

It is always great to have a baseline model to check against and one could do worse than a naive bayes classifier (assuming independence of citation features) or full and partial pooling between these features using multilevel modeling.

Why naive bayes and not a large regression model ? It might arise that the number of features levels might exceed the number of rows. This would be highly problematic if least squares is used to optimise the model as is typically the case with regressions. 

## citeAligner

once we have embeddings we can learn to align these with the text using an attention based model using an encoder/decoder. 


# further ideas:

It should also be possible to suggest citations for an article without citations.

The model would be trained on a large data set built by removing inline citations and supervised based on the location.

# Algorithmic sketch 

1. Use embeddings to place the citations in the same vector space as words (we refer to words loosely to include named entities/wikidata items, and links and external authorities)
2. This would allow vector space methods and manifold learning to be used. One such tool is to find the distance of each citations for a bag of words (window of embeddings) or for an n-gram (ordered embeddings).
3. This search (ranking a moving window of text for best citation) can be accelerated by using location based hashing on the list of citations in the list.
4. Instead of scanning the text using a moving window it may be possible to use a NLP alg to chunk the text. This should improve precision and or recall. However, as parsing is likely to be an also an expensive operation a light weight chunker should be used. This could also be trained on the corpus of inline citations. However a baseline chunker might be used based on stats from the same corpus or the step might be omitted entirely.

# Infrastructure:

The cite2vec project seems to relate to what could be an considered independent projects of for larger applications:

## Large scale embeddings project:

Generating embeddings from wikipedia and wikidata. Here items would encompass, links, named entities, categories, references to wikidata items, lists & info-boxes, wikidata items and media such as images from commons or held locally. 

## Named Entity classifier

This is a second tool to automate named entity etc classification based on the embeddings.

## Dataset Generator AKA DataMiner tool.

This should be be a set of simple python code to extract datasets from a wiki instance, from federated wikidata projects. The generator could be a file for downstream use or a small foot print generator to be used in an directly in training models. 

Ideally it should be easy to extend by the scientific community and be put on an instance with its own cloud infrastructure (though access to spot instances might make sense)

### Filters mentioned above:
- Articles in categories.
- Links in articles.
- Named entities in articles.
- Images & their Metadata .
- Regex.
- Wikidata parent.
- Metadata in image.
- Chat pages / conversations / etc.
- Policy pages.
- Other namespaces.
- Revision.
    - Human
    - Bots
- Deleted data.
- Meta data on edits (SNA or edits summaries times etc).
- Page readership stats.
- Wikipedia editors
    - Bot editors
- External links
    - Good links
    - Dead links
    - From online databases 
        - With DOI
- Code
    - Templates and their metadata
    - Lua modules

### Other algorithms and models

Beside generating items it might be useful to provide the output of  some algorithms and some pre-trained models for based on the output of the dataset or on some specific datasets. These could then be integrated in downstream project with significant saving or time cost and energy.

1. embeddings e.g. word2vec
1. ranking e.g. page rank.


 Note tool should be coded as to not be limited to media wiki projects as we know that wikis tend to have massive knowledge gaps. 
 
 If the corpus tools can reconcile using external authorities, it should be possible to estimate scope of gaps and provide linked data to missing items from outside media wiki. This is a concept that might also reduce bias by increasing diversity.

