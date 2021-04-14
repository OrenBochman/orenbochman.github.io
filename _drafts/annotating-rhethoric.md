---
title: "developing an annotation scheme for Rhetoric"
layout: post
date:   2021-04-13 11:16:16 +0300
categories: blogging test
tags: ["charts"]
---

#



## IOB scheme

## Goals

- to annotate the basic entities
- to annotate the chief rhetorical devices
- to annotate allusion and references external to the text - complete the context.
    - one might conceive of using an attention mechanism to recommend similar passages from
        - religious works [Old & New Testament, King James Bibe, Koran, hymns and spirituals]
        - classical sources [Homer, Sophecles, Julias Ceaser, Plato, Aristotle, Thucydides, Cicero]
        - 
        - earlier orations []

## Gettysburg Address

```python

# space round punctuation
# normalize space
# lower case
# split on \n

tags= ["location","time","event", "reference","allusion","metaphor"]
p_tag=[]
```

```python
_s=shorthsnad={
    "doi": "deceleration of independence",
    "ps90:10": "Psalms 90:10",
    "anthro":"anthropomorphic",
    "lp":"lord's prayer"}
[
    (  1,"four" ): {"ent-num":"s","ent-time":"s", "refs": ["doi","ps90:10","anthro"] }
    (  2,"score"): {}
    (  3,"and"  ): {}
    (  4,"seven"):{"ent-num": "e"} 
years      {"refers": ["e-ps90:10"}                
ago        {"ent-time":  "e",  "refs": ["e-doi"]} 
our        {"ent-person":"s","refs": ["s-lp",]}
fathers    {"ent-person":"e","refs": ["e-lp",]} 
brought     i-allusion(birth)
forth       e-allusion(birth)
upon
this        s-location
continent   e-location
,
a
new
nation
,
conceived   b-event b-allusion(anthropomorphic)
in          i-event i-allusion
Liberty     e-event e-allusion
,
and
dedicated   
to
the
proposition
that
all
men
are
created
equal
.
Now         s-time
we
are
engaged
in
a           event
great       event
civil       event
war         event
,
testing
whether
that
nation
,
or
any
nation          b-commoratio
so              i-commoratio
conceived       i-commoratio b-allusion(anthropomorphic)
and             i-commoratio
so              i-commoratio
dedicated       e-commoratio
,
can
long
endure
.
We
are
met
on
a
great   location
battle  location
-
field   location
of
that    event
war     event
.    
We
have
come
to
dedicate
a
portion s-location
of      i-location
that    i-location
field   e-location
,
as
a
final
resting
place
for
those   person
who     person
here    person
gave    person
their   person
lives   person
that
that    allusion
nation  allusion
might   allusion
live    allusion
.
It
is
altogether
fitting
and
proper
that
we
should
do
this
.

But
,
in
a
larger
sense
,
we          s-anaphora
can         i-anaphora
not         i-anaphora
dedicate    e-anaphora
—
we          s-anaphora
can         i-anaphora
not         i-anaphora
consecrate  e-anaphora
—
we          s-anaphora
can         i-anaphora
not         i-anaphora
hallow      e-anaphora
—
this
ground
.
The         person
brave       person
men         person
,           person
living      person
and         person
dead        person
,
who
struggled
here
,
have
consecrated
it
,
far
above
our
poor
power
to
add
or
detract
.
The
world
will
little
note
,
nor
long
remember
what
we          person
say
here
,
but
it
can
never
forget
what
they        person
did
here
.
It
is
for
us          person
the         person
living      person
,
rather
,
to
be
dedicated
here
to
the
unfinished
work
which
they        person
who
fought
here
have
thus
far
so
nobly
advanced
.
It
is
rather
for
us          person
to
be
here
dedicated
to
the
great
task
remaining
before
us
—
that
from
these
honored
dead
we
take
increased
devotion
to
that
cause
for
which
they    person
gave
the
last
full
measure
of
devotion
—
that
we
here
highly
resolve
that
these   s-person
dead    e-person
shall
not
have
died
in
vain
—
that
this
nation
,
under   allusion
God     allusion
,
shall
have
a           s-event
new         i-event allusion(anthropomorphic)
birth       i-event allusion(anthropomorphic)
of          i-event
freedom     e-event
—
and
that
government
of          isocolon
the         isocolon
people      isocolon
,
by          isocolon
the         isocolon
people      isocolon
,
for         isocolon
the         isocolon
people      isocolon
,
shall
not
perish      s-allusion(anthropomorphic)
from        i-allusion
the         i-allusion
earth       e-allusion
.
```
### References:

1. reference to: signing of the Declaration of Independence, 87 years earlier 
2. allusion to life of a man in to the King James Version of the Bible"s Psalms 90:10, in which man"s lifespan is given as "threescore years and ten; and if by reason of strength they be fourscore years"

## See also

- [Edward Everett ("The Battles of Gettysburg")](https://voicesofdemocracy.umd.edu/everett-gettysburg-address-speech-tex/)
- Pericles"s Funeral Oration during the Peloponnesian War as described by Thucydides
