---
layout: post
title: Thematic Roles Systems
description: Knowledge based AI note on Primitive Actions.
img:  KBAI-overview.png
date: 2021-04-08 00:00:00 +0300
img: cover/nlp-brain-wordcloud.jpg
fig-caption: Knowledge Based AI - Thematic Roles Systems 
tags: [modelling, artificial intelligence, AI] 
---

Thematic Roles Systems were introduces by the Indian	grammarian Panini between the 7th and 4th centuries BCE. The modern	formulation	is due to Professor Charles Fillmore (1966,1968). 

Thematic roles are semantic labels for representing sentences as frames based on the verb and its complements. They alow us to understand that a sentences

> "Alice sold a car to Bob" [1] 
> "Bob bought a car from Alice" [2]

are semantically equivalent.

# Thematic Roles System

The Thematic Roles System is a structured knowledge representation scheme for natural language based on frames. If one can query the frame and get accurate answers than we can claim to represent and even understand a sentence.


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

## The big picture

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

### Thematic Role Definition

AGENT
: The volitional causer of an event.
  @[+animate]@
  
  >The *waiter* spilled the soup.

  > *Alice* smashed the waiter on the head.

  > *Bob* killed the lobster



BENEFICIARY 
: The entity that benefits from the event.

CAUSE
: Entity that produces or causes another entity to exist .
@[-animate]@

CREATION
: The entity produced by a creator


CONTENT 
: The proposition or content of a propositional event.

EXPERIENCER 
: The experiencer of an event.
  > *Alice* has a headache."
  > *Alice* loves Bob
  > *Alice* objects to this line of questioning.
  > *Alice* annoys Bob.

FORCE 
: The non-volitional causer of the event
  > "*The wind* blows debris from the mall into our yards."

GOAL 
: The destination of an object of a transfer event.

INSTRUMENT 
: The medium by which the action in the event is carried out.

LOCATIVE
: The specification of the place where the event is situated.

PATIENT
: the underegoer of the event
  @[+animate]@

RESULT 
: The end product of an event that is not a creation.

SOURCE 
: The origin of the object of a transfer event.

THEME
: The participant most directly affected by an event.

USER
: Entity that employs an instrument to perform an action

note  that this "typical" set is different to the one depicted in the picture.

## FrameNet

## Alternation

some verbs can be put into 




Alternation is a property of some verbs that can.

## Challenges:

1. Hard to define a standard set of roles for annotation and processing.
1. roles may need to be fragmented say by splitting or combining by subcategorization constraints.


> The cook opened the jar with the new gadget
> The new gadget opened the jar

> Alice ate the sliced banana with a fork
> @*@ The fork ae the sliced banana

# References

- [Introducing Transformational Grammar (J. Ouhalla 1999)] 
- [Aspects of the theory of syntax (Chomsky N. 1965)]
- [SRL slides](https://web.stanford.edu/~jurafsky/slp3/slides/22_SRL.pdf) (Jurafsky)
- [Verbnet](https://verbs.colorado.edu/verbnet/)
- Professor Charles Fillmore's [Framenet](https://framenet.icsi.berkeley.edu/fndrupal/) has more roles
- [PropBank]() has fewer roles
- [Framenet annotation  manual](https://framenet2.icsi.berkeley.edu/docs/r1.7/book.pdf)
- [framenet via NLTK](http://www.nltk.org/howto/framenet.html)
- http://www.jfsowa.com/ontology/thematic.htm
- [The Syntax-Semantics Interface: Semantic Roles and Syntactic Arguments]() (Levin and Rappaport Hovav 2015)

<hr>

 [Introducing Transformational Grammar (J. Ouhalla 1999)]: 
 (https://www.amazon.com/Introducing-Transformational-Grammar-Principles-Parameters/dp/0340740361) (J. Ouhalla 1999)

 [Aspects of the theory of syntax (Chomsky N. 1965)]: (https://en.wikipedia.org/wiki/Aspects_of_the_Theory_of_Syntax)