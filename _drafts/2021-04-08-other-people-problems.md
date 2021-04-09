---


---



Other PEople's stuff

Here is a confession - I run a computer lab for the School of Information Science for about a year in the 1990s the time the internet really started to take off. The most intersting part of it was to sit back and see what cool things people were doing on the computers. However, I lost that amazing job when I had to enlist.



## Tmux

## Dot files
    
    - [.dot Files](https://dotfiles.github.io/)

## Install guides

- Mac/Linux Stuff:
    - [MacBook Setup](https://www.garrickadenbuie.com/blog/setting-up-a-new-macbook-pro/)
    - https://gist.github.com/gadenbuie/a14cab3d075901d8b25cbaf9e1f1fa7d
      so one of the best things in meeting a like minded power user is to find out their apps/web apps/tricks and techniques which you don't know about
      this post is kind of like that

## Developing Docker Super Powers 

    As time goes by everything that works on my machine breaks down and become next to impossible to fix. More so on a mac - which does not recommend a quick factory rest each time you get into trouble. In reality the biggest SNAFUS are updates.

    - MathJax, Jekyll, Kramdown, Github pages - 
    - Update the OS and everything start to break.
    - Brew becomes a pain to use.
    - the wheels of data science stop turning when your python packages wont install
    - Zsh becomes bloated
    - update R and half the packages wont install - yes the pros have multiple versions side by side 
    - Open source is not being maintained.

    This makes one start to think that embracing docker is a terrible mistake. Here are a couple talks about this approach.
    - [Dockerizing all the Things](https://www.youtube.com/watch?v=PeE8hcQtFq4)
    - [Willy Wonka of Containers - Jessie Frazelle](https://www.youtube.com/watch?v=GsLZz8cZCzc&ab_channel=ContainerCamp)
    However getting super power through docker comes with something called Technical debt i.e. it presuppose that:
    - you know how to setup and configure all the servers on separate machines.
    - can make them talk to each other using networking.
    - know how to secure it all.
    - understand Docker, Kubernates and the Linux command line and operating system.
    - Are interested in pushing parts of this from your desktop to the cloud when you realise your poor machine has finite cpu and memory
    - are ok with latency
    - now each time you add a component it raise all the stakes to the nth power.
    And while things may work well for a while when they unravel you discover that technical debt has suddenly overpower your project.
    
    <!-- Anyhow it seems that if you are going to keep dockering the bulk of the dev and data science stuff on your machine you are also hedging your bets by just making it so much easier to zap everything  and do a complete system reinstall. -->
