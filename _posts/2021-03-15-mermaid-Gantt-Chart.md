---
layout: post
title: "Mermaid Gantt Chart"
date:   2021-03-15 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---

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