import { HelperSchema, HelperTypes } from "./helperInterface";

export const utilityDefinitions: HelperSchema[] = [
  {
    name: "asset",
    type: HelperTypes["utility"],
    snippet: `{{asset '$1'}}$2`,
    usage: '{{asset "asset-path"}}',
    definition:
      "Outputs cacheable and cache-busting relative URLs to various asset",
    example: `{{asset 'css/style.css'}}`,
    link: "https://ghost.org/docs/themes/helpers/asset",
  },

  {
    name: "block",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{{block "section"}}} and {{#contentFor "section"}}',
    definition:
      '{{{block "block-name"}}} is a helper for creating a placeholder within a custom handlebars template.',
    example: `
    <!-- default.hbs -->
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
  },

  {
    name: "body_class",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{body_class}}",
    definition:
      "{{body_class}} – outputs dynamic CSS classes intended for the <body> tag in your default.hbs or other layout file, and is useful for targeting specific pages (or contexts) with styles.",
    example: `<body class="{{body_class}}">`,
    link: "https://ghost.org/docs/themes/helpers/body_class/",
  },

  {
    name: "concat",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{concat "a" "b" "c"}}',
    definition:
      "The {{concat}} helper is designed to concatenate and link multiple things together.",
    example: `{{concat "my-class" slug }}`,
    link: "https://ghost.org/docs/themes/helpers/concat/",
  },

  {
    name: "encode",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{encode value}}",
    definition:
      "{{encode}} is a simple output helper which will encode a given string so that it can be used in a URL.",
    example: `
    <a class="icon-twitter" href="https://twitter.com/share?text={{encode title}}&url={{url absolute='true'}}" onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
        <span class="hidden">Twitter</span>
    </a>`,
    link: "https://ghost.org/docs/themes/helpers/encode/",
  },

  {
    name: "ghost_head_foot",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{ghost_head}} and {{ghost_foot}}",
    definition:
      "These helpers output vital system information at the top and bottom of the document, and provide hooks to inject additional scripts and styles.",
    example: `
    <head>
    {{ghost_head}}
    </head>
    <!-- ... -->
    {{ghost_foot}}
    </body>`,
    link: "https://ghost.org/docs/themes/helpers/ghost_head_foot/",
  },

  {
    name: "link_class",
    type: HelperTypes["utility"],
    snippet: null,
    usage: '{{link_class for="/about/"}}',
    definition:
      "The {{link_class}} helper adds dynamic classes depending on the currently viewed page.",
    example: `<li class="nav {{link_class for="/about/" activeClass="active"}}">About</li>`,
    link: "https://ghost.org/docs/themes/helpers/link_class/",
  },

  {
    name: "log",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{log value}}",
    definition:
      "When running Ghost in development mode, you can use the {{log}} helper to output debug messages to the server console. ",
    example: `
    {{#foreach posts}}
        {{log post}}
    {{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/log/",
  },

  {
    name: "pagination",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{pagination}}",
    definition:
      "{{pagination}} is a template driven helper which outputs HTML for ’newer posts’ and ‘older posts’ links if they are available and also says which page you are on.",
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
  },

  {
    name: "partials",
    type: HelperTypes["utility"],
    snippet: `{{> "$1"}}\n$2`,
    usage: '{{> "partial-name"}}',
    definition:
      '{{> "partials"}} is a helper for reusing chunks of template code in handlebars files.',
    example: `
    {{#foreach posts}}
        {{> "post-card"}}
    {{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/partials/",
  },

  {
    name: "plural",
    type: HelperTypes["utility"],
    snippet: `{{plural pagination.total empty='$1' singular='% $2' plural='% $3'}}$4`,
    usage: '{{plural value empty="" singular="" plural=""}}',
    definition:
      "{{plural}} is a formatting helper for outputting strings which change depending on whether a number is singular or plural.",
    example: `{{plural pagination.total empty='No posts' singular='% post' plural='% posts'}}`,
    link: "https://ghost.org/docs/themes/helpers/plural/",
  },

  {
    name: "post_class",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{post_class}}",
    definition:
      "{{post_class}} outputs classes intended for your post container, useful for targeting posts with styles.",
    example: `<article class="{{post_class}}">`,
    link: "https://ghost.org/docs/themes/helpers/post_class/",
  },

  {
    name: "prev_next_pos",
    type: HelperTypes["utility"],
    snippet: null,
    usage:
      "{{#prev_post}}{{title}}{{/prev_post}} - {{#next_post}}{{title}}{{/next_post}}",
    definition:
      "When in the scope of a post, you can call the next or previous post helper, which performs a query against the API to fetch the next or previous post in accordance with the chronological order of the site.",
    example: `
    {{#post}}
        {{#prev_post}}
            <a href="{{url}}">{{title}}</a>
        {{/prev_post}}

        {{#next_post}}
            <a href="{{url}}">{{title}}</a>
        {{/next_post}}
    {{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/prev_next_post/",
  },

  {
    name: "reading_time",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{reading_time}}",
    definition:
      "{{reading_time}} renders the estimated reading time for a post.",
    example: `{{reading_time minute="Only a minute" minutes="Takes % minutes"}}`,
    link: "https://ghost.org/docs/themes/helpers/reading_time/",
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
  },

  {
    name: "translate",
    type: HelperTypes["utility"],
    snippet: null,
    usage: "{{t}}",
    definition: "{{t}} is a helper to output text in your site language.",
    example: `{{t "Back"}}`,
    link: "https://ghost.org/docs/themes/helpers/translate/",
  },
];
