import * as vscode from "vscode";
import { HelperSchema } from "./helperInterface";

export function codeDetailFormatter(helper: HelperSchema) {
  const { name, type, usage, definition, example, link, attributes, variables } = helper;

  const markdown = new vscode.MarkdownString("", true);
  markdown.supportHtml = true;
  markdown.appendMarkdown(`(${type} helper) **${name}**: \`${usage}\`\n\n`);
  markdown.appendMarkdown('\n\n<hr>\n\n');
  markdown.appendMarkdown(`${definition}\n\n`);
  markdown.appendMarkdown(`\n\n$(link-external) [${link}](${link})\n\n`);
  markdown.appendMarkdown('\n\n<hr>\n\n');
  markdown.appendMarkdown("\n\n**Example**\n\n");
  markdown.appendCodeblock(example, "handlebars");
  markdown.appendMarkdown('\n\n<hr>\n\n');

  if (attributes) {
    markdown.appendMarkdown("**Attributes**");
    for (const attribute of attributes) {
      markdown.appendMarkdown(`\n- ${attribute}\n`);
    }
  }
  
  markdown.appendMarkdown('\n\n<hr>\n\n');

  if (variables) {
    markdown.appendMarkdown("**Variables**");
    for (const attribute of variables) {
      markdown.appendMarkdown(`\n- ${attribute}\n`);
    }
  }
  return markdown;
}

// @ts-ignore
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
