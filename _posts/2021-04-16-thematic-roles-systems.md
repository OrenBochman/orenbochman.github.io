---
layout: post
title: Thematic Roles Systems
description: Knowledge based AI note on Primitive Actions.
img:  KBAI-overview.png
date: 2021-04-16 00:00:00 +0300
img: nlp-brain-wordcloud.jpg
fig-caption: Knowledge Based AI - Thematic Roles Systems 
tags: [modelling, artificial intelligence, AI] 
---

Thematic Roles Systems were introduces by the Indian	grammarian Panini between the 7th and 4th centuries BCE. The modern	formulation	is due to Fillmore (1966,1968).

# Thematic Roles System

The thematic Roles System is a structured knowledge representation scheme for natural language based on frames. If one can query the frame and get accurate answers than we can claim to represent and even understand a sentence.


> Alice made tea for Bob with a kettle

<div class="mermaid">
erDiagram    
    Thematic-Role-Frame {
    verb make
    agent Alice
    beneficiary Bob
    thematic-object tea
    instrument kettle
    }
</div>

- what was made ?           @ \to @ thematic object @ \to @  tea
- who made it ?             @ \to @ agent           @ \to @  Alice
- with what was it made ?   @ \to @ instrument      @ \to @  kettle
- for whom was it made ?    @ \to @ beneficiary     @ \to @  Bob
where the **agent** corresponds to the question "who ate the pancake?"

> Alice went to the meeting with Bob by taxi.

<div class="mermaid">
erDiagram
    
    Thematic-Role-Frame {
    Verb go
    Agent Alice
    Coagent Bob
    Destination meeting
    Conveyance taxi
    }
</div>

## Constraints 

Thematic roles are established using constraints. Each verb has a fairly limited number of templates corresponding to which thematic roles can appear and at which position.
Prepositions limit a noun phrase role's possibilities.

* by - @agent \vert conveyance \vert location @
* with - @ coagent \vert instrument @
* for - @ beneficiary \vert duration @
* from - @ source @
* to - @ detonation @

Note that these theta roles are semantic categories. we will 

Grammar and the lexicon impose further restrictions on roles 

{% include figure.html 
image_path="https://upload.wikimedia.org/wikipedia/commons/8/86/Aspects_Grammar_Model.jpg"  
alt="The grammar model discussed in Noam Chomsky's Aspects of the Theory of Syntax (1965)." 
class="image-small image-centre" 
caption='**Aspects of the Theory of Syntax** grammar model (Chomsky 1965)'
credit="[Zaheen](https://commons.wikimedia.org/wiki/User:Zaheen)" %}

### Subcategorization restriction

What is a Subcategorization restriction? 

Category here refers to part of speech categories. Subcategorization means that groups of verbs share behavior.Restriction  refers to avoiding over generation by a generative grammar of ungrammatical sentences. [Aspects of the theory of syntax (Chomsky N. 1965)]

For example transitive verbs 

They are constraints on the syntactical production rules which restrict the a generative grammar to exclude ungrammatical sentences. C.f. §3.2 in [Introducing Transformational Grammar] these are defined as:

> For a verb, does it take a complement ? If so, what type of complement?

Here are some frames for verbs. These are more like tuples than ai frames 

* kick @[V; -NP]@
* cry @[V; -]@
* rely @[V; -PP]@
* put @[V; -NP \space PP]@
* think @[V; -S']@

e.g. kick is *transitive* and requires a **NP** complement or in terms of production kick may only be inserted in a verb phrase in which it also has a sister. 

However subcategorization restriction are not sufficent to ensure a generative grammar produces only grammatical sentences.

### Selectional restrictions 

c.f. §3.3 in [Introducing Transformational Grammar]

For verbs and other categories on features like @\lbrace \pm abstract \rbrace@ or @ \lbrace \pm animate \rbrace@

{% include figure.html 
image_path="/assets/KBAI-thematic-roles.svg"
alt="Thematic Roles" 
class="image-small image-centre" 
caption='Thematic Roles Illustrated' %}


<div class="mermaid">
erDiagram
    Thematic-Role-Frame {
    Verb value
    Agent value
    Coagent value
    Beneficiary value
    Thematic-object value
    Instrument value
    Source value
    Destination value
    Old-Surrounding value
    New-Surrounding value
    Conveyance value
    Trajectory value
    Time value
    Location value
    Duration value    
    }
</div>

##Thematic Role Definition

AGENT
: The volitional causer of an event.

EXPERIENCER 
: The experiencer of an event.

FORCE 
: The non-volitional causer of the event

THEME 
: The participant most directly affected by an event

RESULT 
: The end product of an event

CONTENT 
: The proposition or content of a propositional event

INSTRUMENT 
: An instrument used in an event

BENEFICIARY 
: The beneficiary of an event

SOURCE 
: The origin of the object of a transfer event

GOAL 
: The destination of an object of a transfer event


## Alternation
verbnet

# References

- [Introducing Transformational Grammar (J. Ouhalla 1999)] 
- [Aspects of the theory of syntax (Chomsky N. 1965)]
- https://web.stanford.edu/~jurafsky/slp3/slides/22_SRL.pdf
- verbnet
- framenet

 [Introducing Transformational Grammar (J. Ouhalla 1999)]: 
 (https://www.amazon.com/Introducing-Transformational-Grammar-Principles-Parameters/dp/0340740361) (J. Ouhalla 1999)

 [Aspects of the theory of syntax (Chomsky N. 1965)]: (https://en.wikipedia.org/wiki/Aspects_of_the_Theory_of_Syntax)