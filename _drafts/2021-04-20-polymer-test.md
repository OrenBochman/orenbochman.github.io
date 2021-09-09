---
layout: post
title: Polymer test
description: Polymer test
date: 2021-04-20 12:16:16 +0300
categories:
    - NLP 
    - notes
tags:
    - web components
lastmod: 2021-04-24 12:16:16 +0300
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: web components
---

<style>
hr { 	
  clear:both;  
}

img[src*='#sl'] { 
  float: right; 
  width:55%; 
  margin:10px 10px 10px 0px; 
  border: 2px solid gold;
  display: block;
}

img[src*='#hi'] { 
  width:85%; 
  display: block;
  margin: 10px auto 10px auto;
  border: 2px solid gold;
}

img[src*='#rt'] { 
  float: right; 
  margin: 10px;
  border: 2px solid gold;
}

img[src*='#logo'] {
      width: 20%;
      float: right
}
</style>


## Lit-element test

<simple-greeting name="World"></simple-greeting>

## Todo list

<todo-list></todo-list>

## H. P. Luhn  

<paper-card heading="Emmental" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
  <div class="card-content">
    Emmentaler or Emmental is a yellow, medium-hard cheese that originated in the area around Emmental, Switzerland. It is one of the cheeses of Switzerland, and is sometimes known as Swiss cheese.
  </div>
  <div class="card-actions">
    <paper-button>Share</paper-button>
    <paper-button>Explore!</paper-button>
  </div>
</paper-card>

## Post

<paper-card heading="{{post.title}}">
<time datetime="post.date | date_to_xmlschema">{{post.date | date_to_string}}</time>
<div class="card-content">{{post.content | strip_html | truncatewords:50}}

</div>
<div class="card-actions">
<a href="{% if site.baseurl == "/" %}{{ post.url }}{% else %}{{ post.url | prepend: site.baseurl }}{% endif %}">                        
<paper-button class="colored" raised>Read</paper-button></a>
</div>
</paper-card>


<hr>

# Luhn


<paper-card heading="Hans Peter Luhn" image="/assets/img/articles/summarization/luhn.jpg" alt="Hans Peter Luhn">
<div class="card-content">
<marked-element>
<div slot="markdown-html"></div>
<script type="text/markdown">
Check out my markdown!

We can even embed elements without fear of the HTML parser mucking up their
textual representation:

```html
<awesome-sauce>
  <div>Oops, I'm about to forget to close this div.</div>
</awesome-sauce>
```

Select sentences with highest concentrations of salient content terms 

@@ Score = \frac{\text{Salient Words}^2}{  \text{Terms in chunk} }@@

> Hans Peter Luhn (July 1, 1896 – August 19, 1964) was a researcher in the field of computer science and Library & Information Science for **IBM**, and creator of the **Luhn algorithm**, **KWIC** (Key Words In Context) indexing, and **Selective dissemination of information** ("SDI"). He was awarded over 80 patents. @-@ Wikipedia article for [Hans Peter Luhn](https://en.wikipedia.org/wiki/Hans_Peter_Luhn) </div>
      </script>
</marked-element></div>
  <div class="card-actions">
    <paper-button>Share</paper-button>
    <paper-button>Explore!</paper-button>
  </div>
</paper-card>
<hr>
