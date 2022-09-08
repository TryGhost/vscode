import { HelperSchema, HelperTypes } from "./helperInterface";

export const functionalDefinitions: HelperSchema[] = [
  {
    name: "foreach",
    snippet: "{{#foreach $1}}\n\t$0\n{{/foreach}}",
    type: HelperTypes["functional"],
    usage: "{{#foreach data}}{{/foreach}}",
    definition: "Loop helper designed for working with lists of posts",
    example: `
    {{#foreach posts}}
      <article class="{{post_class}}">
          <h2 class="post-title"><a href="{{url}}">{{title}}</a></h2>
          <p>{{excerpt words="26"}} <a class="read-more" href="{{url}}">&raquo;</a></p>
          <p class="post-footer">
              Posted by {{primary_author}} {{tags prefix=" on "}} at <time class="post-date" datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMMM YYYY"}}</time>
          </p>
      </article>
    {{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/foreach/",
    parents: null,
  },

  {
    name: "get",
    snippet: '{{#get ${1|"posts","tags","authors","tiers"|}}}\n\t$0\n{{/get}}',
    type: HelperTypes["functional"],
    usage: '{{#get "posts"}}{{/get}}',
    definition: "Special block helper for custom queries.",
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
  },
  {
    name: "has",
    snippet: "{{#has $1}}\n\t$2\n{{/has}}",
    type: HelperTypes["functional"],
    usage: '{#has tag="value1,value2" author="value"}}',
    definition: "Test whether certain conditions are met",
    example: `
    {{#has slug="welcome" tag="getting started"}}
    {{! ..Will execute if the slug is welcome OR the tag is getting-started...}}
    {{/has}}`,
    link: "https://ghost.org/docs/themes/helpers/has/",
    parents: null,
  },

  {
    name: "if",
    snippet: "{{#if $1}}\n\t$2\n{{/if}}",
    type: HelperTypes["functional"],
    usage: "{{#if featured}}{{/if}}",
    definition: "Test very simple conditionals",
    example: `
    {{#post}}
      {{#if featured}}
      ...do something if the post is featured...
      {{/if}}
    {{/post}}`,
    link: "https://ghost.org/docs/themes/helpers/if/",
    parents: null,
  },
  {
    name: "is",
    snippet:
      "{{#is ${1|home,index,post,page,tag,author,paged,private}\n\t$2\n{{/is}}",
    type: HelperTypes["functional"],
    usage: '{{#is "contexts"}}',
    definition: "Check the context of the current route.",
    example: `
    {{#is "post, page"}}
    {{!  ... content to render if the current route represents a post or a page ...}}
    {{/is}}`,
    link: "https://ghost.org/docs/themes/helpers/is/",
    parents: null,
  },

  {
    name: "match",
    snippet: "{{#match $1 ${2|=,!=,>,<,>=,<=|} $3}}\n\t$4\n{{/match}}",
    type: HelperTypes["functional"],
    usage:
      '{{#match @custom.color_scheme "=" "Dark"}} class="dark-mode"{{/match}}',
    definition: "Compare two values for equality",

    example: `{{#match @custom.color_scheme "=" "Dark"}}...{{else}}...{{/match}}`,
    link: "https://ghost.org/docs/themes/helpers/match/",
    parents: null,
  },

  {
    name: "unless",
    type: HelperTypes["functional"],
    snippet: "{{#unless $1}}\n\t$2\n{{/unless}}",
    usage: "{{#unless featured}}{{/unless}}",
    definition: "Test a negative condition",
    example: `
    {{#unless featured}}
      {{!...do something...}}
    {{/unless}}`,
    link: "https://ghost.org/docs/themes/helpers/unless/",
    parents: null,
  },
];
