---
layout: post
title: Jekyll take 3 
date: 2021-04-04 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: js-1.png # Add image post (optional)
tags: [blogging, ruby] # add tag
comments: true
---

## Ruby installation pains on Mac Os

Jekyll is proving true to his name. I could not get the theme to work decently. I tried a third reboot of the site.

I forked a new and promising theme called [flexible jekyll](http://artemsheludko.com/flexible-jekyll/). 

Then removed ruby and jekyll and reinstalled per the instructions at https://jekyllrb.com/docs/installation/macos/ primarily to avoid using `sudo` to install gems.

This time Ruby got stuck on openssl.

eventually I asked google: `rbenv 3.0.0 stuck install openssl mac`

## Ruby installation fails in macOS Catalina #1409

I use macOs Big Sur but this issue : https://github.com/rbenv/ruby-build/issues/1409 seemed relevant. I also noticed this:

![thumbs up](/assets/img/thumbsup.png) under one f the the answers. The fire works in particular.

It also demonstrated an interesting technique so I decided to make a note.
You see 

>  Note: the Homebrew version gets updated, the ruby-build version doesn't

That is a common theme with irksome installation. But the rub is in getting the new software work with the dependency you have or install rather then the  broken one it is trying to fetch.

```zsh
# Setup Compiler paths for readline and openssl
local READLINE_PATH=$(brew --prefix readline)
local OPENSSL_PATH=$(brew --prefix openssl)
export LDFLAGS="-L$READLINE_PATH/lib -L$OPENSSL_PATH/lib"
export CPPFLAGS="-I$READLINE_PATH/include -I$OPENSSL_PATH/include"
export PKG_CONFIG_PATH="$READLINE_PATH/lib/pkgconfig:$OPENSSL_PATH/lib/pkgconfig"

# Use the OpenSSL from Homebrew instead of ruby-build
# Note: the Homebrew version gets updated, the ruby-build version doesn't
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$OPENSSL_PATH"

# Place openssl@1.1 at the beginning of your PATH (preempt system libs)
export PATH=$OPENSSL_PATH/bin:$PATH

# Load rbenv
eval "$(rbenv init -)"

# Extract the latest version of Ruby so you can do this:
# rbenv install $LATEST_RUBY_VERSION
export LATEST_RUBY_VERSION=$(rbenv install -l | grep -v - | tail -1)
```

```zsh
source .zshrc
rbenv install $LATEST_RUBY_VERSION
```

# Inner monologue 

However interesting this was Ruby still wouldn't install.
I wonder am I the first person to install Ruby on a Mac for a long time.
I did update to BigSur some months back - am I still paying dues? 

# Perhaps command line tools is the culprit

Someone suggested ensuring I have latest version. 
Its a pain to install so hungry for space and won't use it on another drive.

```zsh
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
sudo xcode-select -s /Library/Developer/CommandLineTools
```
