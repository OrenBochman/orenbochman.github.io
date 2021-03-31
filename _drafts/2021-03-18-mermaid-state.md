---
layout: post
title: "Mermaid State Diagram"
date:   2021-03-18 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---

# State
<div class="mermaid">
stateDiagram-v2
[*] --> Still
Still --> [*]
Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
</div>