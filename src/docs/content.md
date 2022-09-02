---
title: "content"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: content"
meta_description: "How to work with the content handlebars helper in your Ghost theme! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{content}}`

### Description

`{{content}}` is a very simple helper used for outputting post content. It makes sure that your HTML gets output correctly.

You can limit the amount of HTML content to output by passing one of the options:

`{{content words="100"}}` will output just 100 words of HTML with correctly matched tags.

#### Default CTA

For visitors to members-enabled sites who don't have access to the post in the current context, the `{{content}}` helper will output a [default upgrade/sign up CTA](/docs/themes/members/#default-cta).
