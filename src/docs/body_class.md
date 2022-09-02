---
title: "body_class"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: body_class"
meta_description: "Learn how to target specific pages of your Ghost publication with styles. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{body_class}}`

### Description

`{{body_class}}` – outputs dynamic CSS classes intended for the `<body>` tag in your `default.hbs` or other layout file, and is useful for targeting specific pages (or contexts) with styles.

The `{{body_class}}` helper outputs different classes on different pages, depending on what context the page belongs to. For example the home page will get the class `.home-template`, but a single post page would get `.post-template`.

Ghost provides a series of both static and dynamic `body_class` classes:

#### Static classes

- `home-template` – The class applied when the template is used for the home page
- `post-template` – The class applied to all posts
- `page-template` – The class applied to all pages
- `tag-template` – The class applied to all tag index pages
- `author-template` – The class applied to all author pages
- `private-template` – The class applied to all page types when password protected access is activated

#### Dynamic classes

- `page-{slug}` – A class of `page-` plus the page slug added to all pages
- `tag-{slug}` – A class of `tag-` plus the tag page slug added to all tag index pages
- `author-{slug}` – A class of `author-` plus the author page slug added to all author pages

### Examples

```handlebars
<!-- default.hbs -->

<html>
    <head>...</head>
    <body class="{{body_class}}">
    ...
    {{{body}}}
    ...
    </body>
</html>
```
