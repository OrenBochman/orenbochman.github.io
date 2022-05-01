---
layout: post
title: What is in a citation
date: 2021-09-24 00:00:00 +0300
description: Creating Citation Web Components
img: cover/python.jpeg
fig-caption: Marketing Research models null
tags:
  - data science
  - statistics
  - marketing
bibliography: delphi_method.bib
lastmod: 2022-05-01T05:00:01.182Z
---

# TLDR
Is there a port of Excel 2019 for Marketing Statistics ?


# Sample Size, Mean, Standard Deviation, and Standard Error of the Mean

Let's start with some data:

``` python
# importing pandas as pd
import pandas as pd

# Creating the data frame
df = pd.DataFrame({
    "A":[12, 4, 5, 44, 1],
    "B":[5, 2, 54, 3, 2],
    "C":[20, 16, 7, 3, 8],
    "D":[14, 3, 17, 2, 6],
    })
# Print the data frame
df
```

## Sample Size

We want a replacement of Excel's `=COUNT()` function to get the sample size n - we need to get the row count in the data frame. Pandas also has a `count()` function but we should use the first item in the shape property.

``` python
df.shape[0]
```

### pitfall:

``df.count()``  will only return the count of non-NA/NaN rows for each column.

## Mean

We want a replacement of Excel's `=AVERAGE()` function to calculate the mean @\bar X@ according to:

@@\bar X = \frac{\sum X}{n}@@

``` python
# Print the data frame
df.mean(axis = 0)
```
## Standard Deviation

We want a replacement of Excel's `=STDEV()` function to calculate the mean @\bar X@ according to:


@@ SD = \sqrt { \frac{\sum {(X-\bar X)^2}}{n-1}}@@

``` python
df.std(axis = 0) 
```

##  Standard Error of the Mean

In this case there is no built in formula in excel for this. It would be calculated with an ugly formula that looks like: `=STDEV()\SQRT(COUNT())` to calculate the @SE@ according to:

@@ SE =  \frac{SD}{\sqrt{n}}@@

``` python
# find standard error of the mean of all the columns
df.sem(axis = 0)

```


