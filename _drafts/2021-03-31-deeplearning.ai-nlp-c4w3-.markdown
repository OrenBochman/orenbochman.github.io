---
layout: post
title: "Course 4 Week 3 Question Answering"
date:   2021-03-30 18:16:16 +0300
categories: nlp coursera notes
tags: ["deeplearning.ai", "deep learning","#DeepLearningAlgorithems"]
---
![deeplearning.ai](/assets/logo_deeplearning.ai.png){: style="float: right"}

Notes for: NLP with Attention Models Week 3
Natural Language Processing with Attention Models

**Contents**
* This will become a table of contents (this text will be scrapped).
{:toc}

### Week's Learning Objectives:

Gain intuition for how transfer learning works in the context of NLP
Identify two approaches to transfer learning
Discuss the evolution of language models from CBOW to T5 and Bert
Fine-tune BERT on a dataset
Implement context-based question answering with T5
Interpret the GLUE benchmark

## TLDR: Neural Network engineering


## Transformer Evolution
- CBOW in Word2Vec - Issue: Fixed window we want all the context
- ElMo - Bidirectional LSTM - Issue long term dependency
- GPT2 - issue: unidirectional. only looks back
- BERT - just encoder - biderctional, multi mask learning
- T5 - Encoder Decoder - multi-task learning
- 2013 Word2Vec Google
- CBOW & Skip grams	
- 2014 Glove Stanford	. GloVe: Global Vectors for Word 

## Representation. [pdf] [bib]
- 2017 fasttext Facebook	CBOW 
  - morphological via sub words
	Algorithm of fasttext is based on these two papers:[8]
	- Enriching Word Vectors with Subword Information , Piotr Bojanowski, Edouard Grave, Armand Joulin and Tomas Mikolov, 2016
	- Bag of Tricks for Efficient Text Classification, Armand Joulin, Edouard Grave, Piotr Bojanowski, Tomas Mikolov, 2016
- 2018 ELMO Allen Institute for AI	ELMo - 
	Character based
	Bidirectional LSTM - 
	Issue: long term dependency is weak due to vanishing gradient and information loss.
- GPT 	Encoder only with left context

- Bert	uses 
- 2020 T5	uses a label to specify task
	uses task specific bidirectional lstm to build the embeddings

- BERT 	Decoder only

Input	Token embedding - the distributed representation of the tokens in one space S  with Dim(S)=D
	
	Segment embedding - because the model cannot tell the segment apart
	
	Position embedding because the model cannot discriminate the word position. 
Note we are trying to mimic RNN behavior but we don't have recursion:

Note these are added - they all live in S.
	Question: would putting S and P in their own dimensions more interpretable.
	Questions: how do we know the model does not have embeddings that are similar to E_A  and E_0
	Output
	CLS - classification token
	SEP - separator token

convert to embedding
C  is used for next sentence prediction
T_i are used for masked word prediction
T 	
	
	Cross entropy loss + Binary loss
	
	cross entropy loss to compare between two distribution from Softmax
	
	binary loss - could use cross entropy on two cat.
	Pretraining
        	before feeding data we mask 15% of the tokens.
	mask 80% of the time:
	training data generator chooses 15%. of these at random for prediction
	replace with:
	mask .8 of the time a random word .1 of the time
	original world otherwise.
	
	a sentence may have multiple masks.
	
	next sentence prediction also used in pre training.
	why/how
	(s1,s2) true/false
	
	
	BERT_Base
	12 layers
	12 attention heads
	110 million parameters
	
	
Fine tuning BERT	

	

Fine tuning	
	

	
T5	like BERT does  Transfer learning + fine tuning.
	classification, MT, NE, Sentiment
	
	 
	So you can see over here you have fully visible attention in the encoder and then causal attention in the decoder. 
	And then you have the general encoder-decoder representation just as 
	notation. 
	So light gray lines correspond to causal masking. 
	And dark gray lines correspond to the fully visible masking. 
	So on the left as I said again, it's the standard encoder-decoder architecture. 
	In the middle over here what we have, 
	we have the language model which consists of a single transformer layer stack. 
	And it's being fed the concatenation of the inputs and the target. 
	So it uses causal masking throughout as you can see because they're 
	all gray lines. 
	And you have X1 going inside over here, get at X2, 
	X2 goes into the model X3 and so forth. 
	Now over here to the right, 
	we have prefix language model which corresponds to allowing fully 
	visible masking over the inputs as you can see here in the dark arrows. 
	And then causal masking in the rest.
	Play video starting at :3:2 and follow transcript3:02
	So as you can see over here, it's doing causal masking. 
	So the model architecture, it uses encoder/decoder stack. 
	It has 12 transformer blocks each. 
	So you can think of it as a dozen eggs and then 220 million parameters. 
	So in summary, you've seen prefix language model attention. 
	You've seen the model architecture for T5. 
	And you've seen how the pre-training is done similar to birds, but 
	we just use mask language modeling here.
	
	
	encoder/decoder
1212 transformer blocks
220 million parameters
	pre training

2^18 steps = 262144



