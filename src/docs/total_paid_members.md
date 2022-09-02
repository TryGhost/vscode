---
title: "total_paid_members"
date: "2022-07-14"
meta_title: "Ghost Handlebars Theme Helpers: total_paid_members"
meta_description: "Output the total paid members from your Ghost publication using the total_paid_members Handlebars helper within your theme!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
    - members
---

Usage: `{{total_paid_members}}`

### Description

The total_paid_members helper outputs a rounded number of total paid members from your Ghost publication in a human readable format.
Example:

```handlebars
{{total_paid_members}}
```
If you have 1225 paying members, it will output `1,200+`.

For values above 100,000 it will output `100k+` and `3m+` respectively.
