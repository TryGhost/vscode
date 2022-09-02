---
title: "excerpt"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: excerpt"
meta_description: "Learn how to create custom excerpts using Ghost Handlebars theme helpers. Build your custom theme today!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{excerpt}}`

### Description

`{{excerpt}}` outputs content but strips all HTML. This is useful for creating excerpts of posts.

If the post's `custom_excerpt` property is set, then the helper will always output the `custom_excerpt` content ignoring the `words` & `characters` attributes.

When both `html` and `custom_excerpt` properties are not set (for example, when member content gating strips the `html`) the output is generated from post's `excerpt` property.

You can limit the amount of text to output by passing one of the options:

`{{excerpt characters="140"}}` will output 140 characters of text (rounding to the end of the current word).
