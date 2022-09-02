---
title: "price"
date: "2022-05-24"
meta_title: "Ghost Handlebars Theme Helpers: price"
meta_description: "Output prices in your Ghost publication with the price helper. More about Ghost themes inside ✨"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{price plan}}`

### Description

The `{{price}}` helper formats monetary values from their smallest denomination to a human readable denomination with currency formatting. Example:

```handlebars
{{price plan}}
```

This will output `$5`.

The `{{price}}` helper accepts a number of optional attributes:

* `currency` - defaults to `plan.currency` when passed a `plan` object
* `locale` - defaults to `@site.locale`
* `numberFormat` - defaults to "short", and can be either "short" ($5) or "long" ($5.00)
* `currencyFormat` - defaults to "symbol" and can be one of "symbol" ($5), "code" (EUR 5) or "name" (5 euros)

`{{price}}` can be used with static values as well, `{{price 4200}}` will output `42`.

The default behaviour of the `price` helper is the same as:

```handlebars
{{price plan.amount
  currency=plan.currency
  locale=@site.locale
  numberFormat="short"
  currencyFormat="symbol"
}}
```

Passing a `currency` without a price will output the symbol for that currency:

```handlebars
{{price currency="USD"}} <!-- Outputs: $ -->
```

### Example Code

Outputting prices for all tiers.

```handlebars
{{#get "tiers" include="monthly_price,yearly_price,benefits" limit="all" as |tiers|}}
    {{! Loop through our tiers collection }}
    {{#foreach tiers}}
        {{#if monthly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price monthly_price currency=currency}}</a>
            </div>
        {{/if}}
          {{#if yearly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price yearly_price currency=currency}}</a>
            </div>
        {{/if}}

    {{/foreach}}
{{/get}}
```

Outputting prices for a member's subscriptions.

```html
<!-- account.hbs -->

{{#foreach @member.subscriptions}}
  <div class="subscription">
    <label class="subscriber-detail-label">Your plan</label>
    <span class="subscriber-detail-content">{{price plan}}/{{plan.interval}}</span>
  </div>
{{/foreach}}
```
