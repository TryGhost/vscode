---
title: "comments"
date: "2022-08-10"
meta_title: "Ghost Handlebars Theme Helpers: comments"
meta_description: "How to add comments to your Ghost theme with the comments helper!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{comments}}`

## Description
The `{{comments}}` helper outputs Ghost's member-based commenting system. [Learn more about comments.](https://ghost.org/help/commenting)

Comments are visible only when they have been (1) enabled by the publication owner and (2) the person visiting the page has access to the post.

### Basic example

```handlebars
{{comments}}
```
By default, `{{comments}}` outputs a title and comment count. These elements, along with the color mode and the saturation of the avatar&apos;s background color, can be customized via attributes.

## Attributes

<div class="gh-table-scroller">
    <table class="gh-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Options</th>
                <th>Default</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>title</code></td>
                <td>Header text for comment section</td>
                <td>Any string</td>
                <td>Member discussion</td>
            </tr>
            <tr>
                <td><code>count</code></td>
                <td>Boolean to toggle comment count on or off</td>
                <td><code>true</code> or <code>false</code></td>
                <td><code>true</code></td>
            </tr>
            <tr>
                <td><code>mode</code></td>
                <td>Set light or dark mode for comments</td>
                <td>auto, light, or dark</td>
                <td>auto (determined by the parent element's CSS <code>color</code> property)</td>
            </tr>
            <tr>
                <td><code>saturation</code></td>
                <td>Set saturation of avatar background color</td>
                <td><code>number</code></td>
                <td><code>60</code></td>
            </tr>
        </tbody>
    </table>
</div>

### Example with attributes

```handlebars
{{comments title="Join the club" count=false mode="light" saturation=80}}
{{! Customizes header text, hides comment count, sets element to light mode and avatar background color saturation to 80% }}
```

## Comment count

Use `{{comment_count}}` to output the number of comments a post has. This option is useful for displaying the comment count on the homepage or at the top of the post. Developers can also use it to customize the output of the `{{comments}}` helper.

### Attributes

<div class="gh-table-scroller">
    <table class="gh-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Options</th>
                <th>Default</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>singular</code></td>
                <td>The singular name for a comment</td>
                <td>Any string</td>
                <td>comment</td>
            </tr>
            <tr>
                <td><code>plural</code></td>
                <td>The plural name for comments</td>
                <td>Any string</td>
                <td>comments</td>
            </tr>
            <tr>
                <td><code>empty</code></td>
                <td>What to output when there are no comments</td>
                <td>Any string</td>
                <td>Output is empty when comment count equals zero</td>
            </tr>
            <tr>
                <td><code>autowrap</code></td>
                <td>Wraps comment count in an HTML tag</td>
                <td><code>HTML tag</code> or <code>false</code></td>
                <td><code>span</code></td>
            </tr>
            <tr>
                <td><code>class</code></td>
                <td>Add a custom class to wrapper element</td>
                <td>Any string</td>
                <td>""</td>
            </tr>
        </tbody>
    </table>
</div>

### Examples
```handlebars
{{comment_count empty="" singular="comment" plural="comments" autowrap="span" class=""}}
{{! default output: <span>5 comments</span> }}

{{comment_count singular="" plural=""}}
{{! output: <span>5</span> }}

{{comment_count empty="0"}}
{{! output: <span>0</span>. (The default is an empty output.) }}

{{comment_count autowrap="div" class="style-me"}}
{{! output: <div class="style-me">5 comments</span> }}

{{comment_count autowrap="false"}}
{{! output: 5 comments (just text!) }}
```

## Additional customization

Use the `comments` helper with `{{#if}}` for more granular control over output. `{{#if comments}}` returns true when (1) comments have been enabled and (2) the reader has access to the post.

### Advanced example

```handlebars
{{#if comments}}
   <h2>Discussion</h2>
   <a href="/guides">Community guidelines</a>
   {{comment_count}}
   {{comments title="" count=false mode="light" saturation=80}}
{{/if}}
```
