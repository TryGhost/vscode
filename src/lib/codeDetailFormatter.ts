import * as vscode from 'vscode';
import { HelperSchema } from './helperInterface';

export function codeDetailFormatter(helper: HelperSchema) {
  const { name, type, usage, definition, example, link, attributes, variables, parents } = helper;

  const markdown = new vscode.MarkdownString('', true);
  markdown.supportHtml = true;
  markdown.appendMarkdown(`(${type}) **${name}**: \`${usage}\`\n\n`);
  markdown.appendMarkdown('\n\n<hr>\n\n');
  markdown.appendMarkdown(
    `\n\n${definition}${parents ? ' Often used with ' + parents?.map(term => '`' + term + '`').join(', ') + '.' : ''}\n\n`,
  );
  markdown.appendMarkdown(`\n\n$(link-external) [${link}](${link})\n\n`);
  markdown.appendMarkdown('\n\n<hr>\n\n');
  markdown.appendMarkdown('\n\n**Example**\n\n');
  markdown.appendCodeblock(example, 'handlebars');
  markdown.appendMarkdown('\n\n<hr>\n\n');

  if (attributes) {
    markdown.appendMarkdown(
      `\n\nAttributes: ${attributes.map(term => '`' + term + '`').join(', ')}.\n\n`,
    );
  }

  markdown.appendMarkdown('\n\n<hr>\n\n');

  if (variables) {
    markdown.appendMarkdown(
      `\n\nVariables: ${variables.map(term => '`' + term + '`').join(', ')}.\n\n`,
    );
  }
  return markdown;
}
