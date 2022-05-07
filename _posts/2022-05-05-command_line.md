---
title: command line
description: command line cheea sheet macos + zsh + git
date: 2022-05-05T14:03:24.441Z
preview: ""
draft: false
tags:
  - command line
  - macos
  - terminal
  - productivity
categories:
  - productivity
  - mac
lastmod: 2022-05-06T08:15:40.712Z
---

# Command line

Working in the terminal can be a major productivity booster as well as an enabler for skill that don't exists for high level gui users. 
The linux philosophy is that a command should do just one thing and really well.
The true power of the shell comes from being able to chain commands, redirect output and so on. 

Mastering the command line is easier said than done as:
- Most commands come with short and uninformative names which are at best contractions. e.g. `bc`, `rm`, `ls`, `cd`
- Many commands require using many flags and it is near impossible to remember these flags.
- Some commands like sed, awk, troff are small programming languages which means it is kind of easy to forget how to do things you already figured out.
- Some commands work differently on different flavours of linux as well as in different shells
- Unix commands come win `man` pages which are generally so unfriendly that they are only useful to settle quibbles amongst experts who may have different versions of some command.
- Some commands require the use of regular expressions, which may take a long time to fully master.
- Some commands are require more advanced domain knowledge like the os or networking to fully grok.
- Practice makes perfect or at least helps so power users will embrace the austerity of the command line to continually practice
- Working with remote machine and containers will require editing files remotely in environments that cannot be accessed with a gui editor and may only support very limited editing like: nano, vi or even just just sed which is a stream editor.

For these many reasons its great to have a some references if you need to use the command line.

## Navigation & Process control

| command | shortcut       | note                               |
|---------|----------------|------------------------------------|
|         | ctrl + u       | clear the prompt                   |
|         | ctrl + a       | jump to prompt home                |
|         | ctrl + e       | jump to prompt end                 |
|         | ctrl + f       | froward word                       |
|         | ctrl + b       | back word                          |
| clear   | ctrl + l       | clear screen (with cr)             |
| reset   | ctrl + k       | reset terminal                     |
|         | ctrl + c       | break                              |
|         | ctrl + z       | suspend                            |
| fg      |                | resume                             |
| bg      |                | resume in background               |
| exit    | ctrl + x       | exit shell                         |
|         | ctrl + u       | clear the prompt                   |
|         | fn + f         | full screen                        |
|         | fn + f11       | minimize windows to access desktop |
|         | cmd + r + ptrn | reverse search                     |
|         | cmd + r        | reverse search next                |

for more shortcuts see [this](https://betterprogramming.pub/boost-your-command-line-productivity-with-keyboard-shortcuts-4de2f6cbd069)

| command                | note                                            |
|------------------------|-------------------------------------------------|
| cd -                   | cd to the previous dir                          |
| cd ~                   | cd to the  home dir                             |
| `pushcd` /etc          | cd to /etc, pushing current path into the stack |
| …                      | do some commands                                |
| `popcd`                | pop to original dir                             |
| cmatrix                | matrix style screensaver                        |
| brew install cmatrix   | install cmatrix on macos                        |
| history                | list history                                    |
| !100                   | re run item 100 in history                      |
| trash fname            | send it to recycle bin, good for directories    |
| code .                 | open vscode with current folder                 |
| cmd1 ; cmd2            | chain commands                                  |
| cmd 1 && cmd 2         | chain commands using and                        |
| ls > out.txt           | redirect to new out.txt                         |
| ls >> out.txt          | redirect append                                 |
| cmd 2> log             | redirect err to log                             |
| ls -1 &> log           | redirect out and err to log                     |
| ls -1 2>&1             | combine standard error into standard output     |
| ls 	&#124; wc          | pipe                                            |
| head fname             |                                                 |
| tail -f fname.log      | watch tail of a log                             |
| mount &#124; column -t | converts output into columns                    |
| lsaf -i tcp:8891       | check if port is in use/free (8891 is jupyter)  |
| ps                     |                                                 |
| kill -9                |                                                 |
| man cmd                |                                                 |
| tar                    |                                                 |
| chmod                  |                                                 |
| cat fname              |                                                 |
| less fname             |                                                 |
| more fname             |                                                 |

### Ports of interest in DS & co.

| software | note          |
|----------|---------------|
| jupyter  | 8889          |
| spark    | 6066 and 7077 |
| redis    | 6379          |
| postgres | 5432          |

## Git commands

the main tasks are:
- staging changes 
- committing good changes
- putting risky dev in branch
- switching branches
- going back
- merging conflicts

| command                             | note                                |
|-------------------------------------|-------------------------------------|
| git clone                           | make a local copy + set remote      |
| git remote                          | view remote                         |
| git remote add name url             | add remote                          |
| git remote rm name                  | remove  remote                      |
| git pull                            |                                     |
| git fetch                           |                                     |
| git merge                           |                                     |
| git branch                          | list branches                       |
| git branch experiment               | create new branch                   |
| git branch -d experiment            | safe delete crazy-experiment        |
| git push origin --delete experiment | delete remote branch                |
| git push                            |                                     |
| git status                          | compare local repo with remote repo |
| git add                             |                                     |
| git commit -m “msg”                 |                                     |
| git stash                           |                                     |
| git unstash                         |                                     |

see https://github.com/ibraheemdev/modern-unix for modern unix commands

modern unix commands

## ripgrep a grep with .gitignore

ripgrep - recursively searches directories for a regex pattern while respecting your gitignore 

| command                              | note              |
|--------------------------------------|-------------------|
| rp                                   | search-text fnmae |
| vim +15                              | edit from line 15 |
| code -g mdp.md:15                    | edit from line 12 |
| rg search_ptrn fname -r replace_ptrn | grep and replace  |


# bat - a cat + syntax highlighting with git support

| command           | note                                                        |
|-------------------|-------------------------------------------------------------|
| bat test.md       |                                                             |
| bat --list-themes | fzf --preview="bat --theme={} --color=always /path/to/file" |





