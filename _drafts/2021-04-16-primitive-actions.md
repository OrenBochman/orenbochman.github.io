---
title: Primitive Actions Ontology

---
# Primitive Actions

Note based lesson 15 of the Udacity course Cognitive Agents 

**Primitive Actions** were proposed by *Roger Shank*  in [The Primitive ACTs of Conceptual Dependency] circa 1975. These were supposed to represent statements in everyday discourse. Shank decided these by noting similarities of sentence placed into an actor-action-object framework.

for example: 

> "John took the book from Mary"

| Action Frame  |   Value        |
|:-------------:|:--------------:|
| **primitive** | move-possession|
| **agent**     | John           |
| **source**    | Marry          |
| **object**    | Book           |

## 14 Primitive Actions 

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

it seems that primitive types can be further clustered as follows: 

- move:
    body part
    whole
    possession
    concept
- sense
    see
    hear
    feel
    smell


Where the sense of move may be inferred from the object 

When encoding sentences using using primitive action some cases are very intuitive while others require transforming the sentence  to fit within the 14 primitive action frame works.

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

## Further work.

1. Is there an annotated corpus using this ontology?

Using DNN a embeddings on many sentences what embeddings would the net pick. Would the representatives be like ours or different. 

Would dimension reduction on verbs results in this ontology arising - if not would such an ontology be more useful?

ie. would it use these primitives or go for quite different ones.




# References

- [The Primitive ACTs of Conceptual Dependency] (Roger Shank)retrieved 13th of July 2017.
- Winston, P. (1993). Artificial Intelligence (3rd ed.). Addision-Wesley.
- [Primitive action](https://computersciencewiki.org/index.php/Primitive_action)

[The Primitive ACTs of Conceptual Dependency]: https://www.aclweb.org/anthology/T75-2008 (retrieved 13th of July.)

- [Crowdsourcing a Parallel Corpus for
Conceptual Analysis of Natural Language](https://www.aaai.org/ocs/index.php/HCOMP/HCOMP17/paper/viewFile/15924/15270) (Jamie C. Macbeth, Sandra Grandic 2017)