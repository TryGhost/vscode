---
title: "@config"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: @config"
meta_description: "How to access global data properties with @config in your Handlebars theme. Read more about Ghost themes ⚡️"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

The `@config` property provides access to global data properties, which are available anywhere in your theme.

Specifically `@config` will pass through the special theme config that is added in the theme's `package.json` so that it can be used anywhere in handlebars.

At the moment, there is only one property which will be passed through, as all other [properties](https://ghost.org/docs/themes/structure/#additional-properties) are accessed with their own helpers.

*   `{{@config.posts_per_page}}` – the number of posts per page

### Example Code

Standard usage:

```handlebars
<a href="{{page_url "next"}}">Show next {{@config.posts_per_page}} posts</a>
```

In the get helper limit field:

```handlebars
{{#get "posts" filter="featured:true" limit=@config.posts_per_page}}
  {{#foreach posts}}
      <h1>{{title}}</h1>
	{{/foreach}}
{{/get}}
```

### Providing config

Config values can be provided by adding a `config` block to package.json

```json
{
  "name": "my-theme",
  "version": 1.0.0,
  "author": {
    "email": "my@address.here"
  }
  "config": {
  }
}
```

There are currently four properties supported:

* `config.posts_per_page` — the default number of posts per page is 5
* `config.image_sizes` — see the [assets](/docs/themes/assets/) guide for more details on responsive images
* `config.card_assets` — configure the [card CSS and JS](/docs/themes/content/#editor-cards) that Ghost automatically includes
* `config.custom` - add [custom settings](/docs/themes/custom-settings/) to your theme
