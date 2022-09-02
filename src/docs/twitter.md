---
title: "twitter"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: Twitter"
meta_description: "Connect your Ghost theme with your Twitter account. Read more about building custom Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{twitter_url}}` or `{{twitter_url @site.twitter}}` or `{{twitter_url "myfavouritepage"}}`

### Description

This helper exists to make it easy to output a URL for a twitter page. Ghost has access to twitter page names/usernames for both users and for the site itself. When used without passing a username, the helper will look for a twitter username in the current template context, and then fallback to using `@site.twitter`.

If there is no twitter username set, the helper will output nothing at all.

If you pass a variable or string to the helper, it will concatenate the value with the full url for a twitter page.


### Examples

Output the author's twitter, using an `author` block:

```handlebars
{{#foreach posts}}
  {{#author}}
    {{#if twitter}}<a href="{{twitter_url}}">Follow me on twitter</a>{{/if}}
  {{/author}}
{{/foreach}}

```

