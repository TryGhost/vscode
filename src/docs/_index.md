---
layout: "single"
title: "Helpers"
date: "2020-10-01"
meta_title: "Ghost Handlebars Themes - Functional Helpers"
meta_description: "Discover how to work with the full range of functional helpers in a custom Ghost theme. Learn more about Handlebars themes!"
---

Helpers add additional functionally to Handlebars, the templating language Ghost themes use.

## Functional helpers

Functional helpers are used to work with data objects. Use this reference list to discover what each handlebars helper can do when building a custom Ghost theme.

<div class="gh-table-scroller">
<table class="gh-table plain">
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/foreach/">foreach</a></td>
            <td>Loop helper designed for working with lists of posts</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/get/">get</a></td>
            <td>Special block helper for custom queries</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/has/">has</a></td>
            <td>Like <code>{{#if}}</code> but with the ability to do more than test a boolean</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/if/">if</a></td>
            <td>Test very simple conditionals</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/is/">is</a></td>
            <td>Check the context of the current route</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/match/">match</a></td>
            <td>Compare two values for equality</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/unless/">unless</a></td>
            <td>The opposite of <code>{{#if}}</code></td>
        </tr>
    </tbody>
</table>
</div>

## Data helpers

Data helpers are used to output data from your site. Use this reference list to discover what each handlebars helper can do when building a custom Ghost theme.

<div class="gh-table-scroller">
<table class="gh-table plain">
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/config/">@config</a></td>
            <td>Provides access to global data properties</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/custom/">@custom</a></td>
            <td>Provides access to custom theme settings</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/site/">@site</a></td>
            <td>Provides access to global settings</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/authors/">authors</a></td>
            <td>Outputs the post author(s)</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/comments/">comments</a></td>
            <td>Outputs Ghost's member-based commenting system</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/content/">content</a></td>
            <td>Outputs the full post content as HTML</td>
        </tr>
         <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/date/">date</a></td>
            <td>Outputs the date in a format of your choosing</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/excerpt/">excerpt</a></td>
            <td>Outputs the custom excerpt, or the post content with HTML stripped</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/facebook/">facebook</a></td>
            <td>Outputs the full URL to the Facebook profile from Settings</td>
        </tr>
          <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/img_url/">img_url</a></td>
            <td>Outputs the correctly calculated URL for the provided image property</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/link/">link</a></td>
            <td>Creates links with dynamic classes</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/navigation/">navigation</a></td>
            <td>Helper which outputs formatted HTML for navigation links</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/post/">post</a></td>
            <td>More <code>object</code> than helper – Contains all data for a specific post</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/price/">price</a></td>
            <td>Outputs a price with formatting options</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/tags/">tags</a></td>
            <td>Outputs the post tags</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/tiers/">tiers</a></td>
            <td>Outputs the post tier(s)</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/title/">title</a></td>
            <td>The post title, when inside the <code>post</code> scope</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/total_members/">total_members</a></td>
            <td>Outputs the number of members, rounded and humanised</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/total_paid_members/">total_paid_members</a></td>
            <td>Outputs the number of paying members, rounded and humanised</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/twitter/">twitter</a></td>
            <td>Outputs the full URL to the Twitter profile from Settings</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/url/">url</a></td>
            <td>The post URL, when inside the <code>post</code> scope</td>
        </tr>
    </tbody>
</table>
</div>

## Utility helpers

Utility helpers are used to perform minor, optional tasks. Use this reference list to discover what each handlebars helper can do when building a custom Ghost theme.

<div class="gh-table-scroller">
<table class="gh-table plain">
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/asset/">asset</a></td>
            <td>Outputs cachable and cache-busting relative URLs to various asset types</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/block/">block</a></td>
            <td>Used along with <code>{{contentFor}}</code> to pass data up and down the template hierarchy</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/body_class/">body_class</a></td>
            <td>Outputs dynamic CSS classes intended for the <code>&lt;body&gt;</code> tag</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/concat/">concat</a></td>
            <td>Concatenate and link multiple things together</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/encode/">encode</a></td>
            <td>Encode text to be safely used in a URL</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/ghost_head_foot/">ghost_head</a> / <a class="link-mono" href="/docs/themes/helpers/ghost_head_foot/">ghost_foot</a></td>
            <td>Outputs vital system information at the top and bottom of the document</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/link_class/">link_class</a></td>
            <td>Add dynamic classes depending on the currently viewed page</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/log/">log</a></td>
            <td>In development mode, output data in the console</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/pagination/">pagination</a></td>
            <td>Helper which outputs formatted HTML for pagination links</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/partials/">partials</a></td>
            <td>Include chunks of reusable template code</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/plural/">plural</a></td>
            <td>Output different text based on a given input</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/post_class/">post_class</a></td>
            <td>Outputs classes intended for your post container</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/prev_next_post/">prev_post</a> / <a class="link-mono" href="/docs/themes/helpers/prev_next_post/">next_post</a></td>
            <td>Within the <code>post</code> scope, returns the URL to the previous or next post</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/reading_time/">reading_time</a></td>
            <td>Renders the estimated reading time for a post</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/search/">search</a></td>
            <td>Output a working, pre-styled search button & icon</td>
        </tr>
        <tr>
            <td><a class="link-mono" href="/docs/themes/helpers/translate/">translate</a></td>
            <td>Output text in your site language (the backbone of i18n)</td>
        </tr>
    </tbody>
</table>
</div>
