---
title: "meta data"
date: "2019-03-19"
meta_title: "Ghost Handlebars Theme Helpers: Meta Data"
meta_description: "How to access custom meta data properties in your Ghost theme, including meta title, meta description and custom canonical URLs. Read more 👉"
keywords:
    - meta
    - handlebars
    - themes
    - helpers
---


Usage: `{{meta_title}}` and `{{meta_description}}` and `{{canonical_url}}`

### Description

Ghost generates automatic meta data by default, but it can be overridden with custom content in the post settings menu. Meta data is output by default in [ghost_head](/docs/themes/helpers/ghost_head_foot/), and can also be used in themes with the following helpers:

- `{{meta_title}}` – the meta title specified for the post or page in the post settings
- `{{meta_description}}` – the meta description specified for the post or page in the post settings
- `{{canonical_url}}` – the custom canonical URL set for the post
