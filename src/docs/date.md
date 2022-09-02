---
title: "date"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: date"
meta_description: "Output date formats in your Ghost publication with the date helper. More about Ghost themes inside ✨"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{date value format="formatString"}}`

### Description

`{{date}}` is a formatting helper for outputting dates in various formats. You can either pass it a date and a format string to be used to output the date like so:

```handlebars
<!-- outputs something like 'July 11, 2016' -->
{{date published_at format="MMMM DD, YYYY"}}
```

See the [Moment.js Display tokens](https://momentjs.com/docs/#/displaying/format/) for more options.

Timezone and locale may be overridden from your site's defaults by passing the `timezone` and `locale` parameters:

```handlebars
<!-- outputs something like 'mar., 31 déc. 2013 22:58:58 +0100' -->
{{date published_at locale="fr-fr" timezone="Europe/Paris"}}
```

Or you can pass it a date and the `timeago` flag:

```handlebars
<!-- outputs something like '5 mins ago' -->
{{date published_at timeago="true"}}
```

If you use the `timeago` flag on a site that uses caching - as on [Ghost(Pro)](https://ghost.org/pricing/) - dates will be displayed relative to when the page gets cached rather than relative to the visitor's current time.

If you call `{{date}}` without a format, it will default to a short localised format, `ll`.

If you call `{{date}}` without telling it which date to display, it will default to one of two things:

1. If there is a `published_at` property available (i.e. you're inside a post object) it will use that
2. Otherwise, it will default to the current date


`date` uses moment.js for formatting dates. See their documentation for a full explanation of all the different format strings that can be used.

### Example Code

```handlebars
<main role="main">
  {{#foreach posts}}
    <h2><a href="{{url}}">{{title}}</a></h2>

   <p>{{excerpt words="26"}}</p>

    {{!-- Here `published_at` is set, so this will show the article date --}}
    <time datetime="{{date format="YYYY-MM-DD"}}">{{date format="DD MMMM YYYY"}}</time>
  {{/foreach}}
</main>
<footer>
  {{!-- Here there is no `published_at` so this will show the current year --}}
  <p class="small">&copy; {{date format="YYYY"}}</p>
</footer>
```
