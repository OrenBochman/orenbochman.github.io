---
layout: post
title: "Mermaid Flowchart Test"
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
    H--some-text-->A
</div>
