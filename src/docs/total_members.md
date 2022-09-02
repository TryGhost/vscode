---
title: "total_members"
date: "2022-07-14"
meta_title: "Ghost Handlebars Theme Helpers: total_members"
meta_description: "Output the total members from your Ghost publication using the total_members Handlebars helper within your theme!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
    - members
---

Usage: `{{total_members}}`

### Description

The total_members helper outputs a rounded number of total members from your Ghost publication in a human readable format.
Example:

```handlebars
{{total_members}}
```
If you have 1225 members, it will output `1,200+`.

For values above 100,000 it will output `100k+` and `3m+` respectively.
