// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import {
  definitions,
  definitionsForQuickPick,
  definitionsWithSnippets,
} from "./lib";
import { codeDetailFormatter } from "./lib/codeDetailFormatter";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "ghost-theme-development-helper.search",
    async () => {
      const doc = await vscode.window.showQuickPick(definitionsForQuickPick, {
        matchOnDetail: true,
      });

      if (!doc) {
        return;
      }

      vscode.env.openExternal(vscode.Uri.parse(doc.link));
    }
  );

  vscode.languages.registerHoverProvider("handlebars", {
    provideHover(document, position, token) {
      const position2 = new vscode.Position(position.line, position.character);
      const line = document.lineAt(position2).text;

      const isPartial = /{{>/.test(line);
     
      if (isPartial) {
        const partialDoc = definitions.find(doc => doc.name === "partials")!;
        const formattedPartialDoc = codeDetailFormatter(partialDoc);
        return new vscode.Hover(formattedPartialDoc);
      }

      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      const helper = definitions.find((val) => {
        const regEx = new RegExp("^#?@?" + val.name.replace(/\W/,"") + "$");
        return regEx.test(word);
      });

      if (!helper) {
        return;
      }

      const formattedPreview = codeDetailFormatter(helper);

      return new vscode.Hover(formattedPreview);
    },
  });

  const provider = vscode.languages.registerCompletionItemProvider(
    "handlebars",
    {
      async provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
      ) {
        let commands: vscode.CompletionItem[] = [];
        const snippets = await definitionsWithSnippets();

        if (!snippets) {
          return;
        }

        snippets.forEach((item) => {
          const commandCompletion = new vscode.CompletionItem(item.name);
          commandCompletion.kind = vscode.CompletionItemKind.Snippet;
          commandCompletion.detail = "Ghost template helper";
          commandCompletion.documentation = item.definition;
          commandCompletion.insertText = new vscode.SnippetString(
            item.snippet!
          );

          commands.push(commandCompletion);
        });

        return commands;
      },
    }
  );

  context.subscriptions.push(disposable, provider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
