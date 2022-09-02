---
title: "pagination"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: pagination"
meta_description: "Define the pagination for your Ghost theme using the pagination Handlebars helper. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{pagination}}`

## Description

`{{pagination}}` is a template driven helper which outputs HTML for 'newer posts' and 'older posts' links if they are available and also says which page you are on.

You can override the HTML output by the pagination helper by placing a file called `pagination.hbs` inside of `content/themes/your-theme/partials`. Details of the default template are below.

The data used to output the `{{pagination}}` helper is generated based on the post list that is being output (index, tag posts, author posts etc) and always exists at the top level of the data structure.

## Pagination Attributes

* **page** - the current page number
* **prev** - the previous page number
* **next** - the next page number
* **pages** - the number of pages available
* **total** - the number of posts available
* **limit** - the number of posts per page

## Default Template

The [default template](https://github.com/TryGhost/Ghost/blob/main/core/frontend/helpers/tpl/pagination.hbs) output by Ghost is shown below. You can override this by placing a file called `pagination.hbs` in the partials directory of your theme.

```html
<nav class="pagination" role="navigation">
    {{#if prev}}
        <a class="newer-posts" href="{{page_url prev}}">&larr; Newer Posts</a>
    {{/if}}
    <span class="page-number">Page {{page}} of {{pages}}</span>
    {{#if next}}
        <a class="older-posts" href="{{page_url next}}">Older Posts &rarr;</a>
    {{/if}}
</nav>
```

## Unique helpers within this context

- `{{page_url}}` - accepts `prev`, `next` and `$number` to link to a particular page
- `{{page}}` - outputs the current page number
- `{{pages}}` - outputs the total number of pages
