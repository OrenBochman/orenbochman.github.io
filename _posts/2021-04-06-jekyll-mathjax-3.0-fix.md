---
layout: post
title: MathJax 3 fix for Jekyll hosted on Github pages  
date: 2021-04-04 00:00:00 +0300
description: Issues and workarounds for MatchJax 3.0. # Add post description (optional)
img: Jekyll-and-Hyde.jpg
fig-caption: hopefully less Jekyll and more Dr. Hyde 
tags: [blogging, jekyll, kramdown, mathjax] # add tag
comments: true
---

Here is an issue I opened:

I've had a too many issues to list trying to cram mathjax v.3 down  kramdown's throat without it choking latex code on a new jekyll blog hosted by github pages. 

Here are a few that if fixed should make it much simpler to use mathjax. 

1. `|` used for absolute values and norm trigger a markdown table.
     - desired behavior o not replace `|` in non markdown blocks i.e. within the MathJax delimiters 
     - my workaround is replace | with \vert instead of '|' in equations
2. `\\` as line breaks are replaced with hard line breaks and then ignored within the MathJax delimiters 
     - desired behavior o not replace `\\` in non markdown blocks i.e. within the mathjax delimiters
     - workaround use \newline instead of '\\ in math
3. mathjax now looks for its delimiters  rather then the tags being used.
    - add a `math_engine_opts` entry:  say `dollars_untaxed` to suppress replacement of the mathjax $ delimiters 
    - my workaround replace `$` and `$$ ` to  say `@`  and `@@` respectively.

here is my current integration:

```javascript
<script>
  window.MathJax = {
    loader: {load: ['[tex]/ams']},
    tex: {
      inlineMath: [['@', '@']],
      displayMath: [['@@', '@@'],],
      tags: 'ams',
      multlineWidth: '85%',      // width of multline environment
      packages: {'[+]': ['ams']}},
      formatError:               // function called when TeX syntax errors occur
        (jax, err) => jax.formatError(err),
  };
</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>`

    


