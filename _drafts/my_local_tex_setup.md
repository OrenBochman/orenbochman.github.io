---
layout: post
title: my local tex setup
tags:
    - documentation
    - mac
    - tips
    - tex
    - latex

---

Once upon a time I installed tex using home-brew via `mactex-no-gui` which is livetex. While I love tex and latex I am not a full time user but rather the occasional user and mostly via some external tool like R-markdown or JupterLab etc.

Was I momentarily insane when later, I also installed tinytex using Rstudio?

Probably not as TeX distribution are a [pain](https://yihui.org/tinytex/pain/) to work with, their documentation is a torture chamber of pain. Anhyhow I saw everythng working fine after I also did this install. I was able to generate pdf and epub of ebooks with *Bookdown* in record time.

But having installed tinyTeX via R it became invisible to brew.

- tinytex is minimal and requires using one command `tlmngr`
- so when I needed some packages I was not seeing them installed.

it requires installing packages:

```zsh
tlmngr install preview
tlmngr install standalone
tlmngr install babel-english
```
e.g. 
tlmgr option repository ftp://tug.org/historic/systems/texlive/2020/tlnet-final


```zsh
pip install manim
brew list | grep tex
brew upgrade mactex-no-gui
eval "$(/usr/libexec/path_helper)"

```

>! LaTeX Error: File `standalone.cls' not found. 
- https://www.reddit.com/r/manim/comments/fqbl7t/sorry_but_latex_did_not_succeed/
- https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages


```zsh

tlmgr option repository ftp://tug.org/historic/systems/texlive/2020/tlnet-final
tlmgr option repository ftp://tug.org/historic/systems/texlive/2021
tlmgr install standalone

tlmgr search --global --file ragged2e.sty
```

running the code:
>`LaTeX compilation error! latex reports:  ERROR    ! LaTeX Error: File 'preview.sty' not found.  `

```
which kpsewhich
```
>`/usr/local/bin/kpsewhich`

 kpsewhich --var-value TEXMFMAIN
 /Users/oren/Library/TinyTeX/texmf-dist