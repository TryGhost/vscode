---
title: "foreach"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: foreach"
meta_description: "Discover how to work with lists of posts in Ghost with the foreach Handlebars helper."
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#foreach data}}{{/foreach}}`

## Description

`{{#foreach}}` is a special loop helper designed for working with lists of posts. It can also iterate over lists of tags or users if needed. The foreach helper will output the content placed between its opening and closing tags `{{#foreach}}{{/foreach}}` once for each item in the collection passed to it.

The `{{#foreach}}` helper is context-aware and should **always** be used instead of Handlebars `each` when working with Ghost themes.

### Simple Example

The main use of the `{{#foreach}}` helper in Ghost is iterating over the posts to display a list of posts on your home page, etc:

```handlebars
{{#foreach posts}}
<article class="{{post_class}}">
  <h2 class="post-title"><a href="{{url}}">{{title}}</a></h2>
  <p>{{excerpt words="26"}} <a class="read-more" href="{{url}}">&raquo;</a></p>
  <p class="post-footer">
    Posted by {{primary_author}} {{tags prefix=" on "}} at <time class="post-date" datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMMM YYYY"}}</time>
  </p>
</article>
{{/foreach}}

```

## Data Variables

When inside a `{{#foreach}}` block, you have access to a set of data variables about the current iteration. These are:

- **@index** (number) - the 0-based index of the current iteration
- **@number** (number) - the 1-based index of the current iteration
- **@key** (string) - if iterating over an object, rather than an array, this contains the object key
- **@first** (boolean) - true if this is the first iteration of the collection
- **@last** (boolean) - true if this is the last iteration of the collection
- **@odd** (boolean) - true if the @index is odd
- **@even** (boolean) - true if the @index is even
- **@rowStart** (boolean) - true if `columns` is passed and this iteration signals a row start
- **@rowEnd** (boolean) - true if `columns` is passed and this iteration signals a row end

## Usage

`{{#foreach}}` is a block helper. The most common use case in Ghost, is looping through posts.

```handlebars
{{#foreach posts}}
<h2><a href="{{url}}">{{title}}</a></h2>
<p>{{excerpt}}</p>
{{/foreach}}
```

### {{else}} and negation

Like all block helpers, `{{#foreach}}` supports adding an `{{else}}` block, which will be executed if there was no data to iterate over:

```handlebars
{{#foreach tags}}
<a href="{{url}}">{{name}}</a>
{{else}}
<p>There were no tags...</p>
{{/foreach}}
```

### The `limit` attribute

Passing `{{#foreach}}` a `limit` attribute, will tell it stop after a certain number of iterations.

```handlebars
{{#foreach posts limit="3"}}
<a href="{{url}}">{{name}}</a>
{{/foreach}}
```

Note that as the `{{#foreach}}` helper is only passively iterating over data, not actively fetching it, if you set limit to a number higher than the number of items in the collection, it will have no effect.

### The `from` and `to` attributes

Passing  `{{#foreach}}` a `from` or `to` attribute will change the items which are output. Both attributes are 1-indexed and inclusive,  so `from="2"` means from and including the 2nd post.

```handlebars
{{#foreach posts from="2" to="5"}}
<a href="{{url}}">{{name}}</a>
{{/foreach}}
```

## Data variable examples

### `@index`, `@number` and `@key`

`{{@index}}` is the 0-based index of the collection - that is the "count" of the loop. It starts at 0 and then each time around the loop, `{{@index}}` increases by 1. This is useful for adding numbered classes:

```handlebars
{{#foreach posts}}
  <div class="post-{{@index}}">{{title}}</div>
{{/foreach}}
```

`{{@number}}` is very similar to `@index`, but starts at 1 instead of 0, which is useful for outputting numbers you want users to see, e.g. in styled numbered lists:

```handlebars
<ol>
{{#foreach posts}}
  <li>
    <a href="{{url}}">
      <span class="number" aria-hidden="true">{{@number}}</span>{{title}}
    </a>
  </li>
{{/foreach}}
</ol>
```

`{{@key}}` will contain the object key, in the case where you iterate over an object, rather than an array. There's no real use case for this in Ghost at present.

#### `@first` & `@last`

The following example checks through an array or object e.g `posts` and tests for the first entry.

```handlebars
{{#foreach posts}}
  {{#if @first}}
    <div>First post</div>
  {{/if}}
{{/foreach}}
```

We can also nest `if` statements to check multiple properties. In this example we are able to output the first and last post separately to other posts.

```handlebars
{{#foreach posts}}
    {{#if @first}}
    <div>First post</div>
    {{else}}
        {{#if @last}}
            <div>Last post</div>
        {{else}}
            <div>All other posts</div>
        {{/if}}
    {{/if}}
{{/foreach}}
```

#### `@even` & `@odd`

The following example adds a class of even or odd, which could be used for zebra striping content:

```handlebars
{{#foreach posts}}
    <div class="{{#if @even}}even{{else}}odd{{/if}}">{{title}}</div>
{{/foreach}}
```

#### `@rowStart` & `@rowEnd`

`@rowStart` and `@rowEnd` return `true` at the beginning and end of a column respectively when the `columns` value is set in a `#foreach`. In the following example the posts are being grouped up in threes into a wrapping `div` element:

```handlebars
{{#foreach posts columns="3"}}
    {{#if @rowStart}}<div class="column">{{/if}}
        <a href="{{url}}">{{title}}</a>
    {{#if @rowEnd}}</div>{{/if}}
{{/foreach}}
```

## Block Params

Block params allow you to name the individual item being operated on inside the loop, E.g.

```handlebars
{{#foreach posts as |my_post|}}
   {{#my_post}}
      <h1>{{title}}</h1>
    {{/my_post}}
{{/foreach}}
```

Which is much the same as doing `posts.forEach(function (my_post) {}` in JavaScript. Useful with advanced features like the `{{get}}` helper.
