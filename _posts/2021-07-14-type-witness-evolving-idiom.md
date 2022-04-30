---
title: A type of Witness and an evolving Idiom
lastmod: 2022-04-30T08:54:12.919Z
description: writing better code = writing more readable code.
date: 2021-07-14T20:40:17.924Z
slug: type-witness-evolving-idiom
draft: "true"
---


Writing better code = writing more readable code.

I code using many programming languages, and I'd like my code to be readable later down the road when it is time to maintain it. When this is not done the project will incur a technical debt.

So what is readable code. Writing lots of comments in the code is not the way to go. Comments within a function should only have to explain what remains unclear when looking at the code. A common example is in the handling of edge cased. Literate programming proponent Donald Knuth recommended using comment blocks to explain the intent/algorithm being employed.

One trade-off that I meet when doing integration rich project is a choice between cross-platform code (something that could be read by a C/C++/Java/JavaScript/Go developer) or idiomatic code which while more concise would be challenging to a newbie.

One such idiom which I first learned in Java is the use of anonymous function say for defining a one off event handler. UI code rich with nested anonymous object made me very uncomfortable decoding what those anonymous objects would have been in a "simpler" world.  However, I noticed all this idiomatic anonymous one time objects actually hold one or two lines of handle code. That is a lot of boilerplate code which drowns out the real implementation.

So one take away - idiomatic code may be indecipherable to a maintainer. 

The plot thickness when In a latter edition of Java this idiom was "expanded" when it became possible to instantiate an anonymous object from just an interface by providing implementation for all the anonymous overrides.

And later yet another twist Java introduces lambdas expression reducing the boilerplate code by eliminating both the types being passed and the method name of the handler which was overridden.  This shorthand makes code more concise as the compiler takes on the responsibility of sorting out the pesky details. We write less boilerplate code and perhaps create fewer bugs. But is it more or less expressive - is the learning curve steeper?

In Android, perhaps the final bastion of Java UI developers idiomatic coding leads to ...

For example an Iterator loop versus a for each loop versus a for loop.

In Android, we often see something like:

```Java
// view references
private ListView mMessageListView;

...

protected void onCreate(Bundle savedInstanceState) {

...

mMessageListView = findViewById(R.id.messageListView);

...

// Init message ListView and its adapterList<FriendlyMessage> friendlyMessages = new ArrayList<>();mMessageAdapter = new MessageAdapter(this, R.layout.item_message, friendlyMessages);mMessageListView.setAdapter(mMessageAdapter);
```

