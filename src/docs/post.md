---
title: "post"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: post"
meta_description: "Output content from your Ghost publication to your live site using the post Handlebars helper. Read more about Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#post}}{{/post}}` or `{{#foreach posts}}{{/foreach}}`

## Description

When on a single post template such as `post.hbs` or `page.hbs`, outputting the details of your posts can be done with a block expression.

The block expression `{{#post}}{{/post}}` isn't strictly a 'helper'. You can do this with any object in a template to access the nested attributes e.g. you can also use `{{#primary_author}}{{/primary_author}}` inside of the post block to get to the primary author's name and other attributes.

When inside a post list such as `index.hbs` or `tag.hbs` where there is more than one post, it is common to use the `{{#foreach post}}{{/foreach}}` to iterate through the list.

When inside a `{{#foreach posts}}{{/foreach}}` or `{{#post}}{{/post}}` block (i.e. when inside the post scope), theme authors have access to all of the properties and helpers detailed on this page.


## Post Attributes

The full list of post attributes and more information about outputting posts can be found in the post context documentation.

## Static pages

When outputting a static page, you can use the same `{{#post}}{{/post}}` block expression, and all the same helpers you can use for a post.

## Featured posts

Featured posts get an extra class so that they can be styled differently. They are not moved to the top of the post list or displayed separately to the normal post list.

Use `{{#if featured}}{{/if}}` to test if the current post is featured.
