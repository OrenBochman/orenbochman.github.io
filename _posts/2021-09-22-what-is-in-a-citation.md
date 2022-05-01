---
layout: post
title: What is in a citation?
date: 2021-08-29 00:00:00 +0300
description: Creating Citation Web Components
img: cover/reference.jpg
fig-caption: What is in a citation?
tags:
  - Citations
  - information science
  - scientific blogging
  - Web Components
  - lit
lastmod: 2022-05-01T05:57:10.099Z
---

TLDR 

I want Wikipedia style inline citations in my blog but without the massive headaches of templates. Being able to push a citation into wikidata and then cite with Qid or a DOI would be useful too.

[toc] 

# Requirements


Terminology:
1. counter:
    a global variable which is incremented to generate the number of a citation
1. inline citation which looks like: [[<sup>[1]</sup>]] or [(auth_title_year)]()
    1. a link to a reference
	1. the doi\qid\bibtex etc of a citation.
    1. a pop up on hover on the link with the citation
1. reference list containing:
    1. configuration for styling.
    1. optional access to an external bib.tex file.
	1. the full detailed text of the reference with:
       1. an icon for the citation type
       1. an icon for pdf
       1. an icon for open access etc.
       1. a link [^]() or a sequence ^ <sup>[a]() [b]() [c]()</sup> of links back up each citation for the reference using a letters.
1. label:
    1. generated token in the using the template:
        `${auth}_${title}_${year}`
        where:
        - auth is last name, of the first author 
        - title is first non stop word 
        - the label is the same for repeated use
1. id:
    1. generated token in the using the template:
        `${auth}_${title}_${year}_${counter}`
    1. the id is unique per location on the page.

Ideally, the reference list would be generated using a few simple template from a data structure.

The citation could hold the full citation or if the citations is already used before - just using the label

This is an anonymous citation reference

<sup id="cite_ref-1" class="reference">
	<a href="#cite_note-1">[1]</a>
</sup>

This is an named citation reference

`<sup id="cite_ref-kag_5-0" class="reference">
	<a href="#cite_note-kag-5">[5]</a>
</sup>`

These should be replaced with a markdown notation
but that is out of the current scope of the project. Primarily as I am using Jekyll which forces to use of kramdown and I am unlikely to replace it.

However specifying a bibtex file in the front matter might be of some interest too.


@]
which renders to:

`<ref-element cid="cite_note-kag-5">`


The reflist



# Resources

https://citationstyles.org/
https://peerj.com/articles/cs-214/?td=bl
https://citation.js.org/
https://github.com/ORCID/bibtexParseJs
https://github.com/ORCID


links:

inline citation links:
	should be numbered
	should have a unique anchor
	 to reference list entry
	should display popup of citation on hover.
reference list should link back to 


initial data structure 
eithe a  list of key values 
or a dictionary

`[ {id: citations_objext }] `

each citation has an id and a label
when we add a citation to list 

a more powerful data structure:

list of objects, , citations, 

    ` [
        {   label: 
            {
                ids : [ id1, id2, id3, ...],
                reference : object
            }
        }
    ]
    `

with the following logic for adding

    look for label in list, 
        if not found append id and reference.
        if found append id only.

citations:

	• citeseerx has a list of references for a publications
	• sematic scholar has classification of publications by impotance.


multiple lists:
    wikipedia allows the uses of multiple lists on a page
    the football article have notes and citation. It may be of interest to add an authority list that is more of an inspiration and not to inline these items in the text.

    - Notes - end notes 
    - Citations - inlined citation references 
    - Further Reading - uncited references in wikipedia this is often just a list of internal links
another matter - 
    it is possible to use these components for notes
