import { HelperSchema, HelperTypes } from "./helperInterface";

export const functionalDefinitions: HelperSchema[] = [
  {
    name: "foreach",
    snippet: "{{#foreach $1}}\n\t$0\n{{/foreach}}",
    type: HelperTypes["functional"],
    usage: "{{#foreach data}}{{/foreach}}",
    definition: "Loop helper designed for working with lists of posts. The `foreach` helper will output the content placed between its opening and closing tags `{{#foreach}}{{/foreach}}` once for each item in the collection passed to it.",
    example: `{{#foreach posts}}
  <article class="{{post_class}}">
      <h2 class="post-title"><a href="{{url}}">{{title}}</a></h2>
      <p>{{excerpt words="26"}} <a class="read-more" href="{{url}}">&raquo;</a></p>
      <p class="post-footer">
          Posted by {{primary_author}} {{tags prefix=" on "}} at <time class="post-date" datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMMM YYYY"}}</time>
      </p>
  </article>
{{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/foreach/",
    parents: ["get"],
    variables: [
      "@index",
      "@number",
      "@key",
      "@first",
      "@last",
      "@odd",
      "@even",
      "@rowStart",
      "@rowEnd",
    ],
    attributes: ["limit", "from", "to", "block params"],
  },

  {
    name: "get",
    snippet: '{{#get ${1|"posts","tags","authors","tiers"|}}}\n\t$0\n{{/get}}',
    type: HelperTypes["functional"],
    usage: '{{#get "posts"}}{{/get}}',
    definition: "`{{#get}}` is a special block helper that makes a custom query to the Ghost API to fetch publicly available data. These requests are made server-side before your templates are rendered.",
    example: `{{! Get three posts that have the same primary tag as the current post}}
{{#post}}
    {{#get "posts" filter="primary_tag:{{primary_tag.slug}}" limit="3"}}
        {{#foreach posts}}
            <li><a href="{{url}}">{{title}}</a></li>
        {{/foreach}}
    {{/get}}
{{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/get/",
    parents: null,
    attributes: ["limit", "page", "order", "include", "filter"],
    variables: null,
  },

  {
    name: "has",
    snippet: "{{#has ${1|tag,slug,number,any,all|}=\"$2\"}}\n\t$0\n{{/has}}",
    type: HelperTypes["functional"],
    usage: '{#has tag="value1,value2" author="value"}}',
    definition: "`{{#has}}` is like `{{#if}}` but with the ability to do more than test a boolean. It allows theme developers to ask questions about the current context and provide more flexibility for creating different layouts.",
    example: `{{#has slug="welcome" tag="getting started"}}
  {{! ..Will execute if the slug is welcome OR the tag is getting-started...}}
{{/has}}`,
    link: "https://ghost.org/docs/themes/helpers/has/",
    parents: null,
    attributes: ['tag', 'slug', 'number', 'any', 'all'],
    variables: ['count']
  },

  {
    name: "if",
    snippet: "{{#if $1}}\n\t$0\n{{/if}}",
    type: HelperTypes["functional"],
    usage: "{{#if featured}}{{/if}}",
    definition: "Test very simple conditionals. Like all block helpers, `{{#if}}` supports adding an `{{else}}` block or using `^` instead of `#` for negation",
    example: `{{#post}}
  {{#if featured}}
  ...do something if the post is featured...
  {{/if}}
{{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/if/",
    parents: null,
    attributes: null,
    variables: null
  },

  {
    name: "else",
    snippet: null,
    type: HelperTypes["functional"],
    usage: "{{#if featured}}...{{else}}...{{/if}}",
    definition: "Output content where the conditional is false. Use `{{else if ...}}`, `{{else match ...}}`, and so on to chain together multiple options like a switch statement.",
    example: `{{#if feature_image}}
    <img src="{{img_url feature_image}}" />
 {{else}}
    <img src="{{asset "img/default-img.jpg"}}" />
 {{/if}}`,
    link: "https://ghost.org/docs/themes/helpers/if/",
    parents: ['if','has','match'],
    attributes: null,
    variables: null
  },

  {
    name: "is",
    snippet:
      "{{#is ${1|home,index,post,page,tag,author,paged,private|}}}\n\t$2\n{{/is}}",
    type: HelperTypes["functional"],
    usage: '{{#is "contexts"}}',
    definition: "The `{{#is}}` helper allows you to check the context of the current route. For example, to check if this is the home page, a post, or a tag page. Use this to output different content based on the current context.",
    example: `{{#is "post, page"}}
  {{!  ... content to render if the current route represents a post or a page ...}}
{{/is}}`,
    link: "https://ghost.org/docs/themes/helpers/is/",
    parents: null,
    attributes: ["home","index","post","page","tag","author","paged","private"],
    variables: null
  },

  {
    name: "match",
    snippet: "{{#match $1 \"${2|=,!=,>,<,>=,<=|}\" $3}}\n\t$0\n{{/match}}",
    type: HelperTypes["functional"],
    usage:
      '{{#match @custom.color_scheme "=" "Dark"}} class="dark-mode"{{/match}}',
    definition: "`{{#match}}` allows for simple comparisons and executes different template blocks depending on the outcome.",
    example: `{{#match @custom.color_scheme "=" "Dark"}}...{{else}}...{{/match}}`,
    link: "https://ghost.org/docs/themes/helpers/match/",
    parents: null,
    attributes: null,
    variables: null
  },

  {
    name: "unless",
    type: HelperTypes["functional"],
    snippet: "{{#unless $1}}\n\t$0\n{{/unless}}",
    usage: "{{#unless featured}}{{/unless}}",
    definition: "`{`{#unless}}` is essentially the opposite of `{{#if}}`. If you want to test a negative conditional only: if you only need the `{{else}}` part of an `{{#if}}` statement, then `{{#unless}}` is what you need.",
    example: `{{#unless featured}}
  {{!...do something...}}
{{/unless}}`,
    link: "https://ghost.org/docs/themes/helpers/unless/",
    parents: null,
    attributes: null,
    variables: null
  },
];
