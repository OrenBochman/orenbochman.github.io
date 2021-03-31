---
layout: post
title: "Mermaid User Journey"
date:   2021-03-16 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---


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



# Gantt diagram

<div class="mermaid">
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
</div>