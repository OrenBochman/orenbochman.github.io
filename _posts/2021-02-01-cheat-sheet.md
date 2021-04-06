---
layout: post
title:  "My Jekyll Markdown Cheat Sheet"
date:   2021-02-01 16:00:00
categories: [cheat-sheets, blogging]
tags: [code, tests]
img : cheat-sheets.jpg
---

# Math

- source: [stackexchange](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference/30661#30661)

## Inline, display, square root and fraction

When @a \ne 0@, there are two solutions to @ax^2 + bx + c = 0@ and they are

fraction using `\over`
@@x = {-b \pm \sqrt{b^2-4ac} \over 2a}@@.

fraction using `\fraction`
@@\left(\frac{x^2}{y^3}\right)@@	

### Summation and product

@@S_z^x(y) = \sum_{i=1}^y \left( \sum_{x'=0}^{x-1} S_z^{x'}(y-i) + \prod_{z'=0}^{z-1} S_{z'}^{z}(y-i) \right) = \bigcup^{\Omega} S{\infty} \bigcap_{\alpha\in U} T_{\alpha}@@

to get numbered equations:

@@\begin{equation}
f(k) = \binom{n}{k} p^k(1-p)^{n-k}
\end{equation}@@

@@\begin{equation*} 
    f(k)=\binom{n}{k} p^k(1-p)^{n-k}
  \end{equation*}@@

some other text:
<hr>
### Alignment

  place am `&` before `=` to align and break lines using \newline 


@@\begin{align}
  \phi(x,y) & = \phi (\sum_{i=1}^n x_ie_i, \sum_{j=1} ^n y_je_j)  \newline
  & =  \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) \newline
  & =  \left(x_1, \ldots, x_n \right) 
  \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \newline
      \vdots         & \ddots & \vdots         \newline
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n) \end{array} \right)
  \left( \begin{array}{c}  y_1 \newline
                      \vdots \newline 
                      y_n \end{array} \right)
  \end{align}@@
<hr>
@@\begin{equation}\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}\end{equation}@@
<hr>
@@
  f(n) =
\begin{cases}
n/2,  & \text{if $n$ is even} \\
3n+1, & \text{if $n$ is odd}
\end{cases}@@
<hr>
### Typography

@@\begin{equation}\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}\end{equation}@@

@@\begin{equation}\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ} 
  \mathfrak{abcdefghijklmnopqrstuvwxyz}\end{equation}@@

## Commutative Diagram
@@
\require{AMScd}
\begin{CD}
A @>a>> B\\
@V b V V= @VV c V\\
C @>>d> D
\end{CD}
@@

## Matrix

@@ \left[
  \begin{array}{ c c }
     1 & 2 \newline
     3 & 4
  \end{array} \right]
@@

## Chemistry

@@\require{AMScd}
\begin{CD}
  RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O 
\end{CD}@@

## Tags
To tag an equation use `\tag{yourtag}`, and if you want to refer to that tag later on, add `\label`{somelabel} right after the `\tag`. It is not necessary that yourtag and somelabel are the same, but it usually is more convenient to do so:

@@e=mc^2 \tag{1}\label{eq1}@@

In order to refer to an equation, just use `\eqref{eq1}` to get \eqref{eq1}

@@ a+y^3 \stackrel{\eqref{eq1}}= x^2 @@

## Limits
@@\lim\limits_{x \to 1} \frac{x^2-1}{x-1}@@


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


## Mermaids

