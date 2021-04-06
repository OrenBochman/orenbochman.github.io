---
layout: post
title:  "My Jekyll Markdown Cheat Sheet"
date:   2021-02-01 16:00:00
categories: [cheat-sheets, blogging]
tags: [code, tests]
img : cheat-sheets.jpg
---

# Math

When @a \ne 0@, there are two solutions to @ax^2 + bx + c = 0@ and they are

@@x = {-b \pm \sqrt{b^2-4ac} \over 2a}@@.

@@S_z^x(y) = \sum_{i=1}^y ( \sum_{x'=0}^{x-1} S_z^{x'}(y-i) + \sum_{z'=0}^{z-1} S_{z'}^{z}(y-i) )@@

to get numbered equations:

@@\begin{equation} 
    f(k)=\binom{n}{k} p^k(1-p)^{n-k}
  \end{equation}@@

some other text:

@@\begin{align}
  & \phi(x,y) = \phi (\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) 
  ( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots         & \ddots & \vdots         \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n) \end{array} )
  ( \begin{array}{c}  y_1 \\
                      \vdots \\ 
                      y_n \end{array} )
  \end{align}@@

@@\begin{equation} \begin{align*}
  & \phi(x,y) = \phi (\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) 
  ( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots         & \ddots & \vdots         \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n) \end{array} )
  ( \begin{array}{c}  y_1 \\
                      \vdots \\ 
                      y_n \end{array} )
  \end{align*} 
  \end{equation}@@

@@\begin{equation}\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}\end{equation}@@

@@\begin{equation}\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\end{equation}@@

@@\begin{equation}\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ} 
  \mathfrak{abcdefghijklmnopqrstuvwxyz}\end{equation}@@


it would make sense to have some more equations with
- matrices
- sum product
- equals alignment across lines
## fraction

@@\left(\frac{x^2}{y^3}\right)@@	

## matrix

@@ \left[
  \begin{array}{ c c }
     1 & 2 \\
     3 & 4
  \end{array} \right]
@@

# Alerts	

this is how I'd alerts to be coded - infact

```
::: Note 
This is my note. All the content I type here is 
treated as a single paragraph.
:::
```

which looks like: 

::: Note 
This is my note. All the content I type here is 
treated as a single paragraph.
:::

Center-aligned
{: .alert .alert-info .text-center}


{% include note.html content="This is my sample note." %}
{% include warning.html content="This is my sample note." %}
{% include important.html content="This is my sample note." %}
{% include tip.html content="This is my sample note." %}
{% include callout.html type="danger" content="This is my sample note." %}


# Footnotes


```
You can find a demo of a site[^Demo] built with PostCSS in our footnotes, or you can checkout the [^Github Repo] for the project.

[Demo](http://iviewsource.com/exercises/postcsslayouts)
[Github Repo](https://github.com/planetoftheweb/postcsslayouts)
```

You can find a demo of a site[^Demo] built with PostCSS in our footnotes, or you can checkout the [^Github Repo] for the project.

[Demo](http://iviewsource.com/exercises/postcsslayouts)
[Github Repo](https://github.com/planetoftheweb/postcsslayouts)
