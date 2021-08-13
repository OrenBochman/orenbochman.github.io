---
title: Bayesian agents
layout: post
date: 2021-04-14 18:16:16 +0300
categories:
    - idea
tags:
    - game theory
    - bayesian games
    - sub-perfect bayesian equilibrium
author: Oren Bochman
img: cover/notes-formulas.jpg
fig-caption: Notes about ... Bayesian games
---

Let's try to define a KR framework for a Bayesian agent.

A starting point is that instead of using large monolithic context frames which are difficult to handle, and inefficient to process we use a notion of *context splitting* to put together smaller, more flexible units.
Embeddings that are good representation would be easier to easier to acquire on short context. And hopefully if with a little luck we could put them together into a package that feeds different attention heads allowing  few-shot learning to proceed.

<div class="mermaid">
erDiagram    
    Thematic-Role-Frame {
    verb move-object
    agent Alice
    object wedge
    destination block
    }    
    Thematic-Role-Frame ||--|| State-Change-Frame : induces     

    State-Change-Frame {
    object alice
    destination happy
    }
</div>

So this is splits cause action from its outcome.

Baysan Games and Sub

In a bayesian game there are a number of constructs, lets put them into a pro-ontology

- state of the world:
    - information 
        - what moves have been made.
        - what types each player is.
        - other information.
    - information sets:
        - set of agent who are privy to a bit of info.
    - contrafactuals:
        - competing hypothesis regarding the state of the world.
    - incomplete information:
        - players may be unaware of other player's type,moves and strategy.
    - uncertainty
        knowledge is modeled using distribution.
- agents:
    - type which determines a strategy
    - information
- a strategy profile:
    - for each type their full strategy
    - simple strategy
    - complex strategy
    - utility (payoffs driving an agent's preference)
- population dynamics
    - the number of a agent at a given type (based on their score at the previous round)

<div class="mermaid">
erDiagram    
    Action-Frame {
    verb move-object
    agent Alice
    object bullet
    destination Bob
    tool gun
    visibility universe
    }

    Action-Frame ||--|| State-Change-Frame : induces
    Action-Frame ||--|| Agent-Frame_1 : participates
    Action-Frame ||--|| Agent-Frame_2 : participates
    Action-Frame ||--|| Information-Set-Frame : visibility

    State-Change-Frame {
    object alice
    destination angry
    info-set universe
    payoffs Alice_1__Bob_0
    }

    Information-Set-Frame{
    name universe
    members Alice_Bob
    }

    Agent-Frame_1 {
    name Alice
    type robber
    info json_data1
    }

    Agent-Frame_2 {
    name Alice
    type sherif
    info json_data1
    }

    Info-Frame_0 {
    Alice-Type any
    Bob-Type any
    }

    Info-Frame_1 {
    Alice-Type robber
    }

    Info-Frame_2 {
    Bob-Type sheriff
    }


    State-Change-Frame ||--|| Information-Set-Frame : visibility

</div>

How many information sets for k players?
There are @2^k@ and they form the power set of @\{a \space ... \space k\}@.

A Bayesian game usually start with a move by nature which assigns types to players @m_n: p \to \tau@.

## Extensive form game

>The most important TikZ command used to draw game trees is:
`...node(coordinate label)[drawing/style options] at(coordinate) {node texts}...;`
> The command `child{}` is used to specify a successor of a (parent) node.
>  Note that if the style of a particular branch needs to be modified,
such as adding texts to the branch or changing its color, edge from parent must be put
after node{} and all of its children.


<script type="text/tikz">
\usetikzlibrary{calc}
\tikzset{
        % Two node styles for game trees: solid and hollow
        solid node/.style={circle,draw,inner sep=1.5,fill=black},
        hollow node/.style={circle,draw,inner sep=1.5}
    }
\begin{tikzpicture}
    \node(0)[hollow node]{root}
        child{node[solid node]{}}
        child{node[solid node]{}};
    \node[above]at(0){Nature}; 

\end{tikzpicture}
</script>



## info sets







<!--script type="text/tikz">
% Node styles
\tikzset{
    % Two node styles for game trees: solid and hollow
    solid node/.style={circle,draw,inner sep=1.5,fill=black},
    hollow node/.style={circle,draw,inner sep=1.5}
}
\begin{tikzpicture}[scale=1.5,font=\footnotesize]
    % Specify spacing for each level of the tree
    \tikzstyle{level 1}=[level distance=15mm,sibling distance=35mm]
    \tikzstyle{level 2}=[level distance=15mm,sibling distance=15mm]

% The Tree
\node(0)[solid node,label=above:{$P1$}]{}
    child{node(1)[solid node]{}
        child{node[hollow node,label=below:{$(a,b)$}]{} edge from parent node[left]{$C$}}
        child{node[hollow node,label=below:{$(c,d)$}]{} edge from parent node[right]{$D$}}
        edge from parent node[left,xshift=-3]{$A$}
    }
    child{node(2)[solid node]{}
        child{node[hollow node,label=below:{$(e,f)$}]{} edge from parent node[left]{$C$}}
        child{node[hollow node,label=below:{$(g,h)$}]{} edge from parent node[right]{$D$}}
        edge from parent node[right,xshift=3]{$B$}
};
% information set
\draw[dashed,rounded corners=10]($(1) + (-.2,.25)$)rectangle($(2) +(.2,-.25)$);
% specify mover at 2nd information set
\node at ($(1)!.5!(2)$) {$P2$};
\end{tikzpicture}
</script>

<script type="text/tikz">
\begin{tikzpicture}
    \node(0){root}
    child{node{child 1}}
    child{node{child 2}
        child{node{grandchild 1}}
        child{node{grandchild 2}}
    };
\end{tikzpicture}
</script-->