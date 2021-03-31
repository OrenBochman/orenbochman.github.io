---
layout: post
title: "Mermaid Charts Test"
date:   2021-03-29 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---

# flowchart

<div class="mermaid">
graph TD;
    A((A))-->B>B];
    A-->C{C};
    B-->D{{D}};
    C-->D;
    C-->E;
    D-->E[/E/];
    E-->F[\F/];
    E-->G[\G\];
    G-->H[(Database)];
    F-->H
    A-->H-->A

</div>

# Sequence diagram

<div class="mermaid">
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
</div>


# Gantt diagram

<div class="mermaid">
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram to mermaid
    excludes weekdays 2014-01-10
    section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
</div>

# Class diagram

<div class="mermaid">
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</div>

# Git graph

<div class="mermaid">
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
</div>

# Entity Relationship Diagram
<div class="mermaid">
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
# ER diagram
</div>

# User Journey Diagram

<div class="mermaid">
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
</div>


# pie chart
<div class="mermaid">
pie title Pets adopted by volunteers
"Dogs" : 386
"Cats" : 85
"Rats" : 35
</div>

