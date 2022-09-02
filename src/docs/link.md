---
title: "link"
date: "2019-08-16"
meta_title: "Ghost Handlebars Theme Helpers: link"
meta_description: "How to work with the link handlebars functional block helper in your Ghost theme! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#link href="/about/"}}About{{/link}}`

### Description

`{{#link}}` is a block helper that creates links with dynamic classes. In its basic form it will create an anchor element that wraps around any kind of string, HTML or handlebars constructed HTML.

With additional options it can have an active `class` or `target` behaviour, or `onclick` JavaScript events. A `href` attribute must be included or an error will be thrown.

## Simple example

```handlebars
{{#link href="/about/"}}..linked content here..{{/link}}

Will output:

<a href="/about/">..linked content here..</a>
```

All attributes associated with the `<a></a>` element can be used in `{{#link}}`. Check out the MDN documentation on [the anchor element for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

## Variables

Handlebars variables can be used for attribute values as well as strings. Variables do not need be wrapped with quotations:

### Simple variables example

```handlebars
{{#link href=@site.url}}Home{{/link}}
```

### Advanced variables example

```handlebars
{{#foreach posts}}
  {{#link href=(url) class="post-link" activeClass="active"}}
    {{title}}
  {{/link}}
{{/foreach}}
```

## Dynamic attributes

### `activeClass`

By default the active class outputted by `{{#link}}` will be `nav-current`, this is consistent with our [navigation helper](/docs/themes/helpers/navigation/). However it can be overwritten with the `activeClass` attribute:

### `activeClass` Example

```handlebars
{{#link href="/about/" activeClass="current"}}About{{/link}}

When on the "/about/" URL it will output:

<a href="/about/" class="current">About</a>
```

`activeClass` can also be given `false` value (`activeClass=false`), which will output an empty string. Effectively turning off the behaviour.
