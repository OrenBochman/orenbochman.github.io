---
layout: post
title: Hackton session link dumps & notes
date: 2021-08-13 00:00:00 +0300
description: Wikipedia hackathon nores
img: dice-distribution.jpg 
fig-caption: # Add figcaption (optional)
tags: [modelling, chat bot, wikipedia, support] 
---

# Misc stuff

The main organizers for the Wikimania 2021 hackathon are Elfego Solares (WMF), Srishti Sethi (WMF) and Léa Lacroix (WMDE). Feel free to contact us if you have any questions or suggestions.

- [Top level page](https://wikimania.wikimedia.org/wiki/2021:Hackathon)
- https://phabricator.wikimedia.org/project/board/5402/
- [Wikidata:Lexicographical data](https://www.wikidata.org/wiki/Wikidata:Lexicographical_data)
- https://www.wikidata.org/wiki/Wikidata:Lexicographical_data
- https://www.wikidata.org/wiki/Wikidata:Lexicographical_data/Documentation/Languages
- https://meta.wikimedia.org/wiki/Wikiproject_Witches

## Some Tutorials

- ["Where can I run this? An introduction to Wikimedia Cloud Services"](https://www.youtube.com/watch?v=RcZvwKEgDV4&list=PLeoTcBlDanyNQXBqI1rVXUqUTSSiuSIXN&index=6&ab_channel=MediaWiki) by andrewbogott & bstorm
- [Intro to PAWS for Python beginners - Chico Venancio](https://www.youtube.com/watch?v=AUZkioRI-aA&list=PLeoTcBlDanyNQXBqI1rVXUqUTSSiuSIXN&index=8&ab_channel=MediaWiki)
- [Intro to Toolhub for tool maintainers](https://www.youtube.com/watch?v=iMEATSNBSa0&list=PLeoTcBlDanyNQXBqI1rVXUqUTSSiuSIXN&index=6&ab_channel=MediaWiki) - bd808 (video, 25min)
- [Untangling Mediawiki](https://wikimania.wikimedia.org/wiki/2021:Hackathon/Schedule#:~:text=Untangling%20Mediawiki) - Daniel Kinzler (video, 20min)
- [Wikibase starting from scratch](https://www.youtube.com/watch?v=7kUUarBN2vM&list=PLeoTcBlDanyNQXBqI1rVXUqUTSSiuSIXN&index=2&ab_channel=MediaWiki) Luca Mauri (video, 20min)
- [Lua modules training](https://www.youtube.com/watch?v=pcpdKmxPuJg&list=PLeoTcBlDanyNQXBqI1rVXUqUTSSiuSIXN&index=3&ab_channel=MediaWiki) - tomaomg (video, 40min)
- [An introduction to user scripts and gadgets](https://www.mediawiki.org/wiki/Special:MyLanguage/Gadget_kitchen) (slides)
- [Opportunities for new developers in the Wikipedia community](Opportunities for new developers in the Wikipedia community) including an overview of the technical areas and projects - Srishti Sethi (video)
- [Resources, tools, and recommendations](https://meta.wikimedia.org/wiki/Small_wiki_toolkits/Starter_kit) in technical areas relevant to smaller wikis that are just getting started
# mwSQLDump

https://mwsql.readthedocs.io/en/latest/index.html


# [Olympics data-thon and edit-a-thon](https://phabricator.wikimedia.org/T288171)

Session about importing missing Olympics data into wikidata

Show working with openrefine!

## Open Refine

Jane says:Nice use of string use to reconcile metadata but of course the weak link is when the spelling is slightly different in titles. I guess a carry-over of the same problem in Wikipedia versus Wikidata

- [120 years of Olympic history: athletes and results](https://www.kaggle.com/heesoo37/) kaggle dataset cc0 dataset (includes a scraper for https://www.sports-reference.com/) which could help with handling other data like world cup, winter games, summer games, etc.

## Listeria
- [listeria bot](https://listeria.toolforge.org/)
- https://en.wikipedia.org/wiki/Template:Wikidata_list
- [Magnus Manske made Listeria to create lists on Wikimedia projects]

# The Best Wikidata Gadgets - 1Veertje (30 min)	

- shortcuts to prevent RSI
- https://reasonator.toolforge.org/?q=Q108067400&lang=en
- [Ranker](https://www.wikidata.org/wiki/User:Lucas_Werkmeister/Ranker)
- https://www.wikidata.org/w/index.php?search=.js&title=Special%3ASearch&profile=advanced&fulltext=1&ns2=1

# [Wikidata Pink Pony Session](https://phabricator.wikimedia.org/T288331) [Etherpad](https://etherpad.wikimedia.org/p/WikimaniaPinkPony2021) 

Orgenized by:

- Mohammed Sadat, 
- Lydia Pintscher,
- Léa Lacroix 
- Zybszko Papierski - WMF search platform 
- query service short urls
- http://shtooka.net/
- https://bodh.toolforge.org/

## Paws + Pywikibot

- https://wikitech.wikimedia.org/wiki/PAWS/PAWS_and_Pywikibot
- https://public.paws.wmcloud.org/User:SRodlund_(WMF)/Using-Pywikibot-with-Paws.ipynb

- https://meta.wikimedia.org/wiki/Abstract_Wikipedia
- cloud vps
- ORES it has its own project but it runs on the  production cloud.
- https://public.paws.wmcloud.org/User:99of9/Covid-19.ipynb

- [Deep Speech](https://github.com/mozilla/DeepSpeech)