---
layout: post
title: Jekyll take 3 
date: 2021-04-04 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: jekyll-and-hyde.jpg # Add image post (optional)
tags: [blogging, jekyll, kramdown, mathjax] # add tag
comments: true
---
I've had a too many issues to list trying to cram mathjax v.3 down  kramdown's throat without it choking latex code on a new jekyll blog hosted by githubpages. 

Here are a few that if fixed should make it much simpler to use mathjax. 

1. `|` used for absolute values and norm trigger a markdown table.
     - desired behavior o not replace `|` in non markdown blocks i.e. within the mathjax delimiters 
     - my workaround is replace | with \vert instead of '|' in equations
2. `\\` as line breaks are replaced with hard line breaks and then ignored within the mathjax delimiters 
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

    


