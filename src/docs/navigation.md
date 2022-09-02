---
title: "navigation"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: navigation"
meta_description: "Find out how to output a navigation menu in a custom Ghost theme using the navigation helper. Read more about Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{navigation}}` and `{{navigation type="secondary"}}`

### Description

`{{navigation}}` is a template-driven helper which outputs formatted HTML of menu items defined in the Ghost admin panel (Settings > Design > Navigation). By default, the navigation is marked up using a [preset template](https://github.com/TryGhost/Ghost/blob/main/core/frontend/helpers/tpl/navigation.hbs).

There are two types of navigation, primary and secondary, which you can access using `{{navigation}}` and `{{navigation type="secondary"}}`.

### Default template

By default, the HTML output by including `{{navigation}}` in your theme, looks like the following:

```html
<ul class="nav">
    <li class="nav-home nav-current"><a href="/">Home</a></li>
    <li class="nav-about"><a href="/about/">About</a></li>
    <li class="nav-contact"><a href="/contact/">Contact</a></li>
    ...
</ul>
```

### Changing The Template

If you want to modify the default markup of the navigation helper, this can be achieved by creating a new file at `./partials/navigation.hbs`. If this file exists, Ghost will load it instead of the default template. Example:

```handlebars
<div class="my-fancy-nav-wrapper">
    <ul class="nav">
        <!-- Loop through the navigation items -->
        {{#foreach navigation}}
        <li class="nav-{{slug}}{{#if current}} nav-current{{/if}}"><a href="{{url absolute="true"}}">{{label}}</a></li>
        {{/foreach}}
        <!-- End the loop -->
    </ul>
</div>
```

Creating a new `navigation.hbs` will overwrite both the main navigation as and secondary navigation. To customise the secondary navigation differently use the `{{#if isSecondary}}...{{/if}}` helper. Example:

```handlebars
{{#if isSecondary}}
    <ul class="nav" role="menu">
        {{#foreach navigation}}
            <li class="nav-{{slug}}" role="menuitem">
                <a href="{{url}}">
                    <svg class="icon" role="img" aria-label="{{slug}} icon">
                        <title>{{slug}}</title>
                        <use xlink:href="#{{slug}}"></use>
                    </svg>
                </a>
            </li>
        {{/foreach}}
    </ul>
{{else}}
    <ul class="nav" role="menu">
        {{#foreach navigation}}
            <li class="{{link_class for=(url) class=(concat "nav-" slug)}}" role="menuitem">
                <a href="{{url absolute="true"}}">{{label}}</a>
            </li>
        {{/foreach}}
    </ul>
{{/if}}
```

The up-to-date default template in Ghost is always available [here](https://github.com/TryGhost/Ghost/blob/main/core/frontend/helpers/tpl/navigation.hbs).

### List of Attributes

A navigation item has the following attributes which can be used inside your `./partials/navigation.hbs` template file...

* **{{label}}** - The text to display for the link
* **{{url}}** - The URL to link to - see the url helper for more options
* **{{current}}** - Boolean true / false - whether the URL matches the current page
* **{{slug}}** - Slugified name of the page, eg `about-us`. Can be used as a class to target specific menu items with CSS or jQuery.

These attributes can only be used inside the `{{#foreach navigation}}` loop inside `./partials/navigation.hbs`. A navigation loop will not work in other partial templates or theme files.

### Examples

The navigation helper doesn't output anything if there are no navigation items to output, so there's no need to wrap it in an `{{#if}}` statement to prevent an empty list. However, it's a common pattern to want to output a link to open the main menu, but only if there are items to show.

The data used by the `{{navigation}}` helper is also stored as a global variable called `@site.navigation`. You can use this global variable in any theme file to check if navigation items have been added by a user in the Ghost admin panel.

```handlebars
{{#if @site.navigation}}
    <a class="menu-button" href="#"><span class="word">Menu</span></a>
{{/if}}
```

This is also possible with the secondary navigation:

```handlebars
{{#if @site.secondary_navigation}}
    <a class="menu-button" href="#"><span class="word">Menu</span></a>
{{/if}}
```
