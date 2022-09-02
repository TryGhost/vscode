---
title: "@custom"
date: "2022-05-23"
meta_title: "Ghost Handlebars Theme Helpers: @custom"
meta_description: "How to access custom theme settings in your Handlebars theme. Read more about Ghost themes ⚡️"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

The `@custom` property provides access to custom theme settings, which are available anywhere in your theme.

The attributes of the `@custom` property are set by individual themes in the `package.json` file. Depending on the type of setting, the `@custom` property can then be used with the `{{#if}}` or `{{#match}}` helpers to customise the theme behaviour based on user settings.


### Example code

```html
<body class="{{body_class}} {{#match @custom.typography "Elegant serif"}}font-alt{{/match}}">
    ...
    <section class="footer-cta">
        {{#if @custom.cta_text}}<h2>{{@custom.cta_text}}</h2>{{/if}}
        <a href="#portal/signup">Sign up now</a>
    </section>
</body>
```


More information about creating and working with custom theme settings can be found [here](/docs/themes/custom-settings/).
