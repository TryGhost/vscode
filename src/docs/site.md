---
title: "@site"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: @site"
meta_description: "How to access global data properties with @site in your Ghost theme. Read more 👉"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

The `@site` property provides access to global settings, which are available anywhere in your theme:

- `{{@site.url}}` – the url specified for this site in your custom config file
- `{{@site.title}}` – the site title from general settings
- `{{@site.description}}` – the site description from general settings
- `{{@site.icon}}` - The publication icon from general settings
- `{{@site.logo}}` – the site logo from general settings
- `{{@site.cover_image}}` – the site cover image from general settings
- `{{@site.twitter}}` – the twitter URL from general settings
- `{{@site.facebook}}` – the facebook URL from general settings
- `{{@site.navigation}}` – the navigation information configured in settings/design
- `{{@site.timezone}}` – the timezone as configured in general settings
- `{{@site.locale}}` - the configured site language.
- `{{@site.signup_url}}` - the url for members signup via Portal or Feedly RSS subscription based on configured subscription access in settings

### Example Code

```html
<!-- default.hbs -->
<html lang="{{@site.locale}}">

...

<nav class="main-nav overlay clearfix">
    {{#if @site.logo}}
        <a class="blog-logo" href="{{@site.url}}"><img src="{{@site.logo}}" alt="Blog Logo" /></a>
    {{/if}}
    <a class="subscribe-button icon-feed" href="{{@site.url}}/rss/">Subscribe</a>
 </nav>

 ...

</html>
```

## @site feature flags

The `@site` helper offers flags that indicate whether features are available on a site

`@site.members_enabled` - true if subscription access is not set to "Nobody"
`@site.members_invite_only` - true if subscription access is set to "Only people I invite"
`@site.paid_members_enabled` - true if members is enabled and Stripe is connected


### Example code

```html
{{#unless @site.members_invite_only}}
<form data-members-form>
  <input data-members-email type="email" required="true"/>
  <button type="submit">Continue</button>
</form>
{{/if}}
```


## @site meta data

The `@site` helper provides more extensive attributes around site meta data as well. The `@site` meta data values can be set in the Ghost admin under Site Meta Settings within General Settings:

- `{{@site.meta_title}}` – the site meta title
- `{{@site.meta_description}}` – the site meta description
- `{{@site.twitter_image}}` – the site Twitter card image
- `{{@site.twitter_title}}` – the site Twitter card title
- `{{@site.twitter_description}}` – the site Twitter card description
- `{{@site.og_image}}` – the site open graph image (used when shared on Facebook)
- `{{@site.og_title}}` – the site open graph title (used when shared on Facebook)
- `{{@site.og_description}}` – the site open graph description (used when shared on Facebook)

Here's how these helpers correspond with the settings in the Ghost admin:

{{< img src="/images/docs/site-meta-settings.jpg" alt="Ghost admin site meta settings" >}}
