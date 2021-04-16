---
layout: post
title: Primitive Actions Ontology
description: Knowledge based AI note on Primitive Actions.
img:  KBAI-overview.png
date: 2021-04-17 00:00:00 +0300
img: event-questions.jpg 
fig-caption: Knowledge Based AI
tags: [modelling, artificial intelligence, AI] 
---

# Primitive Actions


Note based Common Sense reasoning from lesson 15 of the Udacity course Cognitive Agents 

**Primitive Actions** were proposed by *Roger Shank*  in [The Primitive ACTs of Conceptual Dependency] circa 1972-5. These were supposed to represent statements in everyday discourse. Shank decided these on these by noting similarities of sentence placed into an actor-action-object framework.

for example: 

> "John took the book from Mary"

| Action Frame  |   Value        |
|:-------------:|:--------------:|
| **primitive** | move-possession|
| **agent**     | John           |
| **source**    | Marry          |
| **object**    | Book           |

## The Primitive Actions 

- move-body-part
- move-object 
- move-possession (transfer-ownership)
- move-concept (communicate)
- expel
- ingest
- propel
- see
- speak
- hear
- feel
- smell
- think-about
- conclude

## Processing

    1. step over the words in a sentence
        if the word is a verb :
            use a similarity between the verb embedding and the 
            primitive actions to retrieve the closest frame
        else:
            store the word
    2. for each open slot in the frame
        assign the closest concept that fits according to:
            - syntax constraints.
            - lexical constraints.
            - semantic constraints.
            
example:

> "John pushed the cart"

| Action Frame  |   Value        | Constraints            |
|--------------:|:--------------:|:-----------------------|
|**primitive**: | propel         |                        |
|    **agent**: | John           | +animate, left of verb |
|  **object** : | the cart       | +inanimate, right of the verb  |

> "Bill shot Bob"

rewritten as 
> Bill propelled a bullet into Bob.

| Action Frame  |   Value        |  Constraint            |
|--------------:|:--------------:|:-----------------------|
| **primitive**:| propel         |                        |
| agent:        | Bill           | +animate               |
| object:       | bullet         | +inanaimate            |
| destination:  | Bob            | "into"                 |

in this case:

Actions often imply an implicit state change and a cause and effect relations. We can also capture the outcome in a state change frame:

> "Robbie enjoyed putting the wedge on the red block

| Action frame     |   Value        |                        |
|-----------------:|:---------------|:-----------------------|
|**primitive**:    | move-object    |                        |
|agent:            | Robbie         |                        |
|object:           | Wedge          |                        |
|destination:      | block          |                        |
|result-link:      | RF1            |                        |


| State-change frame  |   Value        |                        |
|--------------------:|:--------------:|:-----------------------|
| **id**:             | RF1            |                        |
| **object**:         | Robbie mood    |                        |
| **destination**:    | happy          |                        |

This looks like this might be a great job for an attention mechanism. We can try to learn using say 14 heads to specialize so as to match different parts of the sentence into each slot in the frame, then we would pick the best match as the frame. This may be even more powerful when looking at complex sentences where getting a full set of constraints would be more difficulty to encode manually.

> "John fertilized the field"
is difficult to encode but

> "John put fertilizer on the field"

| Action Frame  |   Value        | Constraints            |
|:-------------:|:--------------:|:-----------------------|
| **primitive** | put            |                        |
| **agent**     | John           | +animate, left of verb |
| **object**    | the cart       | +inanimate, right of the verb  |

## Advantages 

The main advantage of using this ontology is that it greatly reduces the complexity of expressing actions in normal language:

- The unstructured sentence becomes a structured frame and if needed a frame graph.
- The open category of verb is mapped to a smaller quotient space of 14 verbs equivalency groups.
- It is easier to reason about the *primitive verb*.
- Can be viewed as an **embedding**.
- The *primitive verbs* are naturally extended using a context slots which allow many more meaning.
- Can bed used to construct meaning of complex verb but allow analogy and common sense reasoning.

## Disadvantages 

- A number of these seem to fall under sense, could we use less and retain the power of this method.
- Other verb groups might be interesting
- How do we encode I love some one or I make something?
- Non English verbs - would the choice of primitive actions change if we change language. I hazarded a guess that It should not.

## Ontologies

Primitive action can be viewed as a precursor to more modern *Top Level Ontologies* or TLOs. A TLO is classified as generic if it avoid a choice of modeling concepts as entities or attributes. More generally generic mean avoiding commitments to a specific data model.[UML](), [Topic Maps](https://en.wikipedia.org/wiki/Topic_map) and [Schema.org](Schema.org)  are examples of generic ontologies. A consequence of an ontology being generic is a weaker mapping from the domain to the real world. I think there is much to be said on TLO's for deep learning applications but this will have to wait to a future post. For now I point you to a link a survey in the references section.

My view of an ontology like primitive actions is that it induces a *topology* on the information. 
A *rough topology* has fewer opportunity for concepts to be separated then a finer one but may be better at clustering. Being able to cluster related concepts is key when it comes to being able to generalize, particularly for NLP.

While Primitive actions is a top level (rough) ontology it can be further clustered as follows:

- primitive action
  - move
    - body part
        - kick
        - punch
        - slap
        - wink 
    - whole (transfer)
        - drive        
    - possession 
        - give
        - gift
        - offer
    - concept 
        - communicate
    - propel (move away)
    - ingest (move in)
    - expel (move out)
  - sense
    - see
    - hear
    - feel
    - smell
    - speak
  - think
    - think-about
    - conclude

Where the sense of move may be inferred from the object 

When encoding sentences using using primitive action some cases are very intuitive while others require transforming the sentence  to fit within the 14 primitive action frame works.



## Further work.

1. Is there an annotated corpus using this ontology?

Using DNN a embeddings on many sentences what embeddings would the net pick. Would the representatives be like ours or different. 

Would dimension reduction on verbs results in this ontology arising - if not would such an ontology be more useful?

ie. would it use these primitives or go for quite different ones.

For a continuous learning paradigm one may try an algorithm which balances between exploration and exploitation in building an ontology of learned relation with dual goal of 
1. covering and separating many different concepts
1. understanding how these generalize to a few abstract concepts.
1. model a pooling posterior encoding shared knowledge.

<hr>

## Using puns

Puns are often examples of ambiguity. They are rather more memorable than many other examples.

>I was wondering why the ball was getting bigger and then it *hit* me

>Two men walk into a *bar*, the third one ducks

>Its hard to explain jokes to kleptomaniacs because they always *take things literally*.

>Time flies like an arrow, fruit flies like a banana*.

![Thematic Roles](/assets/KBAI-thematic-roles.png)

# References

- [The Primitive ACTs of Conceptual Dependency] (Roger Shank)retrieved 13th of July 2017.
- Winston, P. (1993). Artificial Intelligence (3rd ed.). Addision-Wesley.
- [Primitive action](https://computersciencewiki.org/index.php/Primitive_action)

[The Primitive ACTs of Conceptual Dependency]: https://www.aclweb.org/anthology/T75-2008 (retrieved 13th of July.)

- [Crowdsourcing a Parallel Corpus for
Conceptual Analysis of Natural Language](https://www.aaai.org/ocs/index.php/HCOMP/HCOMP17/paper/viewFile/15924/15270) (Jamie C. Macbeth, Sandra Grandic 2017)

- [A survey of Top-Level Ontologies](https://www.cdbb.cam.ac.uk/files/a_survey_of_top-level_ontologies_lowres.pdf)