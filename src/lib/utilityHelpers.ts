import { HelperSchema, HelperTypes } from "./helperInterface";

export const utilityDefinitions: HelperSchema[] = [
  {
    name: "asset",
    type: HelperTypes["utility"],
    snippet: `{{asset '$1'}}`,
    usage: '{{asset "asset-path"}}',
    definition:
      "Outputs cacheable and cache-busting relative URLs to various asset",
    example: `{{asset 'css/style.css'}}`,
    link: "https://ghost.org/docs/themes/helpers/asset",
    parents: null,
    attributes: ['hasMinFile'],
    variables: null,
  },

  {
    name: "block",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{{block "section"}}} and {{#contentFor "section"}}',
    definition:
      '`{{{block "block-name"}}}` is a helper for creating a placeholder within a custom handlebars template.',
    example: `<!-- default.hbs -->
<body>
    {{{block "scripts"}}}
</body>
<!-- page.hbs -->
{{#contentFor "scripts"}}
    <script>
        runPageScripts();
    </script>
{{/contentFor}}`,
    link: "https://ghost.org/docs/themes/helpers/block/",
    parents: null,
    attributes: null,
    variables: null,
  },

  {
    name: "contentFor",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{{block "section"}}} and {{#contentFor "section"}}',
    definition:
      '`{{#contentFor}}` is a helper for adding to a block placeholder.',
    example: `<!-- default.hbs -->
<body>
    {{{block "scripts"}}}
</body>
<!-- page.hbs -->
{{#contentFor "scripts"}}
    <script>
        runPageScripts();
    </script>
{{/contentFor}}`,
    link: "https://ghost.org/docs/themes/helpers/block/",
    parents: null,
    attributes: null,
    variables: null,
  },

  {
    name: "body_class",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{body_class}}",
    definition:
      "`{{body_class}}` outputs dynamic CSS classes intended for the `<body>` tag in your `default.hbs` or other layout file, and is useful for targeting specific pages (or contexts) with styles. Values include `home-template`, `post-template`, `page-template`, `tag-template`, `author-template`, and `private-template`",
    example: `<body class="{{body_class}}">`,
    link: "https://ghost.org/docs/themes/helpers/body_class/",
    parents: null,
    attributes: null,
    variables: null
  },

  {
    name: "concat",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{concat "a" "b" "c"}}',
    definition:
      "The `{{concat}}` helper is designed to concatenate and link multiple things together.",
    example: `{{concat "my-class" slug }}`,
    link: "https://ghost.org/docs/themes/helpers/concat/",
    parents: null,
    attributes: ['separator'],
    variables: null
  },

  {
    name: "encode",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{encode value}}",
    definition:
      "`{{encode}}` is a simple output helper which will encode a given string so that it can be used in a URL.",
  example: `<a class="icon-twitter" href="https://twitter.com/share?text={{encode title}}&url={{url absolute='true'}}" onclick="window.open(this.href,    'twitter-share', 'width=550,height=235');return false;">
<span class="hidden">Twitter</span>
</a>`,
    link: "https://ghost.org/docs/themes/helpers/encode/",
    parents: null,
    attributes: null,
    variables: null
  },

  {
    name: "ghost_head",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{ghost_head}} and {{ghost_foot}}",
    definition:
      "Outputs vital system information in the document <head> like metadata, scripts, and styles.",
    example: `<head>
  <!-- Other styles and scripts -->
  {{ghost_head}}
</head>`,
    link: "https://ghost.org/docs/themes/helpers/ghost_head_foot/",
    parents: null,
    attributes: null,
    variables: null,
  },
  {
    name: "ghost_foot",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{ghost_foot}}",
    definition:
      "Outputs anything added to `Code Injection` at the global or page level.",
    example: `<body>
  <!-- ... -->
  {{ghost_foot}}
</body>`,
    link: "https://ghost.org/docs/themes/helpers/ghost_head_foot/",
    parents: null,
    attributes: null,
    variables: null,
  },

  {
    name: "link_class",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{link_class for="/about/"}}',
    definition:
      "The `{{link_class}}` helper adds dynamic classes depending on the currently viewed page.",
    example: `<li class="nav {{link_class for="/about/" activeClass="active"}}">About</li>`,
    link: "https://ghost.org/docs/themes/helpers/link_class/",
    parents: null,
    attributes: ["for", "activeClass", "class"],
    variables: null
  },

  {
    name: "log",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{log value}}",
    definition:
      "When running Ghost in development mode, use the `{{log}}` helper to output debug messages to the server console.",
    example: `{{log this}}`,
    link: "https://ghost.org/docs/themes/helpers/log/",
    parents: null,
    variables: null,
    attributes: null
  },

  {
    name: "pagination",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{pagination}}",
    definition:
      "`{{pagination}}` is a template driven helper which outputs HTML for ’newer posts’ and ‘older posts’ links if they are available and also says which page you are on.",
    example: `{{pagination}}
    <!-- outputs -->
    <nav class="pagination" role="navigation">
        {{#if prev}}
            <a class="newer-posts" href="{{page_url prev}}">&larr; Newer Posts</a>
        {{/if}}
        <span class="page-number">Page {{page}} of {{pages}}</span>
        {{#if next}}
            <a class="older-posts" href="{{page_url next}}">Older Posts &rarr;</a>
        {{/if}}
    </nav>`,
    link: "https://ghost.org/docs/themes/helpers/pagination/",
    parents: null,
    attributes: ["page", "prev", "next", "pages", "total", "limit", "page_url"],
    variables: null
  },

  {
    name: "partials",
    type: HelperTypes["utility"],
    snippet: "{{> \"$1\"}}",
    usage: '{{> "partial-name"}}',
    definition:
      '`{{> "partials"}}` is a helper for reusing chunks of template code in handlebars files.',
    example: `{{#foreach posts}}
  {{> "post-card"}}
{{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/partials/",
    parents: null,
    attributes: ["property"],
    variables: null
  },

  {
    name: "plural",
    type: HelperTypes["utility"],
    snippet: `{{plural \${1:pagination.total\$2} empty="$3" singular="% $4" plural="% $5"}}$0`,
    usage: '{{plural value empty="" singular="" plural=""}}',
    definition:
      "`{{plural}}` is a formatting helper for outputting strings which change depending on whether a number is singular or plural.",
    example: `{{plural pagination.total empty='No posts' singular='% post' plural='% posts'}}`,
    link: "https://ghost.org/docs/themes/helpers/plural/",
    parents: null,
    attributes: ["empty", "singular", "plural"],
    variables: null
  },

  {
    name: "post_class",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{post_class}}",
    definition:
      "`{{post_class}}` outputs classes intended for your post container, useful for targeting posts with styles. The classes are as follows: `post`, `featured`, `page`, `tag-:slug`. A featured page with a tag of `photo` and `panoramic` would get `post tag-photo tag-panoramic featured page`.",
    example: `<article class="{{post_class}}">`,
    link: "https://ghost.org/docs/themes/helpers/post_class/",
    parents: null,
    attributes: null,
    variables: null
  },

  {
    name: "prev_post",
    type: HelperTypes["utility"],
    snippet: null,
    usage:
      "{{#prev_post}}{{title}}{{/prev_post}}",
    definition:
      "When in the scope of a post, you can call the previous post helper, which performs a query against the API to fetch the previous post in accordance with the chronological order of the site.",
    example: `{{#post}}
  {{#prev_post}}
      <a href="{{url}}">{{title}}</a>
  {{/prev_post}}

  {{#next_post}}
      <a href="{{url}}">{{title}}</a>
  {{/next_post}}
{{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/prev_next_post/",
    parents: null,
    attributes: ['in'],
    variables: null
  },

  {
    name: "next_post",
    type: HelperTypes["utility"],
    snippet: null,
    usage:
      "{{#next_post}}{{title}}{{/next_post}}",
    definition:
      "When in the scope of a post, you can call the next post helper, which performs a query against the API to fetch the next post in accordance with the chronological order of the site.",
    example: `{{#post}}
  {{#prev_post}}
      <a href="{{url}}">{{title}}</a>
  {{/prev_post}}

  {{#next_post}}
      <a href="{{url}}">{{title}}</a>
  {{/next_post}}
{{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/prev_next_post/",
    parents: null,
    attributes: ['in'],
    variables: null
  },

  {
    name: "reading_time",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{reading_time}}",
    definition:
      "`{{reading_time}}` renders the estimated reading time for a post.",
    example: `{{reading_time minute="Only a minute" minutes="Takes % minutes"}}`,
    link: "https://ghost.org/docs/themes/helpers/reading_time/",
    parents: null,
    attributes: ['minute', 'minutes'],
    variables: null
  },

  {
    name: "search",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{search}}",
    definition:
      "The {{search}} helper outputs a search icon button that launches Ghost search when clicked.",
    example: `{{search}}`,
    link: "https://ghost.org/docs/themes/helpers/search/",
    parents: null,
    attributes: null,
    variables: null
  },

  {
    name: "translate",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{t}}",
    definition: "`{{t}}` is a helper to output text in your site language.",
    example: `{{t "Back"}}`,
    link: "https://ghost.org/docs/themes/helpers/translate/",
    parents: null,
    attributes: ['placeholder', 'subexpressions'],
    variables: null
  },
];
