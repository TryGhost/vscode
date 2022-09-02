---
title: "has"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: has"
meta_description: "#has allows theme developers to ask questions about the current context and provides more flexibility ⚡️ Read more about custom Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage:

`{{#has tag="value1,value2" author="value"}}`

`{{#has slug=../slug}}`

`{{#has number="nth:3"}}`

`{{#has any="twitter, facebook"}}`

`{{#has all="twitter, facebook"}}`

## Description

`{{#has}}` is like `{{#if}}` but with the ability to do more than test a boolean. It allows theme developers to ask questions about the current context and provide more flexibility for creating different layouts.

Like all block helpers, `{{#has}}` supports adding an `{{else}}` block or using `^` instead of `#` for negation - this means that the `{{#has}}` and `{{else}}` blocks are reversed if you use `{{^has}}` and `{{else}}` instead. In addition, it is possible to do `{{else has ...}}`, to chain together multiple options like a switch statement.

### Simple Example

The `{{#has}}` helper can be combined with internal tags, to display different information for different types of posts. E.g. implementing a link-style post by adding an internal tag of `#link` and using the has helper to detect it:

```handlebars
{{#post}}
  {{#has tag="#link"}}
     {{> "link-card"}}
  {{else}}
    {{> "post-card"}}
  {{/has}}
{{/post}}
```

## Usage

The `{{#has}}` helper supports four different types of "questions":

- Post has tag or author
- Context has slug or id
- Context has any or all properties set
- Foreach loop number or index

Questions are asked by providing attribute-value pairs, e.g. `tag="tag name"`. You can pass multiple attributes, and the `{{#has}}` helper will always treat this as an `OR`.

E.g. You can look for a post with a slug of "welcome" OR a tag of "getting started":

```handlebars
{{#has slug="welcome" tag="getting started"}}
  ...Will execute if the slug is welcome OR the tag is getting-started...
{{/has}}
```

### Post tag or author

#### Comma Separated List

```handlebars
{{#has tag="photo"}}{{/has}}
{{#has tag="photo, video"}}{{/has}}
{{#has author="Joanna Bloggs"}}{{/has}}
```

Specifically when inside the context of a post, you can use the `{{#has}}` helper to find out if the post has a particular tag or author. Both the `tag` and `author` attributes take a comma separated list. If you pass multiple values separated by a comma, these will be treated as an OR.

```handlebars
{{#has tag="General, News"}}
  ...Will execute if the post has a tag of General or News...
 {{/has}}
```

Tag and author matching is a lowercase match on the tag name or author name, which ignores special characters.

#### Counting

The `author` and `tag` attribute accepts a counting value. You can choose between:

- `count:[number]`
- `count:>[number]`
- `count:<[number]`

This functionality can be helpful when designing a theme. You can change the behaviour if a post has only one author or more than 1.

```handlebars
{{#has tag="count:1"}}{{/has}}
{{#has tag="count:>1"}}{{/has}}
{{#has author="count:<2"}}{{/has}}
```

### Slug or id

```handlebars
{{#has slug="welcome"}}{{/has}}
{{#has slug=../../slug}}{{/has}}
{{#has id=post.id}}{{/has}}
```

If you're in the context of an object that has a slug (e.g. post, author, tag and navigation items) you can use the `{{#has}}` helper to do an exact match. Similarly for all objects that have an ID.

You can either pass the `{{#has}}` helper a string wrapped in quotes, or a path to a data value from else where in the template data. For example, the following code does an exact match on the string "welcome". If the post's slug is the same, the code inside the has helper will execute.

```handlebars
{{#has slug="welcome"}}
  ... do something..
{{/has}}
```

Alternatively, you can pass a handlebars path, which references a different piece of data to match against:

```handlebars
{{#has slug=../post.slug}}
  ...do something...
{{/has}}
```

### Any or all

The `any` comparison will return true if **any** one of the properties is set in the current context, with support for paths and globals:

```handlebars
{{#has any="twitter, facebook, website"}}
{{#has any="author.facebook, author.twitter,author.website"}}
{{#has any="@site.facebook, @site.twitter"}}
```

Similarly, the `all` comparison will return true only when **all** of the properties are set:

```handlebars
{{#has all="@labs.subscribers,@labs.publicAPI"}}
```

### Foreach loop number or index

```handlebars
{{#has number="3"}}{{/has}} // A single number
{{#has number="3, 6, 9"}}{{/has}} // list of numbers
{{#has number="nth:3"}}{{/has}} // special syntax for nth item
{{!-- All of these work exactly the same for index --}}
```

When you're inside a `{{#foreach}}` loop of any kind, you have access to two special data variables called `@index` and `@number`. `@index` contains the 0-based index or count of the loop, and `@number` contains a 1-based index. That is each time around the loop these values increase by 1, but `@index` starts at 0, and `@number` starts at 1.

The `{{#has}}` helper will let you check which number/index of the iteration you are on using the 3 different styles of matching shown above. For example, if you have a list of posts and want to inject a special widget partial every 3rd post, you could do so using the `nth:3` pattern:

```handlebars
{{#foreach posts}}
  {{#has number="nth:3"}}
     {{> "widget"}}
  {{/has}}

  {{> "post-card"}}
{{/foreach}}
```

## Example Code

To determine if a post has a particular tag:

```handlebars
{{#post}}
    {{#has tag="photo"}}
        ...do something if this post has a tag of photo...
    {{else}}
        ...do something if this posts doesn't have a tag of photo...
    {{/has}}
{{/post}}
```

You can also supply a comma-separated list of tags, which is the equivalent of an OR query, asking if a post has any one of the given keywords:

```handlebars
{{#has tag="photo, video, audio"}}
    ...do something if this post has a tag of photo or video or audio...
{{else}}
    ...do something with other posts...
{{/has}}
```

You can do an AND query by nesting your `{{#has}}` helpers:

```handlebars
{{#has tag="photo"}}
    ...do something if this post has a tag of photo..
    {{#has tag="panorama"}}
       ...if the post has both the photo and panorama tags
    {{/has}}
{{else}}
    ...do something with other posts...
{{/has}}
```

