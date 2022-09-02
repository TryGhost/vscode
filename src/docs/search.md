---
title: "search"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: search"
meta_description: "Add a search icon to your Ghost theme. Read more 👉"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{search}}`

## Description

The `{{search}}` helper outputs a search icon button that launches Ghost search when clicked.

The color of the icon uses the `currentColor` CSS property, meaning it will match the color of text around it. The styling can be overriden by using the `.gh-search-icon` class plus `!important`.

### Example Code

```html
{{search}}
```

The helper will output the following markup:

```html
<button class="gh-search-icon" aria-label="search" data-ghost-search style="display: inline-flex; justify-content: center; align-items: center; width: 32px; height: 32px; padding: 0; border: 0; color: inherit; background-color: transparent; cursor: pointer; outline: none;">
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M14.949 14.949a1 1 0 0 1 1.414 0l6.344 6.344a1 1 0 0 1-1.414 1.414l-6.344-6.344a1 1 0 0 1 0-1.414Z" fill="currentColor"/><path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" fill="currentColor"/></svg>
</button>
```

For other ways to launch Ghost search and to learn more about this feature, [see the Ghost search documentation](https://ghost.org/docs/themes/search/).
