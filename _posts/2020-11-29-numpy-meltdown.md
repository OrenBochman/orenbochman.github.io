---
layout: post
title: numpy melt down 
description: numpy melt down.
date: 2020-11-29 7:44 PM 10:50:09.040Z
categories: python
tags:
   - python
   - macos
   - bugs
img: cover/literature-review-open-book.jpg
fig-caption: literature review
---

# TLDR

Just a rant at numpy and scipi breaking when I realy needed them.

# Numpy meltdown

Sad to report but numpy (and scipy) installation started to fail on macos due to ending of support of the native Accelerate library provided by Apple. 

numpy now depends on lapack/blas

Of course having upgraded to macos 11 has not made it any easier to get things working smoothly either.

also brew install numpy --with-openblas

no longer works either since the option was removed.

the main point is how shoddy python really is - everything most people do depends on numpy but numpy is a totally different project and have no qualms about their project breaking on a major platform and provide no fall back and no support. 

And why does one need numpy in the first place - lack of support in python for numeric processing and essential data structures. And being so slow that one requires it be done by a library written in a lower level language.

Just saying these should never break - since they do the very basic processes of working with python are broken.

