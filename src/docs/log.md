---
title: "log"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: log"
meta_description: "Debug your custom Ghost theme with this handy handlebars helper for Ghost theme developers ⚡️ Read more about Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{log value}}`

### Description

When running Ghost in development mode, you can use the `{{log}}` helper to output debug messages to the server console. In particular you can get handlebars to output the details of objects or the current context

For example, to output  the full 'context' that handlebars currently has access to:

`{{log this}}`

Or, to log each post in the loop:

```handlebars
{{#foreach posts}}
   {{log post}}
{{/foreach}}
```

If you're developing a theme and running an install [using Ghost-CLI](/docs/install/local/), you must use `NODE_ENV=development ghost run` to make debug output visible in the console.
