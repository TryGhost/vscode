import { HelperSchema, HelperTypes } from "./helperInterface";


export const contexts: HelperSchema[] = [
    {
        name: 'index context',
        type: HelperTypes['context'],
        snippet: null,
        usage: '{{#is "index"}}{{/is}}',
        definition: 'The index context represents any page that has a collection of posts like home, author, and tag pages.',
        example: `{{#foreach 'posts'}}
...        
{{/foreach}}`,
        link: '{{#foreach "posts"}}{{/foreach}}',
        parents: null,
        attributes: null,
        variables: null
    },
    {
        name: 'page context',
        type: HelperTypes['context'],
        snippet: null,
        usage: `{{#is "page"}}{{/is}}`,
        definition: 'Whenever you’re viewing a static page, you’re in the page context. The page context is not set on posts, which uses the post context instead.',
        example: `{{#post}}
<h1>{{title}}</h1>
{{/post}}`,
        link: 'https://ghost.org/docs/themes/contexts/page/',
        parents: null,
        attributes: null,
        variables: null
    },
    {
        name: 'post context',
        type: HelperTypes['context'],
        snippet: null,
        usage: '{{#is "post"}}{{/is}}',
        definition: 'Whenever you’re viewing a single site post, you’re in the post context. The post context is not set on static pages, which uses the page context instead.',
        example: `{{#post}}
<h1>{{title}}</h1>
{{/post}}`,
        link: 'https://ghost.org/docs/themes/contexts/post/',
        parents: null,
        attributes: null,
        variables: null
    },
    {
        name: 'author context',
        type: HelperTypes['context'],
        snippet: null,
        usage: '{{#author}}...{{/author}}',
        definition: 'Authors in Ghost each get their own page which outputs a list of posts that were published by that author. You’re in the author context when viewing the page thats lists all posts written by that user, as well as subsequent pages of posts. The author context is only set on the list of posts, and not on the individual post itself.',
        example: `{{#author}}
<h1>{{name}}</h1>
{{/author}}`,
        link: 'https://ghost.org/docs/themes/contexts/author/',
        parents: null,
        attributes: null,
        variables: null
    },
    {
        name: 'tag context',
        type: HelperTypes['context'],
        snippet: null,
        usage: '{{#tag}}...{{/tag}}',
        definition: 'Tags in Ghost each get their own tag archive which lists all posts associated with the tag. You’re in the tag context when viewing the page thats lists all posts with that tag, as well as subsequent pages of posts. The tag context is not set on posts or pages with tags, only on the list of posts for that tag.',
        example: `{{#tag}}
<h1>{{name}}</h1>
{{/tag}}`,
        link: 'https://ghost.org/docs/themes/contexts/tag/',
        parents: null,
        attributes: null,
        variables: null
    },
    {
        name: 'error context',
        type: HelperTypes['context'],
        snippet: null,
        usage: 'Use in error.hbs',
        definition: 'Error templates used for all 4xx and 5xx errors that may arise on a site',
        example: `<title>{{statusCode}} — {{message}}</title>`,
        link: 'https://ghost.org/docs/themes/contexts/error/',
        parents: null,
        attributes: null,
        variables: null
    },
    
    
    
];