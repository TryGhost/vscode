---
title: "partials"
date: "2020-03-20"
meta_title: "Ghost Handlebars Theme Helpers: partials"
meta_description: "Create reusable pieces of markup with Handlebars partials. Read more about Ghost themes! 👻"
keywords:
  - api
  - handlebars
  - themes
  - helpers
---

Usage: `{{> "partial-name"}}`

## Description

`{{> "partials"}}` is a helper for reusing chunks of template code in handlebars files. This can be useful for any repeating elements, such as a post card design, or for splitting out components like a header for easier to manage template files.

All partials are stored in the `partials/` directory of the theme. Partials will inherit context and make that context available within the partial file.

### Example

```handlebars
{{#foreach posts}}

  {{> "post-card"}}

{{/foreach}}
```

```html
<!-- partials/post-card.hbs -->
<article class="post-card.hbs">
  <h2 class="post-card-title">
    <a href="{{url}}">{{title}}</a>
  </h2>
  <p>{{excerpt words="30"}}</p>
</article>
```

### Partial properties

Partials can take properties as well which provide the option to set contextual values per use case.

#### Properties example

```handlebars
{{> "call-to-action" heading="Sign up now"}}
```

```html
<!-- partials/call-to-action.hbs -->
<aside>
  {{#if heading}}
    <h2>{{heading}}</h2>
  {{/if}}
  <form>
    <!-- ... -->
  </form>
</aside>
```
