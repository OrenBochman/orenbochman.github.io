---
layout: post
title: 'Paper Review: Effective Approaches to Attention-based NMT'
date: 2021-04-02T10:50:09.040Z
categories: nlp coursera notes paper
tags:
   - attention
   - deep learning
   - literature review
   - paper
img: literature-review.jpg
---

![deeplearning.ai](/assets/logos/logo_deeplearning.ai.png#logo)

# Dot-Product Attention

Dot-Product Attention is the first of three attention mechanisms covered in the course. Dot-Product Attention is a good fit, in an engineering sense, for a encoder-decoder architecture with tasks where the source source sequence is fully available at the start and the tasks is mapping or transformation the source sequence to an output sequence like in alignment, or translation.
<!--more-->

{:toc}

This is a review of the paper in which scaled dot product attention was introduced in 2015 by *Minh-Thang Luong, Hieu Pham, Christopher D. Manning* in [Effective Approaches to Attention-based Neural Machine Translation](https://arxiv.org/pdf/1508.04025v5.pdf) which is available at [papers with code](https://paperswithcode.com/paper/effective-approaches-to-attention-based).



Attention was not completely new and it had not yet taken center stage in the model, but its often useful to garner the concepts and intuition which inspired the researchers to adapt attention and how they come up with this form of attention.

They abstract starts with:

>  "An attentional mechanism has lately been used to improve neural machine translation (NMT) by selectively focusing on parts of the source sentence during translation."

which was covered in last lesson. The abstract continues with:

> "This paper examines two simple and effective classes of attentional mechanism: a **global** approach
which always attends to **all** source words
and a **local** one that only looks at a **subset**
of source words at a time."
talks about 

# Global attention

This is defined in §3.1 of the paper as:

$$ a_t(s)=align(h_t,\bar{h}_s)= \frac{ e^{score(h_t,\bar{h}_s)} }{ \sum_{s'} e^{score(h_t,\bar{h}_s)} } $$

where $$h_t$$ and $$h_s$$ are the target and source sequences and $score()$ which is referred to as a *content-based* function as one of three alternative forms provided:

## Dot product attention:

$$ score(h_t,\bar{h}_s)=h_t^T\bar{h}_s $$

This form combines the source and target using a dot product. Geometrically this essentially a projection operation.

## General attention:

$$ score(h_t,\bar{h}_s)=h_t^TW_a\bar{h}_s $$

this form combines the source and target using a dot product after applying a learned attention weights to the source. Geometrically this is a projection of the target on a linear transformation of the source or **scaled dot product attention** as it is now known

## Concatenative attention:

$$ score(h_t,\bar{h}_s)=v_a^Ttanh(h_t;\bar{h}_s)$$ 

this is hard to make sense of 

they also mention having considered using a *location based function*

location : 

$$ a_t = softmax(W_a h_t)$$ 

which is just a linear transform of the hidden target state $$h_t$$ 

# Local attention

in §3.2 they consider a local attention mechanism:

> We propose a local attentional mechanism that chooses to focus only on a small subset of the source positions per target word. This model takes inspiration from the tradeoff between the soft and hard attentional models proposed by Xu et al. (2015) to tackle the image caption generation task.

> Our local attention mechanism selectively focuses on a small window of context and is differentiable. ... In concrete details, the model first generates an aligned position $$p_t$$ for each target word at time $$t$$. The context vector $$c_t$$
is then derived as a weighted average over the set of source hidden states within the window $$[p_t−D, p_t+D]$$; $$D$$ is empirically selected.

the big idea here is to use a fixed window size for this step to conserve resources when translating paragraphs or documents - a laudable notion for times where LSTM gobbled up resources in proportion to the sequence length...

they also talk about *monotonic alignment* where $$p_t=t$$ and *predictive alignment*

$$ p_t=S\cdot sigmoid(v_p^Ttanh(W_ph_t))$$

$$ a_t(s)=align(h_t,\bar{h}_s)e^{(-\frac{(s-p_t)^2}{s\sigma^2})} $$

with align() as defined above and $\sigma=\frac{D}{2}$

the rest of the paper has details about the experiment with one last interesting aspect which are visualization of alignment weights.

![alignment-visulization](/assets/week2/c4w2-22-alignment-visulization.png#hi)

So to recap they were focused on alignment and try to tackle it using a function of the content and a function of its location.
