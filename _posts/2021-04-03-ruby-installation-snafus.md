---
layout: post
title: Jekyll take 3
date: '2021-04-04 00:00:00 +0300'
description: My attempts to get this site to also build locally.
img: cover/ruby.jpg
tags:
    - blogging
    - ruby
    - jekyll
comments: true
lastmod: 2021-04-09T07:30:55.578Z
---

## Ruby installation pains on Mac Os

Jekyll is once again proving too be a trouble some fellow. I could not get the theme to work decently and I wanted to have a working local copy to see how things progress before upoading to git. I tried a third reboot of the site.

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

- remove all gems 

```zsh
for x in `gem list --no-versions`; do sudo gem uninstall $x -a -x -I; done

gem install bundler jekyll --user-install

```

- installing jekyll breaks while building local extension sassc-2.4.0
- SO [sassc bundler error: Gem::Ext::BuildError: ERROR: Failed to build gem native extension](https://stackoverflow.com/questions/54520459/sassc-bundler-error-gemextbuilderror-error-failed-to-build-gem-native-ext)
- @\implies @ `gcc` is the culprit

```zsh

sudo chown -R $(whoami) $(brew --prefix)/*
brew upgrade gcc
bundle install
```
- `Warning: gcc 10.2.0_4 already installed` @\implies @ `gcc` is the up to date

many of the errors a xcode related.

- brew doctor says: `Warning: Your Xcode (12.2) is outdated.`
- cleared up 50GB of space 
- updated xcode
- removed some pesky os extensions
- cleaned up .zshrc
- reordered the path to get ruby3.0 first
- discovered I should add ['vendor'] to excludes
- should move csv file out of _data and into assets/data
- I may be using Ruby 3 no longer comes wit `webrick`s and how can you build a web page without web bricks :wink:
    - found this [issue](https://github.com/github/pages-gem/issues/752) by [Krinkle](https://github.com/Krinkle) always neat to meet a familiar face.
    - `bundle add webrick`

I'm shocked to see the site rebuilding as I type.
Guess my troubles are now over - perhaps I should have prayed for less Dr Hyde (in the command line ) and more Mr Jekyll.

I guess I'll be back here again when github pages upgrades to Jekyll 4.
