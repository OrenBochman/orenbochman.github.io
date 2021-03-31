---
layout: post
title: "Mermaid Charts Sequence Diagram"
date:   2021-03-29 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---

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