import { HelperSchema, HelperTypes } from "./helperInterface";
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
        variables: null
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
        variables: null
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
        variables: null
    },

    // Not including custom here as it will interfere with the data helper. Probably can write some regex to differentiate between @custom and @config...

    
    
    
];
