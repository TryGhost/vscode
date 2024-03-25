import { HelperSchema, HelperTypes } from './helperInterface';
export const attributes: HelperSchema[] = [
  {
    name: 'posts_per_page',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '@config.posts_per_page',
    definition: 'The number of posts per page as defined in `package.json`',
    example: `<a href="{{page_url "next"}}">Show next {{@config.posts_per_page}} posts</a>`,
    link: 'https://ghost.org/docs/themes/helpers/config/#providing-config',
    parents: ['config'],
    attributes: null,
    variables: null,
  },

  {
    name: 'image_sizes',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '@config.image_sizes',
    definition: 'Responsive image sizes as defined in `package.json`',
    example: `@config.image_sizes`,
    link: 'https://ghost.org/docs/themes/helpers/config/#providing-config',
    parents: ['config'],
    attributes: null,
    variables: null,
  },

  {
    name: 'card_assets',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '@config.card_assets',
    definition: 'Configure the card CSS and JSS Ghost includes in `package.json`',
    example: `@config.card_assets`,
    link: 'https://ghost.org/docs/themes/helpers/config/#providing-config',
    parents: ['config'],
    attributes: null,
    variables: null,
  },

  // Not including custom here as it will interfere with the data helper. Probably can write some regex to differentiate between @custom and @config...

  {
    name: 'limit',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: 'limit="3"',
    definition: 'Specifies a number of items to get.',
    example: `{{#foreach posts limit="3"}}
    <a href="{{url}}">{{name}}</a>
{{/foreach}}`,
    link: 'https://ghost.org/docs/themes/helpers/foreach/#the-limit-attribute',
    parents: ['foreach', 'get'],
    attributes: null,
    variables: null,
  },

  {
    name: 'from',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: 'from="3"',
    definition:
      'Changes the starting point from which items are output. `from="3"` means starting from and including the third item.',
    example: `{{#foreach posts from="3" to="7"}}
    <a href="{{url}}">{{name}}</a>
{{/foreach}}`,
    link: 'https://ghost.org/docs/themes/helpers/foreach/#the-from-and-to-attributes',
    parents: ['foreach', 'get'],
    attributes: null,
    variables: null,
  },

  {
    name: 'to',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: 'to="8"',
    definition:
      'Limits the number of items output. `to="8"` means the loops will output and end with the eight item.',
    example: `{{#foreach posts from="3" to="8"}}
    <a href="{{url}}">{{name}}</a>
{{/foreach}}`,
    link: 'https://ghost.org/docs/themes/helpers/foreach/#the-from-and-to-attributes',
    parents: ['foreach', 'get'],
    attributes: null,
    variables: null,
  },

  {
    name: 'page',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{#get "posts" limit="5" page="4"}}...{{/get}}',
    definition:
      'when the total number of posts exceeds the number of post initially requested, the resulting collection from the {{#get}} query will be paginated. Choose which page of that collection you want to get with the page attribute.',
    example: `{{#get "posts" limit="5" page="4"}}...{{/get}}`,
    link: 'https://ghost.org/docs/themes/helpers/get/#page',
    parents: ['get'],
    attributes: null,
    variables: null,
  },

  {
    name: 'order',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: 'order="published_at asc"',
    definition:
      'Specify how your data is ordered before being returned. You can choose any valid resource field in ascending (`asc`) or descending (`desc`) order.',
    example: `{{#get "posts" order="title asc"}}...{{/get}}`,
    link: 'https://ghost.org/docs/themes/helpers/get/#order',
    parents: null,
    attributes: null,
    variables: ['published_at', 'title'],
  },

  {
    name: 'include',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: 'include="tags"',
    definition:
      'By default, the `{{#get}}` helper will only fetch the base data from a resource. Use include to expand the data that is returned. Separate multiple include values with a comma. Resources include `posts`, `tags`, `authors`, and `tiers`.',
    example: `{{#get "posts" limit="5" include="authors,tags"}}
    {{#foreach posts}}
        <p>Written by: {{authors separator=", "}}</p>
        <p>keywords: {{tags separator=", "}}</p>
    {{/foreach}}
{{/get}}`,
    link: 'https://ghost.org/docs/themes/helpers/get/#include',
    parents: ['get'],
    attributes: null,
    variables: null,
  },

  {
    name: 'filter',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: 'filter="featured:true"',
    definition:
      'Use filter to make complex, logic-based queries on the data to fetch. In its most basic form, use filter to get posts that meet a simple boolean condition. Specify multiple rules for the `filter` attribute by using `,` for __or__, `+` for __and__, and `-` for __negation__.',
    example: `{{! Only get posts that are featured }}
{{#get "posts" limit="all" filter="featured:true"}}
    {{#foreach posts}}
        <a href="{{slug}}">{{title}}</a>
    {{/foreach}}
{{/get}}`,
    link: 'https://ghost.org/docs/content-api/#filtering',
    parents: ['get'],
    attributes: null,
    variables: null,
  },

  {
    name: 'description',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.description}}',
    definition: 'Site description from `General` settings.',
    example: `<p>{{@site.description}}</p>`,
    link: 'https://ghost.org/docs/themes/helpers/site/',
    parents: ['@site'],

    attributes: null,
    variables: null,
  },

  {
    name: 'icon',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.icon}}',
    definition: 'The publication icon from `Design` → `Brand` settings.',
    example: `<img src="{{@site.icon}}">`,
    link: 'https://ghost.org/docs/themes/helpers/site/',
    parents: ['@site'],

    attributes: null,
    variables: null,
  },

  {
    name: 'logo',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.logo}}',
    definition: 'The publication logo from `Design` → `Brand` settings.',
    example: `<img src="{{@site.logo}}">`,
    link: 'https://ghost.org/docs/themes/helpers/site/',
    parents: ['@site'],

    attributes: null,
    variables: null,
  },

  {
    name: 'cover_image',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.cover_image}}',
    definition: 'The publication cover image from `Design` → `Brand` settings.',
    example: `<img src="{{img_url @site.cover_image size="xl"}}">`,
    link: 'https://ghost.org/docs/themes/helpers/site/',
    parents: null,
    attributes: null,
    variables: null,
  },

  {
    name: 'signup_url',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '<a href="{{@site.signup_url}}>Sign up</a>',
    definition:
      'URL for members signup via Portal or RSS subscription depending on configured access in Admin settings.',
    example: `<a href="{{@site.signup_url}}>Sign up</a>`,
    link: 'https://ghost.org/docs/themes/helpers/site/',
    parents: ['@site'],

    attributes: null,
    variables: null,
  },

  {
    name: 'members_enabled',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.members_enabled}}',
    definition: '`true` if subscription access is **not** set to "Nobody."',
    example: `{{#if @site.members_enabled}}
    <a href="{{@site.signup_url}}>Sign up</a>
{{/if}}`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-feature-flags',
    parents: ['@site'],

    attributes: null,
    variables: null,
  },

  {
    name: 'members_invite_only',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.members_invite_only}}',
    definition: '`true` if subscription access is set to "Only people I invite."',
    example: `{{^if @site.members_invite_only}}
    <a href="{{@site.signup_url}}>Sign up</a>
{{/if}}`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-feature-flags',
    parents: ['@site'],

    attributes: null,
    variables: null,
  },

  {
    name: 'paid_members_enabled',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.paid_members_enabled}}',
    definition: '`true` if members is enabled and Stripe is connected.',
    example: `{{#if @site.paid_members_enabled}}
    <a href="{{@site.signup_url}}>Become a member</a>
{{/if}}`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-feature-flags',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'meta_description',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.meta_description}}',
    definition: 'Site meta description',
    example: `<p>{{@site.meta_description}}</p>`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'twitter_image',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.twitter_image}}',
    definition: 'Site Twitter image card.',
    example: `<img src="{{@site.twitter_image}}">`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'twitter_title',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.twitter_title}}',
    definition: 'Site Twitter card title.',
    example: `<p>{{@site.twitter_title}}</p>`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'twitter_description',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.twitter_description}}',
    definition: 'Site Twitter card description.',
    example: `<p>{{@site.twitter_description}}</p>`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'og_image',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.og_image}}',
    definition: 'Site open graph image (used when shared on Facebook).',
    example: `<img src="{{@site.og_image}}">`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'og_title',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.og_title}}',
    definition: 'Site open graph title (used when shared on Facebook).',
    example: `<p>{{@site.og_title}}</p>`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'og_description',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{@site.og_description}}',
    definition: 'Site open graph description (used when shared on Facebook).',
    example: `<p>{{@site.og_description}}</p>`,
    link: 'https://ghost.org/docs/themes/helpers/site/#site-meta-data',
    parents: ['@site'],
    attributes: null,
    variables: null,
  },

  {
    name: 'cover_image',
    type: HelperTypes['attribute'],
    snippet: null,
    usage: '{{img_url cover_image}}',
    definition: 'The image set in Ghost admin.',
    example: `<img src="{{img_url cover_image}}>
...
<img src="{{img_url @site.cover_image}}>`,
    link: 'https://ghost.org/docs/themes/contexts/author/',
    parents: ['site', 'author'],
    attributes: null,
    variables: null,
  },
];
