import * as vscode from 'vscode';
import { HelperSchema } from './helperInterface';

export function codeDetailFormatter(helper: HelperSchema) {

    const {name, type, usage, definition, example, link} = helper;
    
    const markdown = new vscode.MarkdownString("", true);
    markdown.supportHtml = true;
    markdown.appendMarkdown(`(${type} helper) <b>${name}</b>: \`${usage}\`\n\n`);
    markdown.appendMarkdown(`---------------------------------------------------------\n\n`);
    markdown.appendMarkdown(`${definition}\n\n`);
    
    // if (properties) {
    //     for (const prop of properties) {
    //         markdown.appendMarkdown(`\n\n<b>${prop.name.charAt(0).toUpperCase() + prop.name.substring(1)}</b>: `);
    //     markdown.appendMarkdown(makeHtmlList(prop.values));
    //     }
    // }
    
    markdown.appendMarkdown('\n\n<b>Example</b>\n\n');

    markdown.appendCodeblock(example, 'handlebars');
  
    markdown.appendMarkdown(`\n\n\n\n <b>$(link) Docs</b>: [${link}](${link})`);
    
    return markdown;
}

const makeHtmlList = (els: string[]) => {
    return formatter.format(els.map(el => "`" + el + "`"));
};

// @ts-ignore
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
