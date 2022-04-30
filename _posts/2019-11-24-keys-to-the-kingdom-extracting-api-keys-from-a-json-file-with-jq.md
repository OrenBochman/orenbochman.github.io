
---
layout: post
title: Keys to the Kingdom - extract api keys from a json file with jq
date: 2021-11-24 00:00:00 +0300
description: json technique 
img: cover/python.jpeg
fig-caption: # Marketing Research models
tags: [unix, command line, tools, jq, data cleaning, data pipelines, api]
bibliography: sensor_fusion.bib
---

## @command_line - grabbing API keys from a JSON file with jq

Today I'm interested in outlining `jq` which is a Unix command line tool for parsing JSON, which is almost a superpower for at the command line, and I hope to show how it's useful for scripting.

### Motivation

I'm reading this book online called the "Data Science at the Command Line" that I found in a link from Miki Tebeka's PyCon Israel 2018 presentation about writing better python tools, based on the Unix philosophy. This philosophy is outlined in yet another online book, Eric Raymond's "The Art of Unix Programming".

The common thread is about using the command line to rapidly compose agile data pipelines. These tools are highly composable and have a knack for very fast data processing.  Another hallmark of the Unix philosophy is to make a tool that does one thing really well.

Some reasons for doing this kind of DS on the command line:

Using the right tool for the right job speeds up a project and reduces risks of failure. When all a data scientists knows is using JuPyteR notebooks on PySpark they may be "firing a cannon out of a canoe".

One of the greatest challenges today is in putting models into production. Particularly as models and data sets grow and require high performance computing HPC. The challenging to put into production which is often in the interface between DS and DevOps.  The command line is where DevOps lives. Working with containers requires working with the command line.

A second issue is getting faster development cycles. The command line is easy to automate and presents one of the focus for maximizing productivity.

A third reason and perhaps the most compelling is the Unix philosophy about tooling. The more we embrace it, the easier our work will be in the long run.

# Task: Extracting API keys from a JSON file:

I want to get at my API key from a file - to make automate data processing pipelines more robust and secure.

The API keys are in a JSON file called apikeys.json

it looks like

```json
{
"api_name": {
    "key":"value",
    ...
    }
}
```

The trick of course is to have this file structured using some sort of simple schema so that pulling values from NYT, WikiData, Weather etc would use very similar commands.

The command I used is:

> $ cat apikeys.json | jq '.nyt.key'

This returns the key but it is quoted. ie "key"

To remove the quotes I'd use tr with -d to delete and an escaped quote character.

> $ cat apikeys.json | jq '.nyt.key' | tr -d [\"] 

I suppose that a `yaml` file would be simpler to parse and maintain. Doing a bit more research on `jq` I uncovered that although the `tr` trick is useful it is possible to simplify the command using the raw flag -r in the tr command.

> $ cat apikeys.json | jq -r '.nyt.key' 
