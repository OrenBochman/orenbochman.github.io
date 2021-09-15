---
layout: post
title: Pandas Challenged?
date: 2020-03-04 00:00:00 +0300
description: Just a  little rant on Pandas various contexts. 
img: cover/python-bg.jpeg
fig-caption: # Add figcaption (optional)
tags: [data-science,#python,#data-wrangling,] 
---

# TLDR

Just a little rant on Pandas. Since pandas is a replacement for excell and sql I'd hope it lets us be more productive than using these. It can be but there is a learning curve and all to often it only saves time on tasks you need to do many times over 

# Pandas Challenged ?

As time goes by I hope to update some of these challenges with solutions I find or develop. If you know of any let me know in the comments below. Once there are comments again !?

I find myself using Pandas more frequently these days here are a few thoughts. I expect that in 2020 certain task should be much easier to do than on 2010 or 2000 but many are still easier in point and click software with minimal coding like Excel, Google sheet or Tableau and this is both a shame and a reason many projects fail to get to production.

Pandas or Point and Click
Pandas is Python's programmatic spreadsheet based on R's DataFrames. R community is very pragmatic and the dataframes have evolved to improve performance and increase agility. They have a tidyverse package and tribbles. Pandas lags behind and while easier to code then R it often requires more code to get things done and the code can get pretty ugly. 
* subsetting by column type
* printing subset rows by criteria of several columns
The first thing I expected is to be able to do tasks I did with excel or google sheets faster and better. What I mean is that I expected to map most tasks from one to the other and to be able to automate faster. Some tasks map better then others.
# Automation
Next I expected I can automate tasks and this is where python shines but again this was often a challenge.
There is a learning curve but after a while I leaned some coding idioms such as pipes that made this somewhat simpler.

## Functional Programming
I also noticed that Pandas provides access to subsets using [rows,cols] operator and the `iloc` and `loc` methods.  I had also expected a modern functional interface to process data using RX style coding via functional primitives like map, flatmap, groupby, zip, filter, and so on. I notched some exist but no one seems to be using them in the idiomatic way. R's tidyverse and Magrit had evolved very quickly in this direction why didn't pandas?

The two biggest disappointments are reports and dashboards.  Reports in excel are a no-brainer. Solid reporting can be essential when taking a data pipeline to production. Dashboards are a both a productivity enhancer and a power multiplier in BI tools like Tableau, Power BI, Google Data Studio, informatica etc. Interactive dashboards can be amazing for exploring datasets that change a lot like marketing. These are all challenges with python and pandas in a Jupyter notebook as a starting point.

While hacking functional programming into pandas should be not to hard I believe that engineering it would be more sensible as it would allow high performance optimizations for larger datasets.

## Reports

I expected to be able to create a tabular display for my data with filtering, sorting, conditional styles, paging, sparklines. Pandas styler does some of these and there are a number of libraries that do paging sorting filtering based on javascript datatables library other allow sparklines and charts based on chartjs. They don't work together - each does its own thing.. But they are so fragile, relying on javascript and breaking as one changes to different notebook. This is a major problem with python - there are many environments and no established method way to get code to work well on most of these.

You might notice that the a big issues is interoperability. Ideally there should be support for reports with:
- set number of rows displayed (all, 10 etc)
- paging 
- field filtering (interactive)
- scrolling to show all columns
- Column
    - visual indication of type (numeric, categorical, ordinal, temporal, time series, geojson)
    - visual summaries
        - barchart or area chart - with tooltips for leading values
        - bars with error indicators
- Sparklines (line chart, histogram, candle chart)
- Pivot tables
    - Binning
    - With sub-aggregates and over all aggregates.
- Conditional formatting (heatmap, barchart)
- Highlighting (missing values, minimum, maximum, median, mode, quartile, outliers, mean &  number of sd, custom maps).
- Sampling of most interesting rows...

# Dashboards

I expected to have an agile methods to create interactive dashboards like I had with R's shiny package. We just basic dashboards would be fine as well. Again there are so many people reinventing the wheel here but no one doing a decent job of it and no way to compose graphs from different libraries in a single notebook. 

I found altair to be the most agile solution for this area but it support layouts of widgets is poor and it relies on vega-light and vega and D3.js and so no support for many common chart types like Pie, Donuts, brushable Parallel coordinates, Spider charts. 

Other options such as Seborn are hard to compose into dashboards or make interactive. There is matplotlib which is a productivity nightmare. 
interface for sharing signals such as input widgets, filtering, brushing,  selecting, panning, zooming etc.
interface for chart and widget composition. Altair uses the | + and  & operators for this.
html widget interface - to handle python to js and js to python data and command flow.
these allow one to brush a chart and modify other charts and subset tables to study high dimensional datasets.

# Optimization

Excel has a solver how easy is it to do the same in python - you need to use scikit learn. So far it does not seem very easy to do even though 
Python provides much better algorithms to do optimization.
Advanced Wrangling
Advanced data wrangling tasks available in power tools like Trifecta and Openrefine like:
text processing are a challenge.
imputing values.
filling missing values by values from above rows.
clustering a column by ngrams and normalizing the values.
filling data using an api lookup.
highlighting data that is out of format
highlighting outliers.
widening rows using a validated index
filling data using html lookup.
I hoped that I could quickly setup pipelines in Python that are agile to construct easy to read and maintain. 
It is possible by requires lots of codes. I wonder if there are some libraries to flatten the learning curve for this?