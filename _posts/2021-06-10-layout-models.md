---
title: TensorFlow probability
layout: post
date: 2021-06-01 12:16:16 +0300
categories:
    - ML
tags:
    - AI
    - NLP
    - Bijectors
    - Auto Regressive Flows
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: just a handy command line conversion recipe
ipynb: https://github.com/jessstringham/notebooks/tree/master/2018-12-27-KL-Divergence.ipynb
---


In a recent google ai blog post an transformer based autoencoder is shown that can be used to learn and generate document layouts.
- [Using Variational Transformer Networks to Automate Document Layout Design](https://ai.googleblog.com/2021/06/using-variational-transformer-networks.html)
    - [Neural Design Network: Graphic Layout Generation with Constraints](https://arxiv.org/abs/1912.09421)
    - [Variational Transformer Networks for Layout Generation](https://arxiv.org/pdf/2104.02416.pdf)

     Current approaches to layout generation use greedy search algorithms, such as 
     - [beam search](https://en.wikipedia.org/wiki/Beam_search)
     - [nucleus sampling](https://arxiv.org/abs/1904.09751) 
     - [top-k sampling](https://arxiv.org/abs/1805.04833)


[LayoutParser: A Unified Toolkit for Deep Learning Based Document Image Analysis](https://arxiv.org/pdf/2103.15348.pdf)
[Awesome OCR](https://github.com/zacharywhitley/awesome-ocr)
[Guide to LayoutParser: A Document Image Analysis Python Library](https://analyticsindiamag.com/guide-to-layoutparser-a-document-image-analysis-python-library/)