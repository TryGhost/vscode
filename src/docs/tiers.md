---
title: "tiers"
date: "2022-03-29"
meta_title: "Ghost Handlebars Theme Helpers: tiers"
meta_description: "Find out how to build a list of tiers for a post in your Ghost theme using the tiers Handlebars helper. Read more about Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{tiers}}` / `{{tiers prefix=":" separator=" - " lastSeparator=", " suffix='options'}}`

### Description

`{{tiers}}` is a formatting helper for outputting tier names. It defaults to a comma-separated list with `and` as the last separator and `tier(s)` as the suffix. Customize the helper by using a custom prefix, separator, last separator, and/or suffix. Note that values are white-space sensitive.

### Example code

Use the tiers helper to output tier names in ascending order by price. The examples below use tier names of “bronze,” “silver,” and “gold.”

```handlebars
{{tiers}}
{{! output: "bronze, silver and gold tiers" }}
```

#### Custom prefix

Use a custom prefix to add text before tier names.

```handlebars
{{tiers prefix="Access with:"}}
{{! output: "Access with: bronze, silver and gold tiers" }}
```

#### Custom separator

Use a custom separator to change the text between tier names.

```handlebars
{{tiers separator=" | "}}
{{! output: "bronze | silver and gold tiers" }}
```

#### Custom last separator

With multiple tiers, customize the last separator.

```handlebars
{{tiers lastSeparator=" plus "}}
{{! output: "bronze, silver plus gold tiers" }}
```

#### Custom suffix

Change the term “tier” with a custom suffix.

```handlebars
{{tiers suffix="options"}}
{{! output: "bronze, silver and gold options" }}
```

#### HTML values

`separator`, `prefix` , `lastSeparator`, and `suffix` accept HTML values.

```handlebars
{{tiers separator=" &bull; "}}
{{! output: "bronze • silver and gold tiers }}
```

## Fetching tiers with the `{{#get}}` helper

`{{tiers}}` helps with *formatting* your tier names. To fetch tier data, use the `{{#get}}` helper.

```handlebars
{{! Get all tiers with monthly price, yearly price, and benefits data }}
{{#get "tiers" include="monthly_price,yearly_price,benefits" limit="all" as |tiers|}}
    {{! Loop through our tiers collection }}
    {{#foreach tiers}}
        {{name}}
        {{#if monthly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price monthly_price currency=currency}}</a>
            </div>
        {{/if}}
        {{#if benefits}}
            {{#foreach benefits as |benefit|}}
                {{benefit}}
            {{/foreach}}
        {{/if}}
    {{/foreach}}
{{/get}}
```

See our [{{#get}} helper docs](/docs/themes/helpers/get/) to learn more about using this helper with tiers.