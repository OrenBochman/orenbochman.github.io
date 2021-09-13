---
layout: post
title: Review of 'Language Models Are Open Knowledge Graphs'
description: review of the paper "Language Models Are Open Knowledge Graphs" 
date: 202-08-11 10:50:09.040Z
categories: nlp paper
tags:
   - language models
   - deep learning
   - data mining
   - paper
   - NLP
img: cover/literature-review-open-book.jpg
lastmod: 2021-04-07T13:24:37.743Z
---



<style>
hr { 	clear:both;  }
img[src*='#sl'] { 
  float: right; 
  width:35%; 
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
![deeplearning.ai](/assets/logos/logo_deeplearning.ai.png#logo)

In brief this is a fascinating subject and my interest are practical. I made a quick list of tasks that are my context for looking at what is going on in this paper.

# TLDR
Language Models are Open Knowledge Graphs Chenguang Wang, Xiao Liu, Dawn Song arXiv:2010.11967
# Link
This article main point is that Language Models like BERT can help us mine data from a corpus by using its top attention scores to construct a knowledge graph from pairs of NP (Noun phrases) one finds using Spacy. We then have to turn to traditional tools to try to map extracted triplet. Sadly the paper fails to makes an effort to justify the claim in its title that the Neural Language Models are indeed Knowledge graphs and that we could somehow mine and query them.

# Are NLM Open Graphs ?

It seems to me that a large capacity of big NLM is going to learn the semistructured data we have in knowledge graph. There is a problem is the way we train these models today using embeddings that leaves a lot to be desired when one wants to retrieve informations. The model learns linguistics, the lexicon and it can hardly tell the lexicon apart from named entities and their relations and it will learn common sense knowledge and more specialized relations that we associate with open knowledge graph. 

But since we train it using primarily Lexemes, when we query it we get them back. If we used embeddings of word senses we might get those back, and if our embeddings had properties and relations aligned with an ontologies we should expect to get as well. I mention this because they all fit rather snugly in a high dimensional vector spaces that houses Lexemes. Using word senses rather than lexemes is a kin to picking orthonormal basis rather than using a spanning set as support for a vector space. And since we can express relations and entities using the same semantics as words they have fairly well defined locations in that vector space.

# A couple of takeaways

The first Task might be the easiest:

##  Cross language completion Task:

Most wikidata entries are missing translation of entries in non latin scripts. Given a good cross language embedding it should be possible to map know entities across language barriers and find high confidence candidates for the missing non latin scripts. 

Generating an open knowledge graph for common sense knowledge (similar to cyc was about) - This requires an generating both an ontology and facts.

A large  language model would acquire both a representation of frequent entities and common relations. It should also learn to identify triplets using and more so if hints are provided. (Particularly a model like BERT  whose training include prediction of multiple erased locations of a plaintext. 

## Wikidata Task:
Generating open knowledge graphs for like wikidata. This is an ontology and facts that could be used to cross language barriers, that when collected would appear in infoboxes to provide a structured view of similar entities and that maps entities to canonical links. 

## Lexicon generation Task:
Generating human/machine readable lexicons based on lexical relations. Using an linguistic ontology and examples extracted from dbpedia from wiktionary.

## Analogy task:
Propose triplets for uncommon articles based on analogous entries on articles from the same category. e.g. Birthdate, and parents names from Biographies. More formally:
Given a @ENTITY_1  \quad Rel  \quad NP_i@  from article on ENTITY_1 find @ENTITY_2 Rel NP_j@ in article on ENTITY_2.

The algorithm works by extracting NP and analyzing attention matrices under  constraints (masking look back and look ahead). The paper considers different layers but got good results for the final layer. That is probably because they are using the output embedding layer rather than looking at specific features which should be highly nonlinear and should fail for most cases. In fact recent research on attention heads indicates that most attention heads can be ignored 

Other approaches to mine the model might be to:

predict using "@NP_1 BLANK \times N NP_2@" as input and collect predictions.
rank using
@\alpha \times probability(Relation) + \beta \times alignment score \gamma \times map score@. 
give the "BLANK relation BLANK"as input and collect predictions. keep high then try to map the entities.
fine tune with wikidata triplets + masking.
The analogy task uses embeddings which have an algebraic structure so that @NP1 - NP2 \approx RELATION@ so if we average via
@ \hat R = \sum_{i=0}^{N} \frac{1}{N}\times (NP_1 - NP_2)  @
for a known relation we should be able to use it to go either way by adding to or by subtracting from a noun phrase. To get the result one needs to find the nearest neighbor in the embeddings. We can also query BERT with the whole sentence and check if it likes it or not.
rank using
@\alpha \times probability(Relation) + \beta \times alignment score \gamma \times map score@.  
This should have an advantage that this is a fact retrieved by BERT from its memory rather than extracted from a text.
as well as more general features that would allow it both identify them via a context and to capture  and contain features corresponding to both the tra still



Now the paper also discusses exploring new entities and relations. This reminded me on a quite different task focused on inducting morphology from a corpus based on nested extraction of templates. The point being is that a metric was used based on how well the model could compress the texts. In this case one might then score a 

New Entities and Relations Task:

Find entities in new classes, find new relations for new and old classes. We would score on these on the text by cross entropy for generating the text from the triplets less the total amount of relations and entities. I.e. this is a compression metric. Also saliency is of interest - we should like to separate salient entities and relations from common sense ones and from linguistics ones. (Perhaps with another classifier to tag their tensors).



Here is an experiment that would be interesting to do:

## Model Compression task:

Some people believe that a language model should specialize on the lexicon, morphology, grammar and pragmatics and that commonsense knowledge and a knowledge graph should be kept in separate units of intelligence. This is both because for a given capacity focusing on linguistics should give more performance than also storing a big database of facts and also we know that neural nets are not effective as databases.

There are techniques to compress models, essentially destroy/saturate neurons and retrain for an epoch. It should be fascinating to to try to find if instances of an entity exists (The Beatles, The Rolling Stones) in different neurons and then to remove all or almost all of them and retrain the network. More likely though one might use a pretrained model and specialize on the corpus with a procedure that more frequently replaces NP with blanks, class tags, entity tags, and relations with ontological tags. (Wikidata uses P[0-9]+ and Q[0-9]+ so training with these might bootstrap an ontological representation and align it with  the network and  let it organize using an representation which aligns with the given ontology.

I'd also be interested in erasing as much of the first two from a language model while retaining a merged entity for the class to canonize the main relations that occur frequently supports an article. generation, bots to insert new data into the knowledge graph, translating knowledge graphs (mapping entities from non top 5 wikipedia's based on  english), dropping knowledge graph data