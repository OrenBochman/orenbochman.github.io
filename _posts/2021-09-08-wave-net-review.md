---
layout: post
title: WaveNet
date: 2021-08-29 00:00:00 +0300
description: The WaveNet paper is kind of old. Yet it seems to come up in various contexts. Some thoughts on this. 
img: cover/dice-distribution.jpg 
fig-caption: # Add figcaption (optional)
tags: [PPC, data science, digital marketing, quantitative marketing, intelligence] 
---

The WaveNet paper is a few years old. But it seems to come up in various contexts - mostly in the area of sound synthesis. It was the first paper to do waveform generation directly from a neural net instead of modeling vocoder parameters, used an innovative convolutional net technique.

Here is some info on it and some follow up papers.

(Perhaps I'll split them up later.)

# WaveNet

Is a fully probabilistic and autoregressive CNN model for the for TTS synthesis task. At this point CNN were mostly used for Image processing and RNN which are much harder to train were used for Sequence to Sequence modeling. The main WaveNet innovation is that it was a CNN that could handle contexts over lone term sequences (it needed to handle 16,000 samples per second over serval second).

WaveNet It was based on the `PixelCNN` [*van den Oord, Aaron, Kalchbrenner, Nal, and Kavukcuoglu, Koray* **Pixel recurrent neural networks** 2016](https://arxiv.org/abs/1601.06759) [*van den Oord, Aaron, Kalchbrenner, Nal, Vinyals, Oriol, Espeholt, Lasse, Graves, Alex, and Kavukcuoglu, Koray*. **Conditional image generation with PixelCNN decoders** 2016](http://arxiv.org/abs/1606.05328) architecture.

To handle long-range temporal dependencies needed for raw audio generation, the authors developed a new architectures based on `dilated causal convolutions`, which exhibit very large receptive fields.

WaveNet is unique in its ability to synthesize sound directly where previous models required additional steps. Later TTS systems utilise WaveNet as a component, tweaking the joint language model with the linguistic context representations.


Typical TTS pipelines have two parts:
1. text_analysis(text sequence) 
    - @\implies@ sentence segmentation
    - @\implies@ word segmentation
    - @\implies@ Text normalization
    - @\implies@ POS tagging
    - @\implies@ grapheme to phoneme conversion
    - @\implies@ phoneme sequence + linguistic contexts.
2. Speech synthesis(output)
     - @\implies@ synthesized speech waveform.
     - prosody prediction
     - speech waveform generation

The two main approaches for the speech synthesis part are:

1. *non-parametric example-based* AKA *concatenative speech synthesis* due to [Moulines & Charpentier, 1990](); [Sagisaka et al.,1992](); [Hunt & Black, 1996]() which builds up the utterance from units of recorded speech.
2. *parametric, model-based* AKA *statistical parametric speech synthesis* due to (Yoshimura, 2002; Zen et al., 2009). which uses a generative model to synthesize the speech. 

The statistical parametric approach first extracts a sequence of vocoder parameters (Dudley, 1939) @o = {o_1, ... , o_N }@ from speech signals @x = {x_1, ... , x_T }@ and linguistic features l from the text W, where N and T correspond to the numbers of vocoder
parameter vectors and speech signals. 

Typically a vocoder parameter vector @o_n@ is extracted at every 5 ms. It often includes:
    - `cepstra` [[Imai & Furuichi, 1988]() or       `line spectral pairs` [Itakura, 1975]() which represent vocal tract transfer function.
    - `fundamental frequency` @F_0@ and `aperiodicity` [Kawahara et al., 2001](), which represent characteristics of vocal source excitation signals. 

Then a set of generative models, such as a HMM [Yoshimura, 2002](), feed-forward neural network [Zen et al., 2013](); RNN [Tuerk & Robinson, 1993](); [Karaali et al., 1997](); [Fan et al., 2014](), is trained from the extracted vocoder parameters and linguistic features.

But Wavenet is a generative model that does both linguitic analysis and 


# Resources

- paper [WAVENET: A GENERATIVE MODEL FOR RAW AUDIO](https://arxiv.org/pdf/1609.03499.pdf)
- blogpost: [wavenet-generative-model-raw-audio](https://deepmind.com/blog/article/wavenet-generative-model-raw-audio)
- 2 minute papers coverage: [WaveNet by Google DeepMind | Two Minute Papers #93](https://www.youtube.com/watch?v=CqFIVCD1WWo&ab_channel=TwoMinutePapers)

- [Digital Marketing Competitor Analysis: Guide to Evaluating Competition](https://digilant.com/blog/featured-blog/digital-marketing-competitor-analysis-guide-to-evaluating-competition/)