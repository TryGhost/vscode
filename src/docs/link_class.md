---
title: "link_class"
date: "2019-08-16"
meta_title: "Ghost Handlebars Theme Helpers: link_class"
meta_description: "How to work with the link_class handlebars helper in your Ghost theme! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{link_class for="/about/"}}`

### Description

The `{{link_class}}` helper adds dynamic classes depending on the currently viewed page. If the page slug (e.g. `/about/`) matches the value given to the `for` attribute the helper will output a `nav-current` class. A `for` value must be provided.

## Simple example

```html
<li class="nav {{link_class for="/about/"}}">About</li>

When on the "/about/" URL it will output:

<li class="nav nav-current">About</li>

By default it will output:

<li class="nav ">About</li>
```

### `activeClass`

By default the active class outputted by `{{link_class}}` will be `nav-current`, this is consistent with our [navigation helper](/docs/themes/helpers/navigation/). However it can be overwritten with the `activeClass` attribute:

```html
<li class="nav {{link_class for="/about/" activeClass="active"}}">About</li>

Will output:

<li class="nav active">About</li>
```

`activeClass` can also be given `false` value (`activeClass=false`), which will output an empty string. Effectively turning off the behaviour.

### `class`

Optionally `{{link_class}}` can have additional active classes. Using the `class` attribute will add whatever value has been provided when the link is the active URL, `nav-current` (the default active class value) will be added last:

```html
<li class="nav {{link_class for="/about/" class="current-about"}}">About</li>

Will output:

<li class="nav current-about nav-current">About</li>
```

## Parent URLs

Not only can `{{link_class}}` add active classes to current URLs, but it can also apply classes to parent URLs. If a user navigates to `/tags/toast/` then `{{link_class}}` can provide an active class to `/tags/` as well as `/tags/toast/`.

### Example

```html
<li class="nav {{link_class for="/tags/"}}">Tags</li>

When on the "/tags/" URL it will output:

<li class="nav nav-current">Tags</li>

When on the "/tags/toast/" URL it will output:

<li class="nav nav-parent">Tags</li>
```
