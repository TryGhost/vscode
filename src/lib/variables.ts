import { HelperSchema, HelperTypes } from "./helperInterface";

export const helperVariables: HelperSchema[] = [
  {
    name: "@index",
    type: HelperTypes["variable"],
    snippet: null,
    usage: "@index",
    definition: "(number) the 0-based index of the current iteration",
    example: `{{#foreach posts}}\n\t<article class="@index">...</article>\n<{{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: "@number",
    type: HelperTypes["variable"],
    snippet: null,
    usage: "@number",
    definition: "(number) - the 1-based index of the current iteration",
    example: `{{#foreach posts}}\n\t<article class="@number">...</article>\n<{{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: "@key",
    type: HelperTypes["variable"],
    snippet: "$4",
    usage: "@key",
    definition:
      "(string) - if iterating over an object, rather than an array, this contains the object key",
    example: `There’s no real use case for this in Ghost at present.`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: "@first",
    type: HelperTypes["variable"],
    snippet: null,
    usage: "@first",
    definition: "true if this is the first iteration of the collection",
    example: `{{#foreach posts}}
    {{#if @first}}
        <div>First post</div>
    {{/if}}
{{/foreach}}`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: "@last",
    type: HelperTypes["variable"],
    snippet: null,
    usage: "@last",
    definition: "true if this is the last interation of the collection",
    example: `{{#foreach posts}}
    {{#if @last}}
        <div>Last post</div>
    {{/if}}
{{/foreach}}
`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: "@odd",
    type: HelperTypes["variable"],
    snippet: null,
    usage: "@odd",
    definition: "true if @index is odd",
    example: `{{#foreach posts}}
    {{#if @odd}}
        <div>Odd post</div>
    {{/if}}
{{/foreach}}
`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: "@even",
    type: HelperTypes["variable"],
    snippet: null,
    usage: "@even",
    definition: "true if @index is even",
    example: `{{#foreach posts}}
    {{#if @even}}
        <div>Even post</div>
    {{/if}}
{{/foreach}}
`,
    link: "https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples",
    parents: "foreach",
  },

  {
    name: '@rowStart',
    type: HelperTypes['variable'],
    snippet: null,
    usage: '@rowStart',
    definition: 'true if `columns` is passed and this iteration signals a row start',
    example: `{{#foreach posts columns="3"}}
  {{#if @rowStart}}<div class="column">{{/if}}
      <a href="{{url}}">{{title}}</a>
  {{#if @rowEnd}}</div>{{/if}}
{{/foreach}}`,
    link: 'https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples',
    parents: 'foreach'
  },

  {
    name: '@rowEnd',
    type: HelperTypes['variable'],
    snippet: null,
    usage: '@rowEnd',
    definition: 'true if `columns` is passed and this iteration signals a row end',
    example: `{{#foreach posts columns="3"}}
  {{#if @rowStart}}<div class="column">{{/if}}
      <a href="{{url}}">{{title}}</a>
  {{#if @rowEnd}}</div>{{/if}}
{{/foreach}}`,
    link: 'https://ghost.org/docs/themes/helpers/foreach/#data-variable-examples',
    parents: 'foreach'
  },
  
];
