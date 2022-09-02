---
title: "prev_post & next_post"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: prev_post & next_post"
meta_description: "Create chronological post links on your Ghost publication with some useful handlebars helpers. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#prev_post}}{{title}}{{/prev_post}}` -  `{{#next_post}}{{title}}{{/next_post}}`

### Description

When in the scope of a post, you can call the next or previous post helper, which performs a query against the API to fetch the next or previous post in accordance with the chronological order of the site.

Inside of the opening and closing tags of the `{{#next_post}}{{/next_post}}` or `{{#prev_post}}{{/prev-post}}` helper, the normal helpers for outputting posts will work, but will output the details of the post that was fetched from the API, rather than the original post.

```handlebars
{{#post}}
	{{#prev_post}}
		<a href="{{url}}">{{title}}</a>
	{{/prev_post}}

	{{#next_post}}
		<a href="{{url}}">{{title}}</a>
	{{/next_post}}
{{/post}}
```

You can also scope where to pull the previous and next posts from using the `in` parameter

```handlebars
{{#post}}
	{{#prev_post in="primary_tag"}}
		<a href="{{url}}">{{title}}</a>
	{{/prev_post}}

	{{#next_post in="primary_tag"}}
		<a href="{{url}}">{{title}}</a>
	{{/next_post}}
{{/post}}
```
