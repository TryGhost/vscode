import { HelperSchema, HelperTypes } from "./helperInterface";

export const dataDefinitions: HelperSchema[] = [
  {
    name: "config",
    snippet: null,
    type: HelperTypes["data"],
    usage: "@config.posts_per_page",
    definition:
      "The @config property provides access to global data properties, which are available anywhere in your theme.",
    example: `<a href="{{page_url "next"}}">Show next {{@config.posts_per_page}} posts</a>`,
    link: "https://ghost.org/docs/themes/helpers/config/",
  },

  {
    name: "custom",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{@custom.property}}",
    definition:
      "The @custom property provides access to custom theme settings, which are available anywhere in your theme.",
    example: `<body class="{{body_class}} {{#match @custom.typography "Elegant serif"}}font-alt{{/match}}">`,
    link: "https://ghost.org/docs/themes/helpers/custom/",
  },

  {
    name: "site",
    snippet:
      "{{@site.${1|url,title,description,icon,logo,cover_image,twitter,facebook,navigation,timezone,locale|}}$2}",
    type: HelperTypes["data"],
    usage: "{{@site.property}}",
    definition:
      "The @site property provides access to global settings, which are available anywhere in your theme",
    example: `<html lang="{{@site.locale}}">`,
    link: "https://ghost.org/docs/themes/helpers/site/",
  },

  {
    name: "authors",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{authors}}",
    definition:
      "{{authors}} is a formatting helper for outputting a linked list of authors for a particular post. It defaults to a comma-separated list (without list markup) but can be customised to use different separators, and the linking can be disabled. The authors are output in the order they appear on the post, these can be reordered by dragging and dropping.",
    example: `
    {{#post}}
        {{#if authors}}
        <ul>
        {{#foreach authors}}
            <li>
            <a href="{{url}}" title="{{name}}" class="author author-{{id}} {{slug}}">{{name}}</a>
            </li>
        {{/foreach}}
        </ul>
        {{/if}}
    {{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/authors/",
  },

  {
    name: "comments",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{comments}}",
    definition:
      "The {{comments}} helper outputs Ghost’s member-based commenting system.",
    example: `{{comments title="Join the club" count=false mode="light" saturation=80}}`,
    link: "https://ghost.org/docs/themes/helpers/comments/",
  },

  {
    name: "content",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{content}}",
    definition:
      "{{content}} is a very simple helper used for outputting post content. It makes sure your HTML gets output correctly.",
    example: `{{content words="100"}}`,
    link: "https://ghost.org/docs/themes/helpers/content/",
  },

  {
    name: "date",
    snippet: null,
    type: HelperTypes["data"],
    usage: '{{date value format="formatString"}}',
    definition:
      "{{date}} is a formatting helper for outputting dates in various formats. You can either pass it a date and a format string to output a formatted date",
    example: `{{date published_at format="MMMM DD, YYYY"}}`,
    link: "https://ghost.org/docs/themes/helpers/date/",
  },

  {
    name: "excerpt",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{excerpt}}",
    definition:
      "{{excerpt}} outputs content but strips all HTML. This is useful for creating excerpts of posts.",
    example: `{{excerpt characters="140"}}`,
    link: "https://ghost.org/docs/themes/helpers/excerpt/",
  },

  {
    name: "facebook",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{facebook_url}}",
    definition:
      "This helper exists to make it easy to output a URL for a facebook page.",
    example: `{{facebook_url @site.facebook}}`,
    link: "https://ghost.org/docs/themes/helpers/facebook/",
  },

  {
    name: "img_url",
    snippet: "{{img_url {1|@site.cover_image,feature_image|}}}$2",
    type: HelperTypes["data"],
    usage: "{{img_url value}}",
    definition:
      "The img url helper outputs the correctly calculated URL for the provided image property.",
    example: `{{img_url feature_image}}`,
    link: "https://ghost.org/docs/themes/helpers/img_url/",
  },

  {
    name: "link",
    snippet: null,
    type: HelperTypes["data"],
    usage: '{{#link href="/about/"}}About{{/link}}',
    definition:
      "{{#link}} is a block helper that creates links with dynamic classes.",
    example: `
    {{#foreach posts}}
        {{#link href=(url) class="post-link" activeClass="active"}}
            {{title}}
        {{/link}}
    {{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/link/",
  },

  {
    name: "navigation",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{navigation}}",
    definition:
      "{{navigation}} is a template-driven helper that outputs formatted HTML of menu items defined in Ghost Admin.",
    example: `{{navigation type="secondary"}}`,
    link: "https://ghost.org/docs/themes/helpers/navigation/",
  },

  {
    name: "post",
    snippet: "{{#post}}\n\t$1\n{{/post}}",
    type: HelperTypes["data"],
    usage: "{{#post}}{{/post}}",
    definition:
      "When on a single post template such as post.hbs or page.hbs, outputting the details of your posts can be done with a block expression.",
    example: `{{#post}}\n\t<h1>{{title}}</h1>\n{{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/post/",
  },

  {
    name: "price",
    snippet:
      "{{price numberFormat='${1|short,long}' currencyFormat='${2|symbol,code,name}'}}$3",
    type: HelperTypes["data"],
    usage: "{{price_plan}}",
    definition:
      "The {{price}} helper formats monetary values from their smallest denomination to a human readable denomination with currency formatting. ",
    example: `{{price plan.amount
        currency=plan.currency
        locale=@site.locale
        numberFormat="short"
        currencyFormat="symbol"
      }}`,
    link: "https://ghost.org/docs/themes/helpers/price/",
  },

  {
    name: "tags",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{tags}}",
    definition:
      "{{tags}} is a formatting helper for outputting a linked list of tags for a particular post.",
    example: `
    {{#post}}
        {{#if tags}}
            <ul>
            {{#foreach tags}}
                <li>
                <a href="{{url}}" title="{{name}}" class="tag tag-{{id}} {{slug}}">{{name}}</a>
                </li>
            {{/foreach}}
            </ul>
        {{/if}}
  {{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/tags/",
  },

  {
    name: "tiers",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{tiers}}",
    definition: "{{tiers}} is a formatting helper for outputting tier names.",
    example: `{{tiers prefix="Access with:"}}`,
    link: "https://ghost.org/docs/themes/helpers/tiers/",
  },

  {
    name: "title",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{title}}",
    definition:
      "The title helper outputs a post title ensuring it displays correctly.",
    example: `{{title}}`,
    link: "https://ghost.org/docs/themes/helpers/title/",
  },

  {
    name: "total_members",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{total_members}}",
    definition:
      "The total_members helper outputs a rounded number of total members from your Ghost publication in a human readable format",
    example: `{{total_members}}`,
    link: "https://ghost.org/docs/themes/helpers/total_members/",
  },

  {
    name: "total_paid_members",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{total_paid_members}}",
    definition:
      "The total_paid_members helper outputs a rounded number of total paid members from your Ghost publication in a human readable format",
    example: `{{total_paid_members}}`,
    link: "https://ghost.org/docs/themes/helpers/total_paid_members/",
  },

  {
    name: "twitter",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{twitter_url}}",
    definition:
      "This helper exists to make it easy to output a URL for a twitter page.",
    example: `
    {{#foreach posts}}
        {{#author}}
            {{#if twitter}}<a href="{{twitter_url}}">Follow me on twitter</a>{{/if}}
        {{/author}}
    {{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/twitter/",
  },

  {
    name: "url",
    snippet: null,
    type: HelperTypes["data"],
    usage: "{{url}}",
    definition:
      "{{url}} outputs the relative url for a post when inside the post scope.",
    example: `{{url absolute="true"}}`,
    link: "https://ghost.org/docs/themes/helpers/url/",
  },
];
