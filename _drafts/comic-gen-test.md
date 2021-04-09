---
title: Comicgen test
---

Comicgen is a new !? concept in visual stroy telling (for data science).

<script src="https://cdn.jsdelivr.net/npm/comicgen@1.0.0/dist/comicgen.min.js"></script>

# The main idea

<g class="comicgen" name="aryan" emotion="angry" pose="handsinpocket"></g>

<hr>

# The API

```javascript
    // Add the character
    $('<g class="new" name="dee" angle="straight" emotion="sad" pose="yuhoo"></g>').appendTo('body')
    // Call comicgen()
    comicgen('.new')
```

<script>
    // Add the character
    $('<g class="new" name="dee" angle="straight" emotion="sad" pose="yuhoo"></g>').appendTo('body')
    // Call comicgen()
    comicgen('.new')
</script>


<hr>

## Add only face of character


```javascript
$('<g class="only-face" name="dee" angle="straight" emotion="smile"></g>').appendTo('body')
// Call comicgen()
comicgen('.only-face')
```

<script>
    $('<g class="only-face" name="dee" angle="straight" emotion="smile"></g>').appendTo('body')
    // Call comicgen()
    comicgen('.only-face')
</script>
