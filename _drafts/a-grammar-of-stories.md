---
layout: post
title: A grammar for story
date: '2021-12-25T09:53:55.247Z'
lastmod: '2021-12-28T16:38:08.424Z'
description: What is in a story ? Developing a grammar
img: cover/chaotic-time-series.jpeg
fig-caption: null
tags:
    - storytelling
    - NLP
    - grammar of story
---
 
# TLDR

More of a thought experiment on extracting and matching or aligning landmarks in long documents. The gist being that I'm interested in extracting landmarks for high levels of structures in NLP for summarization and question answering alignment and related 

# Questions & Tasks

 The first question is:
 1. What large sale structures lie above pragmatics and discourse which generate longer term relationships and hierarchies of meaning ? 

 In the first I am interested in landmarks - which are *interesting* locations in the text corresponding to macrostructures and their boundaries. Since several levels for structure in longer documents, they induce a topology which suggest it is possible to establish a partial order and even a hierarchy for such landmarks.
 
 A brief answer is that scripts, plots and mise-en-scène should offer a wealth of structure. However, I go into greater detail bellow. 
 
 We cannot easily locate or even demarcate their boundaries. In the sense that people with a degree in literature, would be challanged to consistently locate these structures and agree on their boundaries. Furthermore, it is a stretch how well we could define a similarity between stories - even the same story across different media.  don't have an easy way to tag, classify, cluster, compare, and measure them we look for IR techniques to handle these. But 

 1. How can we learn these in an unsupervised fashion.
 





# What is a story?

In cognitive AI a story could be simply represented by a nested body of scripts. But if I had to break down cinematic storytelling for a classroom of students, I would probably use the following hierarchy:

- The bit (a back and forth unit in action or dialogue).
- The shot (demarcated by `the cut`)
- The scene (demarcated by `space and time`)
- The sequence & set-piece (unified by some action ongoing across multiple locations).
- The sub-plot (a single storyline when multiple storylines are used - often used to contrast the main plot line).
- The act (a collection of beats that tells a chapter of the story ending with a turning point where the story might be interrupted for a break).
- The beat (a story landmark).
- The story.

One challenge in trying to capture these in a classifier is that most of these organizing elements are not written down explicitly and that tagging them is a challenge, as their labels and attributes are often nuanced and subtle.

A couple caveats apply to the above:
1. The 'bit' is usually also called a beat.  I renamed it, to avoid ambiguity with the more commonly used term referring to the level in a beat-sheet. Bits are express a smaller, atomic unit of story. They could be expressed as frames or semantic network and even embeddings in some latent space.
1. The shot is not something that appears in NLP, but it is part of the shooting script. I added this as scenes are easier to understand if we can break them down and shots are easy to spot where the editor used a cut. Alas, the invisible cut, the moving master, and so-called one take movies like Rope (1948), "Macbeth" (1982), Timecode (2000), "Russian Ark" (2002), "La Casa Muda" (2010) and "Silent House" (2012), "Fish & Cat" (2013), "Birdman" (2014), "Victoria" (2015), "Son of Saul" (2015), "Utøya: July 22" (2018), "Blind Spot" (2018), "1917" (2019) all try to tell their story using singe shot or a few extended ones. Most people familiar with `moving masters` and `master shots` will recognize that they are a cleverly choreographed sequenced that reconstructs a sequence of shots in a single take. These shots save on setups and sacrifice lightening to enhance the continuity. I think that we might re-classify them as a sequence of shots (How? Using a regime change model). Alfred Hitchcock, who originated this practice later called Rope an 'experiment that didn't work out', with many critics voicing similar sentiments.
# Three Act Structure 

The three act structure is a rather simplistic abstraction for screenwriting. 

## Script 1 : Three act structure:

1. setup
1. confrontation
1. resolution

This is associated the most common type of sceenwriting for holywood. Many texts that cover this like to split act 3 in the middle giving a 4 act stucture:

1. setup
1. confrontation
1. resolution

Robert McKee points out the European screenplays tend to skip the setup, suggesting the following:

## Script 2: European structure:

1. confrontation
1. resolution



# Mythical structure & the Monomyth

Mythical structure originally called the Monomyth is a term coined by Joseph Campbell and mostly ignored by other researchers. Commonly referred to as "The Hero's Journey," it examines the stages of the hero who goes on an adventure, faces a crisis and wins, then returns victorious. 

For our purposes, mythical structure offers a richer set of landmarks than the three act structure. 

# Script 1: Heroes Journey

1. THE ORDINARY WORLD - This is the original world of the hero, which "suffers from a symbolic deficiency." The hero is lacking something, or something is taken from him. 
2. THE CALL TO ADVENTURE - The hero is given a challenge, problem, or adventure. Often it appears as a blunder, or chance. This stage establishes the goal of the hero.
3. THE REFUSAL OF THE CALL - The (often) reluctant hero has to be set along the correct path. He must weigh the consequences and be excited by a stronger motivation to proceed further.
4. MEETING WITH THE *MENTOR* - The hero encounters a wise figure who prepares him for the journey. This figure (or item) gives advice, guidance, or an item, but cannot go with the hero. 
5. CROSSING THE THRESHOLD - The hero has committed to his task, and enters the `special world`. Often he is met by a threshold guardian. 
6. TESTS, ALLIES, AND ENEMIES - In the special world, the hero learns the new rules by meeting people and obtaining new information. There is often a "local watering hole" component. This is where the true characteristics of the hero are revealed. 
7. APPROACH TO THE INNERMOST CAVE - Now our hero, and often his allies, have come to the edge of the dangerous place where the "object of the quest" is hidden. This stage often is the land of the dead. 
8. THE SUPREME ORDEAL - The hero faces danger, often a life-or-death moment that is either physical or psychological. 
9. REWARD, OR SEIZING THE SWORD - After surviving, our hero takes possession of the object, typically a treasure, weapon, knowledge, token, or reconciliation. 
10. THE ROAD BACK - The hero must now deal with the consequences of their actions. They may be pursued by remaining forces. They now face the decision to return to the ordinary world. 
11. RESURRECTION - One final test is required for the purification and rebirth of the hero. Alternatively, it may be a miraculous transformation.
12. RETURN WITH THE ELIXIR - The triumphant hero returns to the ordinary world bearing the elixir. Common elixirs are treasure, love, freedom, wisdom, or knowledge. A defeated hero is doomed to repeat the lesson. 

One interesting point about this script is that we can map a great many stories into it if we don't worry too much about the order. Michael Hauge and others refer to a feminine mode story with a protagonist thet called the maiden who unlike the Hero has to stay behind and deal with a situation once the hero has left on his quest. One can recall the story of Penelope, the wife of the king of Ithaca Odeyssus, who had stayed at home and had to fend off many suiters who wanted her hand to gain the kingdom when her husband was delaye for many years in his return from the Trojan war. MAUREEN MURDOCK’S mapped an alternative version of the hero's journey called the heroine's journey. This can be adapted into a second script.

# Script 2 - HEROINE'S JOURNEY

1. SEPARATION FROM THE FEMININE - The Heroine seeks to separate from the mother or other older woman, who represents the old order and the status quo. Often she feels guilt at surpassing this figure. 
2. IDENTIFICATION WITH THE MASCULINE: THE GATHERING OF ALLIES - The search for a woman's role through acceptance by male norms-- leadership, success, and power in the workplace. She often chooses her own path instead of the one set before her. 
3. THE ROAD OF TRIALS: MEETING OGRES AND DRAGONS - Many of the trials that the heroine must face are of her own making self-doubt, fear, etc. She must overcome both outward adversity from the men and other people in her life, but ultimately must overcome herself. 
4. EXPERIENCING THE BOON OF SUCCESS - After achieving the power, recognition, and/or success that she sought, the Heroine will drive herself to a state of unrest. She has no true satisfaction in anything that she does, but yet cannot say no to using up more of her time. She must find the courage to be herself; limited. 
5. SPIRITUAL ARIDITY: DEATH - Weary, the heroine looks for meaning, and yet, she fears becoming invisible, like the women before her. Her success was temporary or has been unsatisfactory. The way of success she has been traveling is no longer enough.
6. INITIATION AND THE DESCENT TO THE GODDESS - Usually this occurs as a role ends, often a life changing loss. The heroine is confused, sad, alone, angry, and often raw. But by looking inward she can reclaim and rebuild herself. She is facing a crisis and fallen into despair.
7. URGENT YEARNING TO RECONNECT WITH THE FEMININE - Accepting the loss of the relationship with the older female, she often begins to focus on community. The heroine cannot go back, but if she faces her fear she can continue to move forward. 
8. HEALING THE MOTHER/DAUGHTER SPLIT - The heroine finds a new strategy and reclaims her own value. With a new perspective she is able to continue forward. 
9. HEALING THE WOUNDED MASCULINE - By accepting the self and letting go of the power, money, and success she sought she can make peace with herself. The heroine must accept both sides of her nature. 
10. INTEGRATION OF THE MASCULINE AND FEMININE - By accepting both sides of her nature she has gained a higher self concept. 

One task to expand on these script is to construct a probabilistic transition matrix between their steps. This nondeterministic finite automaton NFA or a Hidden Markov model (HMM) will then be able to generate a story.

But this will only generate the story in very broad strokes, something called a beat sheet template. 

A story grammar should add some characters to fulfill roles in each step. These characters will significantly expand the number of stories that can be generated. 

# Roles and Archtypes

1. HERO - A hero willingly sacrifices their needs for others. They are actively learning and doing, and undergo transformation. They are flawed beings that have universal qualities. 
2. MENTOR - A teacher or trainer who aids the hero by teaching and protecting them. The mentor motivates the hero to overcome their fears and also prepares them for the journey.
3. THRESHOLD GUARDIAN - A character who serves to keep the unworthy from entering. They cluster around thresholds, and can be overcome by being passed or made into an ally. These guardians serve to test the hero's character and commitment to the journey.
4. HERALD - A character (or item) that issues challenges and announces coming change. Heralds serve to motivate the hero into action.
5. SHADOW - This aspect represents the "dark side;" villains, antagonists, and enemies. These characters often do not think of themselves as villains and serve to challenge the hero. By being a worthy opponent they create conflict to bring out the hero's best. (These tend to come in a hierarchy). In some stories the shadow may be the hero's own dark side. 
6. TRICKSTER - The embodiment of mischief, this character desires to create change. They serve to ground the hero by pointing out their follies and serve as comic relief. Tricksters are frequently a catalyst who causes healthy transformations. 
7. SHAPE SHIFTER - A shifting or unstable character, often of the opposite sex. They mislead the hero and act as a catalyst of change by bringing in doubt and suspense. 

The Monomyth uses the above few stereotype characters which are called archtypes, but there are many variants as well as other used in storytelling.

[tvtropes.org](https://tvtropes.org/pmwiki/pmwiki.php/Main/ArchetypalCharacter) lists dozens more :

All-Loving Hero, Anti-Hero, The Archmage, Audience Surrogate, Barefoot Sage, Blind Seer, Blue-Collar Warlock, Bruiser with a Soft Center, The Champion, A Chat with Satan, The Chosen One, The Chooser of The One, Classical Hunter, Classic Villain, Commander Contrarian, The Conscience, The Corrupter, The Cynic, The Dragonslayer, The Drunken Sailor, Dumb Muscle, Eccentric Mentor, Enigmatic Empowering Entity, Evil Overlord, The Fair Folk, False Prophet, Father Neptune, The Ferryman, The Fool, Fool for Love, Genki Girl, Gentle Giant, The Good King, Granny Classic, The Grotesque, Heroic Wannabe, The High Queen, Higher Self, Hunter of Monsters, Ideal Hero, The Idealist, Ineffectual Loner, Jeanne d'Archétype, Keet, The Kirk, The Klutz, Knight in Shining Armor, Lady and Knight, Loser Archetype, Lovable Rogue, Madonna Archetype, Magical Barefooter, The McCoy, Mentor Archetype, Messianic Archetype, Mock Millionaire, Modern Major General, Moses Archetype, My Girl Back Home, Obstructive Bureaucrat, Oedipus Complex, Old Soldier, The Paladin, The Paragon, The Patriarch, Person of Mass Destruction, The Pollyanna, Powers That Be, Prince Charming, Princess Classic, A Protagonist Shall Lead Them (a.k.a. Leader Archetype) Rebel Leader, Rebellious Spirit, Reluctant Monster, Satanic Archetype, Seeker Archetype, Shadow Archetype, Sidekick, The Sociopath, The Spock, Star-Crossed Lovers, The Storyteller, Turn Coat, Wicked Stepmother, Wicked Witch, Witch, Wizard, Wolf Man, World's Best Warrior, World's Most Beautiful Woman, World's Strongest Man). 

For our purposes it would be beneficial to have a list/hierarchy of archetypes deriving from a few stereotypes.
Also, it would be great if we could classify a character given their recent dialogue and action.

Some genres, like action and horror love their stereotypes and eschew more dramatic strucure. In contrast, dramatic story telling imbues the characters with an arc a trajectory in which he struggles to overcome a flaw. A common paradigm for this They need to come to terms and overcome their flaw in order to complete their quest and fulfill their hidden inner drive.

# Dramatic character arc script:

1. Initial (hidden) inner motivation and (outer motivation).
1. Pursuit of goal.
1. Limited success.
1. Dilemma: growing conflicts goal and inner motivation.
1. Discovery of the flaw - disillusionment with outer motivation.
1. Search for a new concept. 
1. Meeting with the mentor.
1. Abandoning the outer motivation.
1. Pain and struggle.
1. Discovery of a new concept.
1. Relapse
1. re-commitments to the new concept
1. growth
1. harmony

As pointed out earlier in some genres like action adventure, characters like Indiana Jones and Jack Rayn come all arched out and never have to change. At least until their story is rebooted and rewritten with dramatic tools.

In T.V. series there is an equilibrium point - characters generally get stuck permently in a certain point in thier arc. 


In more advanced story telling, may start with some role and then transition them into another. A second technique is to use a hero team - where no one person is the protagonist. A further level of complexity arises with stories with multiple story lines and framing devices.

# Terminology

- Plot point
- Turning point
    - Soft turning point
    - Hard turning point
- Backstory - what happened before the story starts (primarily background on the protagonist)
- Exposition - 
- Action -
- Dialogue -
- Description -
- Deduction - 
- Empathy - making the audience identify with a character.
- Sympathy - making the audience like the character
- Ordinary world - the `world` where the story starts and ends
- Special world - the `world` where the main action takes place
- Character arc - the trajectory of a charcter's growth.
- Higher Self concept - a better new understanding of herself

# References

- https://libguides.gvsu.edu/monomyth#:~:text=The%20Monomyth%20is%20a%20term,and%20wins%2C%20then%20returns%20victorious.
- https://heroinejourneys.com/heroines-journey/
- https://tvtropes.org/pmwiki/pmwiki.php/Main/ArchetypalCharacter
