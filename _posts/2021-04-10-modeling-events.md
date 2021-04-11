---
layout: post
title: Modeling Events
date: 2021-04-10 00:00:00 +0300
description: Modeling Events. 
img: event-questions.jpg 
fig-caption: # Add figcaption (optional)
tags: [modelling, datascience] 
---

One of the entities captured by named entity resolution task are events. However events have a complex structure which I would like to outline here.

Stories have structure. Perhaps the most discernable is the narrative structure. Stories consist in a number of building blocks: events, dialogue, exposition and characters the first three are the foundation of the narrative and are how the character are presented as the story unfolds.

Events are the atoms of a story's narrative structure. Each bit of dialogue can be viewed as an event, with some extra structure (text, subtext). Exposition is a technique of providing information happening off screen - typically from the back story the history of the characters from before the first event. and as such should be represented as events.

# What are events

Events are the atoms of a story's narrative structure. Stories also have exposition and characters and dialogue. But each utterance can be represented by an event. Exposition is a

## Modelling events

An event can be modelled as a classic A.I. Frame. We could start with the 6 W:

{% mermaid %}
classDiagram
    class BasicEvent
    BasicEvent : +int what # the action
    BasicEvent : +int who  # subject and object
    BasicEvent : +int when 
    BasicEvent : +int how
    BasicEvent : +int where
    BasicEvent : +int why
{% endmermaid %}

The parts seem self explanatory. However when it comes to who one might want to more clearly specify between subject and object. Also if the subject was passive or active. There may also be an instrument required to carry out the action.

# Other Structures

## Sequences

Events are less interesting by themselves. Events naturally fit into cause and effect sequences. They are often packaged in sequences called scenes, which sharing a common location but represent small changes in the story. Larger scenes are sometimes called *set pieces* perhaps in reference to the requirement of an expensive stage set. Scenes are grouped into acts which typically end with a big change called a turning point again in allusion to a turn in the plot.

## Information sets

This is an term from game theory which refers to a set of players who are privy to a bit of information. In the story a big part of the emotional charge is crafted by manipulating information sets. The key members of the information set are:
- The audience
- The protagonist (main character)
- Other characters

Once an information set is established it becomes possible for the manipulation of information to become a part of the story. Characters will speculate on the missing information regarding such events, and may well act on their beliefs.

## Order of presentation

The order that events are portrayed is usually the order that they happened but often for dramatic effect some events may be shown out of order.

## Counterfactual Events

If we view our world as the sum of all possible worlds then counterfactuals are representatives of the possible world other than this one. Counterfactuals are what might have been. Dream sequences and thoughts can contain such sequences of events.

## Value change

Story value is best viewed as generalization of sentiment. For each event in the story there may be a corresponding improvement or the opposite for the lot of the subject of the action. How this correlates with the inner and outer desires can take many forms but this often drives the story.

 # Character arcs
 
 As I mentioned earlier most of what we know and feel about the characters is due to their actions in different circumstances. The development of a character over the story is called a character arc and the primary method of establishing an idiosyncratic characterization is how an individual picks different choices in what may appear to the viewer as rather similar situations.

{% mermaid %}
classDiagram
    class Event
    Event : +int what
    Event : +int when
    Event : +int where
    Event : +int subject
    Event : +int object
    Event : +int instrument    
    Event : +int how    
    Event : +int why
    Event : +int valueChange
    Event : +int informationSet
    Event : +int presentationOrder
    Event <|-- Dialog
    Dialog : +int what
    Dialog : +int when
    Dialog : +int where
    Dialog : +int subject
    Dialog : +int object
    Dialog : +int instrument    
    Dialog : +int how    
    Dialog : +int why
    Dialog : +int valueChange
    Dialog : +int informationSet
    Dialog : +int presentationOrder
    Event <|-- Exposition
    Exposition : +int what
    Exposition : +int when
    Exposition : +int where
    Exposition : +int subject
    Exposition : +int object
    Exposition : +int instrument    
    Exposition : +int how    
    Exposition : +int why
    Exposition : +int valueChange
    Exposition : +int informationSet
    Exposition : +int presentationOrder
    Event <|-- Action
    Action : +int what
    Action : +int when
    Action : +int where
    Action : +int subject
    Action : +int object
    Action : +int instrument    
    Action : +int how    
    Action : +int why
    Action : +int valueChange
    Action : +int informationSet
    Action : +int presentationOrder
{% endmermaid %}





