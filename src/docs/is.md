---
title: "is"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: is"
meta_description: "The #is helper allows theme developers to check the context of the current route. Read more about custom Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#is "contexts"}}`

### Description

The `{{#is}}` helper allows you to check the context of the current route, i.e. is this the home page, or a post, or a tag listing page. This is useful when using shared partials or layouts, to output slightly different context in different places on your theme.

### Usage

The `is` helper takes a single parameter of a comma-separated list containing the contexts to check for. Similar to the `has` helper, the comma behaves as an `or` statement, with `and` being achieved by nesting helpers.

```handlebars
{{#is "post, page"}}
   ... content to render if the current route represents a post or a page ...
{{/is}}
```

As with all block helpers, it is possible to use an else statement:

```handlebars
{{#is "home"}}
  ... output something special for the home page ...
{{else}}
  ... output something different on all other pages ...
{{/is}}
```

If you only want the reverse, or negation, you can use the `^` character:

```handlebars
{{^is "paged"}}
 ...if this is *not* a 2nd, 3rd etc page of a list...
{{/is}}
```

### Contexts

The following contexts are supported:

* **home** - true only on the home page
* **index** - true for the main post listing, including the home page
* **post** - true for any individual post page, where the post is not a static page
* **page** - true for any static page
* **tag** - true for any page of the tag list
* **author** - true for any page of the author list
* **paged** - true if this is page 2, page 3 of a list, but not on the first page
* **private** - true if this is the private page shown for password protected sites
