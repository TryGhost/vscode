---
title: "img_url"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: img_url"
meta_description: "Calculate image URLs efficiently with the img_url handlebars helper. Read more about Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{img_url value}}`

### Description

The img url helper outputs the correctly calculated URL for the provided image property.

You **must** tell the `{{img_url}}` helper which image you would like to output. For example, to output a URL for a post's feature image inside of post.hbs, use `{{img_url feature_image}}`.

Force the image helper to output an absolute URL by using the absolute option: `{{img_url profile_image absolute="true"}}`. This is almost never needed.

To output the image in question at a resized resolution based on your theme config, pass in [dynamic image sizes](/docs/themes/responsive-images/) via the `size` option.

Convert an image to a different image format (`webp`, `avif`, `png`, `jpg`, `jpeg`, or `gif`) by using the `format` option. (This only works in combination with the `size` option.)

## Example code

Below is a set of examples of how to output various images that belong to posts, authors, or keywords:

```handlebars
{{#post}}

  {{!-- Outputs post's feature image if there is one --}}
  {{#if feature_image}}
      <img src="{{img_url feature_image}}">
  {{/if}}

  {{!-- Output feature image at small size from theme package.json --}}
  <img src="{{img_url feature_image size="small"}}">

  {{!-- Output feature image at small size, formatted as a WebP image (size is required) --}}
  <img src="{{img_url feature_image size="small" format="webp"}}">

  {{!-- Output post author's profile image as an absolute URL --}}
  <img src="{{img_url author.profile_image absolute="true"}}">

  {{!-- Open author context instead of providing full path --}}
  {{#author}}
      <img src="{{img_url profile_image}}">
  {{/author}}

{{/post}}
```
