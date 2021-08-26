---
layout: post
title: Developing a wikipedia corpus.
date: 2021-04-10 00:00:00 +0300
description: Developing a wikipedia corpus.
img: dice-distribution.jpg 
fig-caption: # Add figcaption (optional)
tags: [modelling, game theory, incomplete information] 
---
# Wikipedia centric corpus for document summarization.

Christopher Manning's lecture on automated summarization implies that progress in this area came in no little part due development of better summarization datasets. Wikipedia offers a number of structural properties for extracting a summarization dataset.

## Single document summaries

1. Good and featured wikipedia articles as well as most longer articles begin with a lead section consisting of one or more paragraphs which summarize the article. This is followed by a section heading where the TOC is inserted.
1. Some articles on broad subject are written in summary style. In such a case serval of the articles section's will summarize the content of an article which it link in a hatnote. There 50,000 uses of this template. This type of article is often created by more experienced editors with greater chance of higher quality summaries.

>   ```wikitext
>   {{Main|subpage name}} 
>   ```
1. Wikipedia also has Plot summaries for books, movies and tv series. Some of these are very long dozens of paragraphs (which is generally considered improper), while others make use of just one or two paragraphs.
1. for plot summaries several 
1. Wikipedia has non-article pages and these often have a summaries as well. E.g. deletion discussion, admin election, arbitration decisions  etc are closed with a summary. Many policy pages use this page in a nutshell template. 
> ```wikitext
>   {{nutshell|The lead should identify the topic and summarize the body of the article with appropriate weight.}}
>   ```

## Multi document summaries

1. Some subject (Recent US presidents) have very rich coverage and are split into a large number of articles. These are often  suitable for inclusion into a multi-document summarization task.
1. IMDB and similar articles often contain additional summaries for the same work as well as a longer synopsis.
1. Wikipedia articles have version histories. Many articles evolve from a short draft to a full article. Content is added and removed as the document evolves. By comparing the many revisions it is possible using a simple heuristic or statistical criteria to pick snapshots that are rather different.
1.Some Wikipedia articles have templates referencing the same subject in Encyclopædia Britannica, and in particular older out of copyright editions. The same is true with respect to the Jewish Encyclopedia, which tends to contain shorter entries.


## Multiple language editions

In 2020 "MLSUM: The Multilingual Summarization Corpus"
In the age of multilingual embeddings it may be also interesting to capture this material across languages. The German edition for example frequently has better quality articles than the English ones. Though this is true in a more limited fashion for other languages. As far as I know there



At the heart of wikipedia are links and citations. 

## Leveraging the link structure. 

 In a wiki we could look at the set of documents with linking to and linked from the article and a eigenvector centrality algorithm like page rank or lex rank on word embeddings of their concepts at various levels. The output of this algorithm similar to td-idf provides a natural plan for the ideal summary (Ranking concept and their source sentences in clusters.) 

### Generating a plan for the summary.

This plan for a summary can be modified into a probability distribution on a the subset of salient concepts. As the summary is generated concepts already included in the  generated are removed and the distribution is renormalized.

The generation of the summary proceeds using a modified beam search using a bayesian sampling a combination (perhaps simply a product) of the model distribution and the summary plan distribution. Though to avoid overriding the model's capability it might be wise to make the plan more of a gentle nudge perhaps drawing a couple of related concepts and boosting them.

We then need to generate a summary with a certain length covering the key concepts in the most important sentence. We can generate this using an attention mechanism on a language model say GPT3, BERT or T5. Mining the model using a beam search with a bias towards the We could use these terms as queries,  with the document as  a model run a modified beam search which.

One caveat is that the choice of links on a page and in the summary is often is lacking, both in compliance to wikipedia policies, and perhaps more significant in terms of *saliency*. Novice editors are instructed to *'wikify'* their text by introducing links in the text. Later they are told not to do this for more than three concepts per sentence. However since most people link to broad familiar concepts  This is a recipe is pretty much a preferential attachment mechanism which is generates a scale free network and corresponds to the  [Barabási–Albert model](https://en.wikipedia.org/wiki/Barab%C3%A1si%E2%80%93Albert_model). The main feature of these models is the existence of hubs. 

The bias towards broad familiar concepts mean that often more useful links are missing. I wont go into details but consider that for the average reader each link is both a potential distraction and a shortcut to a precise understanding an unfamiliar concept which may  may be unclear from the immediate context. 

Ideally a centrality metric fr concepts should consider all concept and more practically all concepts covered or [mentioned](https://en.wikipedia.org/wiki/Wikipedia:Red_link) in wiki. As there are millions or articles a sensible economy is to consider subsets.  

There are idealy one should provide links to  

One thought is that establishing links and backlists may have a large though subtle impact on wiki. 

## Leveraging citations
Some thoughts on Links and citations


## Tasks:

1. manually identify the summary hatnote template in different languages for leading language editions.
1. extract summaries used in summary style articles using the hat-note templates and the next title markup.
1. extract Leads from features and good articles.
1. extract *good* leads for all articles with x articles and y sections.
1. Lead baselines
    1. model lead size as function of article length.
    1. lead coverage tools.
1. a heat maps for
    1. tf-idf ranking of concepts.
    1. concept saliency.
    1. MMF margin mutual information for each sentence (with section title as query?)
    1. MMF for lead sentences.
    1. other coverage metrics.
1. eigen-vector centrality for:
    1. link saliency in context 
    1. category saliency



The quality of summaries however varies. 
- One common issue is that inexperienced editors may add new content to the end of the summery. This will create a highly unbalanced summary. However imbalance is a common issue in wikipedia articles.
- Another issue is that most summaries begin with a template sentence that sets the context in a way that I feel is often stolid and could be improved. It would seem that this material might be better integrated into the article and summary in a more creative format. 

Their quality can be readily assessed using a number of tools and will be discussed in 

1. get a wikipedia to the dump
2. identify the template for 


Attention tool

given two version of an article (from two languages):
1. perform alignment between the two version.
    - just the section titles
    - just the links
    - at the word level
    - sentence.
    - paragraph
2. a ui that shows this alignment
    - trace like matrix
    - place section by section side by side (left/right)
    - heat map on sentences with a good alignment to another sentence on the other side.
    - extra heat for concepts
    - extra heat for word
    - extra heat for links
    - color code for material that is in just one version.
3. extend for additional version
4. summarize visualization in clickable minimap.
5. report with.
    1. summary for content shared in all languages.
    1. summary for content unique to a subset.
This report can be used as a ground truth for estimating cultural bias with the caveat that the missing info is missing due to a bias and not because the article is incomplete.

## References

* [Lead paragraph](https://en.wikipedia.org/wiki/Lead_paragraph)
* [Summary style](https://en.wikipedia.org/wiki/Wikipedia:Summary_style)
* [Lead section](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Lead_section)
* [long pages](https://en.wikipedia.org/wiki/Special:LongPages)
* [Mentions](https://en.wikipedia.org/wiki/Wikipedia:Red_link)