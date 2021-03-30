---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
comments: true

---

<div class="posts">
  {% for post in site.posts %}
  <article class="post">    
    
    <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>

    <div class="entry">
      {{ post.content | truncatewords:40}}
    </div>
    
    <a href="{{ post.url }}" class="read-more">Read More</a>
  </article>
  {% endfor %}
</div>
