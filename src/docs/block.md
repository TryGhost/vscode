---
title: "block"
date: "2020-03-20"
meta_title: "Ghost Handlebars Theme Helpers: block & contentFor"
meta_description: "Create templates that inherit reusable templates with handlebars block and contentFor helpers. Read more about Ghost themes! 👻"
keywords:
  - api
  - handlebars
  - themes
  - helpers
---

Usage: `{{{block "section"}}}` and `{{#contentFor "section"}} content {{/contentFor}}`

## Description

`{{{block "block-name"}}}` is a helper for creating a placeholder within a custom handlebars template. Adding the helper along with a unique ID creates a slot within the template, which can be optionally filled when the template is inherited by another template file.

The `{{#contentFor "block-name"}}...{{/contentFor}}` helper is used to access and populate the block definitions within the template that's being inherited. The inherited template is referenced with `{{!< template-name}}` at the top of the file. If the `contentFor` is not used then the block will be gracefully skipped.

### Example

```handlebars
<!-- default.hbs -->

<body>
    <!-- ... -->
    {{{block "scripts"}}}
</body>
```
---
```handlebars
<!-- page.hbs -->

{{!< default}}

{{#contentFor "scripts"}}
    <script>
        runPageScripts();
    </script>
{{/contentFor}}
```

## `{{{body}}}` helper

The `{{{body}}}` helper behaves in a similar fashion to a defined block helper, but doesn't require a corresponding `contentFor` helper in the inheriting template file.

### `{{{body}}}` example

```handlebars
<!-- default.hbs -->

<div class="site-wrapper">
    {{{body}}}
    <!-- ... -->
</div>
```
---
```handlebars
<!-- post.hbs -->

{{!< default}}

<section class="post-full-content">
    <div class="post-content">
        {{content}}
    </div>
</section>
```

Inherited template files, files that contain `{{{block "block-name"}}}`, cannot be templates used directly by Ghost. `post.hbs`, `page.hbs` `index.hbs` can inherit other template files and used the `contentFor` helper but cannot contain block definitions. See our [theme structure documentation](/docs/themes/structure/#templates) for more information.
