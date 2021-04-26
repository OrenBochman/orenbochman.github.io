
# Text Summarization

## Ontology

- Types 
    - Based on Input Type 
        - Single-document 
        - Multi-document 
    - Based on Context 
        - Generic 
        - Domain Specific
        - Query  (e.g. from IR) 
    - Based on Output Type 
        - Extractive - Sentences selected from the text.
        - Abstractive - Generated from scratch.
- Evaluation 
    - Types
        - Extrinsic techniques: Given a down stream task can a summary replace a document
        - Intrinsic  techniques: Gold standard comparison
    - Criteria
        - Topic coverage 
            - Balance 
            - Non-redundancy 
        - Readability 
            - Structure and coherence 
            - Grammar
            - Salience 
        - Length
    - Metrics
        - precision, recall, f-score
            - make more sense for IR settings, i.e. when we have a query.
        - utility
        - ROUGE-N
        - pyramid

## Algorithms

### Positional method
- [Man-made index for technical literature - An experiment (P.Baxendale in 1958)](https://dl.acm.org/doi/10.1147/rd.24.0354) 
- Extract first and last sentence of a paragraph.

### Luhn's method 
- [The automatic creation of literature abstracts (H.P. Luhn 58)](https://courses.ischool.berkeley.edu/i256/f06/papers/luhn58.pdf)
- Frequency of content terms 
- Data pre-processing 
    - Stop words removal 
    - Stemming (cats cat) 
- Select sentences with highest concentrations of salient content terms 
- $ Score = \frac{\text{Salient Words}^2}{  \text{Terms in chunk} }$

### Edmundson's method 
- [New Methods in Automatic Extracting (H. P. Edmundson in 1968)](https://courses.ischool.berkeley.edu/i256/f06/papers/edmonson69.pdf)
- Features:
    - Position (P) 
    - Word frequency (F) 
    - Cue words (C) 
    - Bonus words — pointing to the important sentence 
    - Stigma words — negative effect on the sentence importance 
    - Null words — neutral or irrelevant to the importance of the sentence 
    - Document structure (S) 
- Linear combination of these 4 features: $ score = \alpha_1 P + \alpha_2 F + \alpha_3 C + \alpha_4 S $

### FRUMP 
- [Prediction and Substantiation: A New Approach to Natural Language Processing ( G. deJong, 1979)](https://onlinelibrary.wiley.com/doi/pdfdirect/10.1207/s15516709cog0303_4)
- FRUMP : Fast Reading Understanding and Memory Program
- Knowledge based summarization system.
- Template filling approach based on UPI news stories.
- First abstractive method.
- 50 sketchy scripts 
    - Contain important events that are expected to occur in a specific situation 
    - Summarizer looks for instances of salient events, filling in as many as possible.
- Issues: 50 scripts were not enough.


### Naive Bayes Classier 
- [A Trainable Document Summarizer (Kupiec et al. in 1995)](https://courses.ischool.berkeley.edu/i256/f06/papers/kupiec95.pdf)
- First trainable method
- Training set: original documents and manually created extracts 
- Used **Naive Bayes** classifier: $ P (s \in S \vert F_1 ... F_k) = \frac{P (F_1 ... F_k \vert s \in S ) P(s \in S )} {P (F_1 ... F_k)} $
- By assuming statistical independence of the features it reduces to: $  P (s \in S \vert F_1 ... F_k)  = \frac{ \displaystyle \prod_{j \in J} P (F_j \vert s \in S ) P(s \in S )} { \displaystyle \prod_{j \in J} P (F_i)} $
- Performance:
    - For 25% extracts - 84% precision 
    - For smaller summaries - 74% improvement over *lead summaries*

####  Maximum Entropy Classier
- In 2002, Miles Osborne published a paper [Using Maximum Entropy for 
Sentence Extraction](https://www.aclweb.org/anthology/W02-0401.pdf)
- Maximum entropy models perform better than Naive Bayes approach.

### MMR
- [The Use of MMR, Diversity-based Reranking for Reordering Documents and Producing Summaries (Introduced by Carbonell and Goldstein in 1998)](https://www.cs.cmu.edu/~jgc/publication/The_Use_MMR_Diversity_Based_LTMIR_1998.pdf)
- MMR: Maximal Marginal Relevance (MMR)
- Query based summaries.
- $\text{MMR} = \arg \max[\lambda Sim_1(s_i,Q)-(1-\lambda) \max Sim_2(s_i, s_j)]$
- Where:
    - @Q@ - user query 
    - @R@ - ranked list of sentences 
    - @S@ - already retrieved sentences 
    - @Sim@ - similarity metrics 
    - @\lambda@ - hyper-parameter controlling importance of query or other sentence. 

### Mead 

- [Centroid-based summarization of multiple documents: sentence
extraction, utility-based evaluation, and user studies (Radev et al. 2000)](https://arxiv.org/pdf/cs/0005020.pdf)
- Centroid-based method 
- Single and multi document 

### LexRank 
-[LexRank: Graph-based Lexical Centrality as Salience in Text Summarization (Erkan and Radev in 2004)](https://www.cs.cmu.edu/afs/cs/project/jair/pub/volume22/erkan04a-html/erkan04a.html)
- Graph based method.
- Lexical centrality.
- Similar to page rank where pages vote for each other:
- Connecting nodes based on inter-sentence cosine similarity matrix 
- uses [eigenvector centrality](https://en.wikipedia.org/wiki/Eigenvector_centrality) from this matrix.
- the sentence with the highest rank would be linked to many other important sentences. Are they very similar or not ?
- a threshold is used to determine how many connected components should are used.