---
title: "unless"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: unless"
meta_description: "Test negative conditionals with the #unless handlebars helper. Read more about building custom Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#unless featured}}{{/unless}}`

The `{{#unless}}` block helper comes built in with Handlebars.

### Description

`{{#unless}}` is essentially the opposite of `{{#if}}`. If you want to test a negative conditional only, i.e. if you only need the `{{else}}` part of an `{{#if}}` statement, then `{{#unless}}` is what you need.

It works exactly the same as `{{#if}}` and supports both `{{else}}` and `^` negation if you want to get really confusing!

Unless also uses the exact same conditional evaluation rules as `{{#if}}`.

### Example code

Basic unless example, will execute the template between its start and end tags only if `featured` evaluates to false.

```handlebars
{{#unless featured}}
  ...do something...
{{/unless}}
```

If you want, you can also include an else block, although in the majority of cases, if you need an else, then using `{{#if}}` is more readable:

```handlebars
<!-- This is identical to if, but with the blocks reversed -->
{{#unless featured}}
  ...do thing 1...
{{else}}
  ...do thing 2...
{{/unless}}
```
