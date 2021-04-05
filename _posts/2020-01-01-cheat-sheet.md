---
title:  "My Jekyll Markdown Cheat Sheet"
date:   2017-01-01 16:00:00
categories: [cheat-sheets, blogging]
tags: [code, tests]
img : cheat-sheets.jpg
---

# Math

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are:

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

$$ \begin{equation} 
  f\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
\end{equation} $$

# Alerts	

::: Note 
This is my note. All the content I type here is 
treated as a single paragraph.
:::

{% include note.html content="This is my sample note." %}
{% include warning.html content="This is my sample note." %}
{% include important.html content="This is my sample note." %}
{% include tip.html content="This is my sample note." %}
{% include callout.html type="danger" content="This is my sample note." %}

