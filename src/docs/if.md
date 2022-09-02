---
title: "if"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: if"
meta_description: "Test simple conditionals and execute different templates using this Handlebars theme helper in your custom Ghost theme."
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#if featured}}{{/if}}`

The `{{#if}}` block helper comes built in with Handlebars.

### Description

`{{#if}}` allows for testing very simple conditionals, and executing different template blocks depending on the outcome.

The conditionals that can be tested are very simple, essentially only checking for 'truthiness'. The evaluation rules are explained in the section below.

Like all block helpers, `{{#if}}` supports adding an `{{else}}` block or using `^` instead of `#` for negation - this means that the `{{#if}}` and `{{else}}` blocks are reversed if you use `{{^if}}` and {{else}} instead. In addition, it is possible to do `{{else if ...}}`, to chain together multiple options like a switch statement.

#### Evaluation rules

The if helper takes a single value, and evaluates whether it is true or false. Any passed in value which is equivalent to `false`, `0`, `undefined`, `null`, `""` (an empty string) or `[]` (an empty array) is considered false, and any other value is considered true.

 - Any boolean value, like the featured flag on a post, will evaluate to true or false as you expect.
 - Any string value will be true, as long as it is not null or empty
 - All numerical values, with the exception of `0` evaluate to true, 0 is the same as false
 - Any property which doesn't exist or is not set will always evaluate false
 - Empty arrays or objects will be false

### Example code

When in the scope of a post, `featured` is a boolean flag. The following code example will evaluate to true only if the post is marked as featured.

```handlebars
{{#post}}
  {{#if featured}}
   ...do something if the post is featured...
  {{/if}}
{{/post}}
```

You can also use this to test if any property is set. Strings, like image URLs will evaluate to true as long as one is present, and will be null (false) otherwise:

```handlebars
{{#post}}
  {{#if feature_image}}
     <img src="{{img_url feature_image}}" />
  {{else}}
		 <img src="{{asset "img/default-img.jpg"}}" />
  {{/if}}
{{else}}
<p>No posts to display!</p>
{{/post}}
```
