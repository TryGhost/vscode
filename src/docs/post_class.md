---
title: "post_class"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: post_class"
meta_description: "Target specific posts in a Ghost publication with styles using the post_class handlebars helper. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{post_class}}`

### Description

`{{post_class}}` outputs classes intended for your post container, useful for targeting posts with styles.

The classes are as follows:

* `post` - All posts automatically get a `post` class.
* `featured` - All posts marked as featured get the `featured` class.
* `page` - Any static page gets the `page` class.
* `tag-:slug` - For each tag associated with the post, the post get a tag in the format `tag-:slug`.

For example:

A post which is not featured or a page, but has the tags `photo` and `panoramic` would get `post tag-photo tag-panoramic` as post classes.

A featured post with a tag of `photo` would get `post tag-photo featured`.

A featured page with a tag of `photo` and `panoramic` would get `post tag-photo tag-panoramic featured page`.

Setting a post as featured or as a page can be done from the post settings menu.

### Example Code

```html
<article class="{{post_class}}">
  {{content}}
</article>
```

