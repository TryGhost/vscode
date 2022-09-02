---
title: "translate"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: translate"
meta_description: "Discover how to translate content using your Ghost theme and the translate helper. Read more about translations in Ghost 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{t}}`

## Description

`{{t}}` is a helper to output text in your site language.

Ghost's front-end and themes are fully translatable by enabling a publication language in the setting in Ghost admin, and using the translate helper to wrap around any plain text in your theme.


## Making a theme translatable

Follow these steps to make your theme fully translatable:

#### 1. Create a `locales` folder and add language files

Create a folder called `locales`. If using a theme that is already translatable, this may exist already.

Inside the `locales` folder, add target language files for each translatable language used on your site. For example `locales/en.json` for English and `locales/es.json` for Spanish. [A valid language](https://www.w3schools.com/tags/ref_language_codes.asp) code must be used.

#### 2. Translate included sentences

Translate the sentences used in your theme inside your new language files.

For example, in `locales/en.json`:
```json
{
    "Back": "Back",
    "Newer Posts": "Newer Posts",
    "Older Posts": "Older Posts",
    "Page {page} of {pages}": "Page {page} of {pages}",
    "Subscribe": "Subscribe",
    "Subscribe to {blogtitle}": "Subscribe to {blogtitle}",
    "Subscribed!": "Subscribed!",
    "with the email address": "with the email address",
    "Your email address": "Your email address",
    "You've successfully subscribed to": "You've successfully subscribed to",
    "A collection of posts": "A collection of posts",
    "A collection of 1 post": "A collection of 1 post",
    "A collection of % posts": "A collection of % posts",
    "Get the latest posts delivered right to your inbox": "Get the latest posts delivered right to your inbox",
    "Latest Posts": "Latest Posts",
    "<a href='{url}'>More posts</a> by {name}": "<a href='{url}'>More posts</a> by {name}",
    "No posts": "No posts",
    " (Page %)": " (Page %)",
    "Read More": "Read More",
    "Read <a href='{url}'>more posts</a> by this author": "Read <a href='{url}'>more posts</a> by this author",
    "See all % posts": "See all % posts",
    "Share this": "Share this",
    "Stay up to date! Get all the latest & greatest posts delivered straight to your inbox": "Stay up to date! Get all the latest & greatest posts delivered straight to your inbox",
    "This post was a collaboration between": "This post was a collaboration between",
    "youremail@example.com": "youremail@example.com",
    "1 post": "1 post",
    "% posts": "% posts",
    "1 min read": "1 min read",
    "% min read": "% min read"
}
```

And edited to translate into Spanish for `locales/es.json`:
```json
{
    "Back": "Volver",
    "Newer Posts": "Artículos Siguientes",
    "Older Posts": "Artículos Anteriores",
    "Page {page} of {pages}": "Página {page} de {pages}",
    "Subscribe": "Suscríbete",
    "Subscribe to {blogtitle}": "Suscríbete a {blogtitle}",
    "Subscribed!": "¡Suscrito!",
    "with the email address": "con el correo electrónico",
    "Your email address": "Tu correo electrónico",
    "You've successfully subscribed to": "Te has suscrito con éxito a",
    "A collection of posts": "Una colección de artículos",
    "A collection of 1 post": "Una colección de 1 artículo",
    "A collection of % posts": "Una colección de % artículos",
    "Get the latest posts delivered right to your inbox": "Recibe los últimos artículos directamente en tu buzón",
    "Latest Posts": "Últimos Artículos",
    "<a href='{url}'>More posts</a> by {name}": "<a href='{url}'>Más artículos</a> de {name}",
    "No posts": "No hay artículos",
    " (Page %)": " (Página %)",
    "Read More": "Lee Más",
    "Read <a href='{url}'>more posts</a> by this author": "Lee <a href='{url}'>más artículos</a> de este autor",
    "See all % posts": "Ver todos los % artículos",
    "Share this": "Comparte",
    "Stay up to date! Get all the latest & greatest posts delivered straight to your inbox": "¡Mantente al día! Recibe todos los últimos y mejores artículos directamente en tu buzón",
    "This post was a collaboration between": "Este artículo fue una colaboración entre",
    "youremail@example.com": "tucorreo@ejemplo.com",
    "1 post": "1 artículo",
    "% posts": "% artículos",
    "1 min read": "1 min de lectura",
    "% min read": "% min de lectura",
    "< 1 min read": "< 1 min de lectura"
}
```

It is possible to use any translation key on the left, but readable English is advised in order to take advantage of the fallback option inside the `{{t}}` translation helper when no translation is available.

Dates, with month names, are automatically translated. You don't need to include them in the translation files.

Use HTML entities instead of characters, for example `&lt;` instead of `<`.

#### 3. Enable blog language

Verify that the `.json` translation file for your active theme is in place and then activate the language in the General settings of Ghost admin. Enter the correct language code into your settings menu and hit save.

#### 4. Ensure templates exist

To ensure that your theme is fully translatable, two core templates must exist in your theme. Check the following templates exist:

**pagination.hbs** - exists in `content/themes/mytheme/partials`, copy the [template](https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/frontend/helpers/tpl/pagination.hbs)

**navigation.hbs** - exists in `content/themes/mytheme/partials`, copy the [template](https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/frontend/helpers/tpl/navigation.hbs)

#### 5. Use the translation helper

Any plain text in your theme must be wrapped in the `{{t}}` translation helper, with `{{t` to the left of the text and `}}` to the right.

Look for any plain text in all of your theme's `.hbs` template files and ensure the translation helper is present.

#### 6. Declare language in HTML

It's advisable to add the HTML lang attribute to the `<html>` tag at the start of the theme's `default.hbs` template, using Ghost's `{{@site.locale}}` helper: `<html lang="{{@site.locale}}">`. `{{@site.locale}}` will automatically be replaced on the site with the corresponding language locale tag set in Ghost Admin.

#### 7. Reactivate the theme

To make the new changes effective, run `ghost restart`.

## Optional features

The translation helper can interact with many other handlebars expressions in order to implement more advanced translations within your theme.

Here are some of the most commonly used advanced translation features:

#### Placeholders

Placeholders are dynamic values that are replaced on runtime, and can be implemented using single braces. This is useful for translations if you need to insert dynamic data attributes to your translations.

For example, here is a placeholder in the theme translation file:
```json
"Proudly published with {ghostlink}": "Publicado con {ghostlink}",
```

Which is defined in the theme template `default.hbs` using:
```handlebars
{{{t "Proudly published with {ghostlink}" ghostlink="<a href=\"https://ghost.org\">Ghost</a>"}}}
```

Placeholders with data attributes can also be used, for example:
```handlebars
{{t "Subscribe to {blogtitle}" blogtitle=@site.title}}
```

#### Subexpressions

The concept of subexpressions allows you to invoke multiple helpers in one expression.

For example, a `(t)` subexpression (instead of normal `{{t}}` helper) can be used as a parameter inside another helper such as `{{tags}}`.

This can be used to translate the prefix or suffix attribute of the `{{tags}}`, `{{authors}}` or `{{tiers}}` helper.


#### Plural helper

`{{plural}}` is a [formatting helper](/docs/themes/helpers/plural/) for outputting strings which change depending on whether a number is singular or plural.

This can be used in translations to output information such as number of posts:

```json
"No posts": "No hay artículos",
"1 post": "1 artículo",
"% posts": "% artículos",
```

In the theme template `author.hbs`, several (t) subexpressions instead of normal `{{t}}` helpers can be used as parameters inside

```json
{{plural ../pagination.total empty=(t "No posts") singular=(t "1 post") plural=(t "% posts")}}
```

#### Reading time helper

The [reading time helper](/docs/themes/helpers/reading_time/) can be used in translations to provide a reading time for your posts in the desired language.

For example, in `es.json`:

"1 min read": "1 min de lectura",
"% min read": "% min de lectura",
And in theme template post.hbs

And in the theme template `post.hbs`:
```handlebars
{{reading_time minute=(t "1 min read") minutes=(t "% min read")}}
```

#### Pagination

The [`{{meta_title}}`](/docs/themes/helpers/meta_data/) helper accepts a page parameter that can be used in conjunction with translations. By using the follow it's possible to translate the word "Page" shown in the title of paginated pages:

``` handlebars
<title>{{meta_title page=(t "Page %")}}</title>
```
