---
layout: page
title: "Neural Machine Translation Notes"
permalink: /Neural_Machine_Translation_Notes/
tag: deeplearning.ai
tag: deep learning
tag: #DeepLearningAlgorithems
---
# Neural Machine Translation

My deeplearning.ai course notes **Natural Language Processing with Attention Models** 

## Learning Objectives:

- Explain how an Encoder/Decoder model works
- Apply word alignment for machine translation
- Train a Neural Machine Translation model with Attention
- Develop intuition for how teacher forcing helps a translation model checks its predictions
- Use **[BLEU](https://en.wikipedia.org/wiki/BLEU)** score and **[ROUGE](https://en.wikipedia.org/wiki/ROUGE_(metric))** score to evaluate machine-generated text quality
- Describe several decoding methods including [MBR]() and [Beam search]()

## TLDR: Neural Network engineering

1. How do we learn to **align** two sequences?

   Using **attention** layer. While it does not reorder the input,  attention works by by assigning to each item of the input a subset of the input.
2. How do we use arbitrary functions on a Trax Neuarl Net?
    
    Using a [functional layers](https://trax-ml.readthedocs.io/en/latest/notebooks/layers_intro.html?highlight=fn#With-the-Fn-layer-creating-function.)

    ```python	
        def Addition(): # this is a a closure
        
            layer_name = "Addition"  # the name 

            # Custom function for the custom layer
            def func(x, y):
                return x + y
        
            return tl.Fn(layer_name, func) # returning an tl.Fn object with name and function
    ```
3. How do we manage layer input and output in a neural network	

    if we need something more complex then feeding input to next output we can use stack semantics of Trax.
	
	note this is actually something I've seen in papers and wondered about. 

    In Trax we can do it using a **select**

    ```python
        tl.Select([0,1,0,1])
    ```
    which pops items 0,1 from the stack and pushes them in twice. Effectively replicating the input.


4. how can we make residual connections ? 
	
    use a d. residual layer


## W1V1: Intro

This course is called Natural Language Processing with Attention Models. When you finish this course, you have pretty much reached the cutting edge of today's practical NLP methods. You use a powerful technique called attention to build several different models. Some of the things you build using the attention mechanism, you build a powerful language translation model. You also build an algorithm capable of summarizing texts. You build a model that can actually answer questions about the piece of text, and you build a chat bot that you can actually have a conversation with.	sentiment analysis
	
When it comes to modern deep learning, there's a sort of new normal, which is to say, most people aren't actually building and training models from scratch. Instead, it's more common to download a pre-trained model and then tweak it and find units for your specific use case. In this course, we show you how to build the models from scratch, but we also provide you custom pre-trained models that we created just for you. By training them continuously for weeks on the most powerful TPU clusters that are currently only available to researchers as Google.

## W1V2: Seq2Seq	

![My helpful screenshot](assets/screenshot.png)

The sequential nature of models you learned in the previous course (RNNs, LSTMs, GRUs) does not allow for parallelization within training examples, which becomes critical at longer sequence lengths, as memory constraints limit batching across examples. 

(because you can run different batches or examples in parallel or even different directions)

In other words, if you rely on sequences and you need to know the beginning of a text before being able to compute something about the ending of it, then you can not use parallel computing. You would have to wait until the initial computations are complete. This is not good, because if your text is too long, then 

1. it will take a long time for you to process it and 
2. you will lose a good amount of information mentioned earlier in the text as you approach the end.  

Therefore, attention mechanisms have become critical  for sequence modeling in various tasks, allowing modeling of dependencies without caring too much about their distance in the input or output sequences. 
	
the middle part is the final hidden state produced by the encoder.

one approach is to try and provide the decoder with the attention later 

## W1V3: Alignment

	Alignment is an old problem and there was a paper learning to align and translate.
	https://arxiv.org/pdf/1409.0473 2015
https://arxiv.org/abs/1909.02074 2019
	
	Bahdanau et al. 2014: Neural Machine Translation by Jointly Learning to Align and Translate
	berliner = citizen of berlin 
	berliner = jelly dounut
	
	alignment
	
	each word does not translate exactly to another word
	adding an attention layers allows the model to give different words more importance when translating another word.
This is a good task for an attention layer	Developing intuition about alignment:
also check out this page http://phdopen.mimuw.edu.pl/index.php?page=l18w5	in a 2017 talk, Lukasz Kaiser referred to [K,V] as a memory.  
	
	We want to manage information better in our model.
	We keep the information in a memory consisting of keys and values. (It needs to be differentiable so we can use it with back propagation)
	
	Then we put in the query a sequence and in the 
	keys another sequence (depending on the task they may be the same say for summarization or different for alignment or translation) 
	
	By combining Q K using a Softmax we get a vector of probabilities each position in the memory is relevant. weight matrix to apply to the values in the memory.
	
	

	- get all of the available hidden states ready for  the encoder and do the same for the first hidden states of the decoder. (In the example, there are two encoder hidden states, shown by blue dots, and one decoder hidden states.)
	- Next, score each of the encoder hidden states by getting its dot product between each encoder state and decoder hidden states. 
	A higher score means that the hidden state will have more influence on the output. 
	Then you will run scores through softmax, so each score is transformed to a number between 0 and 1, this gives you your attention distribution. 
	- Take each encoder hidden state, and multiply it by its softmax score, which is a number between 0 and 1, this results in the alignments vector. 
	- Add up everything in the alignments vector to arrive at 
	what's called the context vector. 
	
## W1V4: Attention	
	
The attention mechanism uses encoded representations of both the input or the encoder hidden states and the outputs or the decoder hidden states. The keys and values are pairs. Both of dimension NN, where NN is the input sequence length and comes from the encoder hidden states.

Keys and values have their own respective matrices, but the matrices have the same shape and are often the same. While the queries come from the decoder hidden states. One way you can think of it is as follows. Imagine that you are translating English into German. You can represent the word embeddings in the English language as keys and values. The queries will then be the German equivalent. You can then calculate the dot product between the query and the key. Note that similar vectors have higher dot products and non-similar vectors will have lower dot products. The intuition here is that you want to identify the corresponding words in the queries that are similar to the keys. This would allow your model to "look" or focus on the right place when translating each word.

We then run a softmax:

$$   softmax(QK^T )  $$

That allows us to get a distribution of numbers between 0 and 1. 

We then would multiply the output by V. Remember V in this example was the same as our keys, corresponding to the English word embeddings. Hence the equation becomes

$$ softmax(QK^T )V  $$
	
In the matrix, the lighter square shows where the model is actually looking when making the translation of that word. This mapping should not necessarily be one to one. The lighting just tells you to what extent is each word contributing to the input that will be fed into the decoder. As you can see several words can contribute to translating another word, depending on the weights (output) of the softmax that will be used to create the new input. 
a picture of attention in translation with English to German	  An important thing to keep in mind is that the model should be flexible enough to connect each English word with its relevant German word, even if they do not appear in the same position in their respective sentences. In other words, it should be flexible enough to handle differences in grammar and word ordering in different languages.
	In a situation like the one I just mentioned, where the grammar of foreign language requires a difference word order than the other, the attention is so flexible enough to find the connection. The first four tokens, the agreements on the, are pretty straightforward, but then the grammatical structure between French and English changes. Now instead of looking at the corresponding fifth token to translate the French word zone, the attention knows to look further down at the eighth token, which corresponds to the English word area, glorious and necessary. It's pretty amazing, was a little matrix multiplication can do.
	So attention is a layer of calculations that let your model focus on the most important parts of the sequence for each step. Queries, values, and keys are representations of the encoder and decoder hidden states. And they're used to retrieve information inside the attention layer by calculating the similarity between the decoder queries and the encoder key- value pairs. 
	
## Evaluation for Machine Translation	
### BLEU

The closer the BLEU score is to one, the better your model is. The closer to zero, the worse it is. 	
To get the BLEU score, the candidates and the references are usually based on an average of uni, bi, tri or even four-gram precision. To demonstrate, I'll use uni-grams as an example. Look at the following table:	
	
You would sum over the unique n-gram counts in the candidate and divide by the total number of words in the candidate. The same concept could apply to unigrams, bigrams, etc. One issue with the BLEU score is that it does not take into account semantics, so it does not take into account the order of the n-grams in the sentence.	

### ROUGE 	

Another similar method for evaluation is the ROUGE score which calculates precision and recall for machine texts by counting the n-gram overlap between the machine texts and a reference text.  Here is an example that calculates recall: 

Rouge also allows you to compute precision as follows: 
	
BLUE	
ROUGE	
Transformers for sequential	Text summarization
	autocompletion
	named entity recognition
	question and answering
	translation
	chat bots
	sentiment analysis
	text classification
	character recognition
	spell checking
	GPT2, BERT, T5 
	T5
	translation classification Q&A , regression, summarization
	
	Tranlate 
English to German	the word embeddings lets us identify similar words across languages.
	query is the German words -- and the english words are the keys. 
	each key is assigned probability that it is similar to the query and this is called the attention weight.

The query is then assigned the weighed sum of the keys. 
	  word embeddings times the word their weights.
	Formally we have three matrices 
	
	
	L_K is the number of words in the Key
	L_Q is the number of words in the Query
	
	
	Q - query = [ G_1, ... , G_L_Q] G are embedding column vectors for German words
	K key = [E_1 ... E_L_K]
	V value
	
	D the embedding dimension
	
	K are embeddings of English words
	Q are embeddings of German words
	
	attention weights are like  are alignment scores.
	
	softmax(QK^T )  is the probaility of alignment
	
	 
I am happy:	
	
	
Positional encoding	Non RNN require explicit position encodings
	these can be leaned representation or engineered.
	Transformers use position encoding or biased attention weights based on distance.
Shaw et all 2018 Self-Attention with Relative Position Representations	
	Q,K,V
	K,V is a distributed memory with key and value. like a hash
How does multiheaded attention make the different heads learn different things.	head noun
head verb
coreference resolution
	
Week 3	
	
	Evolution
	CBOW in Word2Vec - Issue: Fixed window we want all the context
	ElMo - Bidirectional LSTM - Issue long term dependency
GPT2 - issue: unidirectional. only looks back
	BERT - just encoder - biderctional, multi mask learning
	T5 - Encoder Decoder - multi-task learning
2013 Word2Vec Google
CBOW & Skip grams	
2014 Glove Stanford	. GloVe: Global Vectors for Word Representation. [pdf] [bib]
2017 fasttext Facebook	CBOW 
	morphological via sub words

	Algorithm of fasttext is based on these two papers:[8]
	• Enriching Word Vectors with Subword Information , Piotr Bojanowski, Edouard Grave, Armand Joulin and Tomas Mikolov, 2016
	• Bag of Tricks for Efficient Text Classification, Armand Joulin, Edouard Grave, Piotr Bojanowski, Tomas Mikolov, 2016
2018 ELMO Allen Institute for AI	ELMo - 
	Character based
	Bidirectional LSTM - 
	Issue: long term dependency is weak due to vanishing gradient and information loss.
GPT 	Encoder only with left context




Bert	uses 
2020 T5	uses a label to specify task
	uses task specific bidirectional lstm to build the embeddings

BERT 	Decoder only

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
	
	


	
