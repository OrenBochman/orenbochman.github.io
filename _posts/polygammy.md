---
type: post
tags:
keywords:
- embeddings
- polysemy
- homonyms
- disambiguation pages
- information architecture
- context-spliting algorithm
- data mining
- autohyponymy
- automeronymy
- autohyperonymy
- autoholonymy
- metonymy
- lemma
- Semantic shift
---

# Polygamy or why Polysemy should be taboo in word embeddings.


Mining wikipges

Suppose your model uses embedding but you wanted to create better embeddings. 

One common defect with embeddings is that they refer to multiple entities which have a shared representation AKA *[polysemy](https://en.wikipedia.org/wiki/Polysemy)*. Actually homonymy and homophony may also contribute to this defect.

One way to mitigate this is to identify the different word senses and assign to each a different entity. However the true word sense is a latent feature but more on this in a bit.

One way to do this is too look the word up in a dictionary and find all its word senses also homonyms will be listed though separately. For NE one is stumped but wikipedia offers disambiguation pages. 

In the age of embeddings (and before) a class of  algorithmic tools exist to identify and extract the different word senses. The gist of these is for each word hierarchial cluster the contexts into disjoint clusters and sub-clusters  as far as the signal allows. The unique parts of the cluster form the basis of the definition of the embedding. One problem is that you will have a single context at the leaf of the tree. A real challenge is that in polysemy most word senses and their corresponding contexts are rare and depend on the composition of the corpus. As such if the the corpus used is larger (which is what happens with deep learning) more and more nounced  shades of meaning will appear.



Note: a good algorithm should not only create an embedding for each be able to tell homonyms and polysemses apart. 

disambiguation pages.

## Semantic shift 

Semantic shift is the process in which a lemma' senses drift and no longer appear to be related and become homonyms. 

When we represent words as points in a high dimensional space and train our model to learn an embedding we want  similar words to be mapped into common neighborhoods. This is going to be much easier and require less dimensions if we isolate the word senses. 

Suppose we have a lemma which has number of meanings we can go back an assign to it a linear combination of the component embeddings, weighed by a prior distribution reflecting their prevalence of each sense in our corpus. Note that this would correspond to the centroid of the cluster of it's parts.

Suppose we have a homophone and a distribution of it's constituent contexts again we can create a homophone embedding. As to why would we do this? Perhaps we are in a search engine query query and do not have much context to go on. Again this would be a centroid for a much larger cluster. However this entity would not be placing undue constraints when training the embeddings.

## Semantic Atoms

Finally given that our embeddings are atomic we may be tempted to recode them using semantic atoms. These would be a minimal set of concepts from which we derive meaning. We could do this using something akin to PCA.

## Sparse Positive constraint for interpretability.

Another two ideas are:
generating the embedding with constraints of being sparse and positive.

Sparse embeddings means that the representation only uses a few dimension to support each concepts.

Positive embeddings is a representation that uses positive evidence only.


## Other embedding dimensions

suppose we have multiple modalities in our data e.g. (prose in n-lanaguage, audio in k-language, images and video.) And in our infinite wisdom we devise single embedding for this data allowing us to search it using similarity in a single space as proposed by in this video. We may well want to reserve  subspaces for each modalities and to have subspaces for groups of modalities. This would allow for separating the image of a dog from the sound of the word dog, video of a dog and text of a dog, but perhaps the most significant (say start of the embedding would be plain old dog.) 

Keeping such subspace should also allow a multi-head attention mechanism to make its own features using the evidence encoded in the subspaces.