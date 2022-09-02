---
title: "ghost_head/foot"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: ghost_head/foot"
meta_description: "Create responsive headers and footers for your Ghost theme with the ghost_head/foot helper. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{ghost_head}}` and `{{ghost_foot}}`

### Description

These helpers output vital system information at the top and bottom of the document, and provide hooks to inject additional scripts and styles.

### ghost_head

`{{ghost_head}}` – belongs just before the `</head>` tag in `default.hbs`, outputs the following:

* Meta description
* Structured data Schema.org microformats in JSON/LD - no need to clutter your theme markup!
* Structured data tags for Facebook Open Graph and Twitter Cards.
* RSS url paths to make your feeds easily discoverable by external readers.
* Scripts to enable the Ghost API
* Canonical link to equivalent `amp` post  _(if enabled in integrations)_
* Anything added in the `Code Injection` section globally, or at a page-level

### ghost_foot

`{{ghost_foot}}` – belongs just before the `</body>` tag in `default.hbs`, outputs the following:

* Anything added in the `Code Injection` section globally, or at a page-level
