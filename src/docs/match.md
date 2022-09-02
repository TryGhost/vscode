---
title: "match"
date: "2022-01-31"
meta_title: "Ghost Handlebars Theme Helpers: match"
meta_description: "Make simple comparisons in templates using this Handlebars theme helper in your custom Ghost theme."
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#match @custom.color_scheme "=" "Dark"}} class="dark-mode"{{/match}}`

### Description

`{{#match}}` allows for simple comparisons, and executing different template blocks depending on the outcome.

Like all block helpers, `{{#match}}` supports adding an `{{else}}` block or using `^` instead of `#` for negation - this means that the `{{#match}}` and `{{else}}` blocks are reversed if you use `{{^match}}` and `{{else}}` instead. In addition, it is possible to do `{{else match ...}}`, to chain together multiple options like a switch statement.

### Operators

#### Equality

`match` supports comparing values for equality, which is the default behaviour:

```handlebars
{{#match @custom.color_scheme "=" "Dark"}}...{{else}}...{{/match}}

{{!-- Can be shortened to: --}}
{{#match @custom.color_scheme "Dark"}}...{{else}}...{{/match}}
```

The equality test can also be negated:

```handlebars
{{#match @custom.color_scheme "!=" "Dark"}}...{{else}}...{{/match}}
```

#### Numeric comparisons

The match handler supports >, <, >= and <= operators for numeric comparisons.

```handlebars
{{#match posts.length ">" 1}}...{{else}}...{{/match}}
```

#### Evaluation rules

Values passed to `match` are tested according to their _value_ as well as their _type_. For example:

```handlebars
{{!-- Returns true/false --}}
{{#match feature_image true}}...{{else}}...{{/match}}

{{!-- Always returns false --}}
{{#match feature_image 'true'}}...{{else}}...{{/match}}
```

`match` can also be used to test boolean values similar to `if`:

```handlebars
{{!-- Default behaviour is to test if a value is truthy --}}
{{#match featured}}...{{else}}...{{/match}}
```

### Example code

The `match` helper is extremely useful when combined with [Custom settings](/docs/themes/custom-settings/) using `@custom`:

```handlebars
{{!-- Adds the 'font-alt' class when the Typography setting is set to 'Elegant serif' --}}
<body class="{{body_class}} {{#match @custom.typography "Elegant serif"}}font-alt{{/match}}">
```
