---
layout: post
title: "Mermaid Git Graph"
date:   2021-03-29 16:16:16 +0300
categories: blogging test
tags: ["charts"]
---

# Git graph

<div class="mermaid">
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
</div>
