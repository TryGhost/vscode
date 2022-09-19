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
  let search = vscode.commands.registerCommand(
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

  let gscan = vscode.commands.registerCommand(
    "ghost-theme-development-helper.gscan",
    () => {
      const terminal = vscode.window.createTerminal("👻 Ghost GScan");
      terminal.show();
      terminal.sendText("npx gscan .");
    }
  );

  let hoverProvider = vscode.languages.registerHoverProvider("handlebars", {
    provideHover(document, position, token) {
      const position2 = new vscode.Position(position.line, position.character);
      const line = document.lineAt(position2).text;

      const isPartial = /{{>/.test(line);

      if (isPartial) {
        const partialDoc = definitions.find((doc) => doc.name === "partials")!;
        const formattedPartialDoc = codeDetailFormatter(partialDoc);
        return new vscode.Hover(formattedPartialDoc);
      }

      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);

      const helper = definitions.find((val) => {
        const regEx = new RegExp("^#?@?" + val.name.replace(/\W/, "") + "$");
        return regEx.test(word);
      });

      if (!helper) {
        return;
      }

      const formattedPreview = codeDetailFormatter(helper);

      return new vscode.Hover(formattedPreview);
    },
  });

  let provider = vscode.languages.registerCompletionItemProvider("handlebars", {
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
        commandCompletion.insertText = new vscode.SnippetString(item.snippet!);

        commands.push(commandCompletion);
      });

      return commands;
    },
  });

  let deployTheme = vscode.commands.registerCommand(
    "ghost-theme-development-helper.deploy",
    async () => {
      const alreadyExists = await vscode.workspace.findFiles(
        "**/deploy-theme.yml"
      );

      if (alreadyExists.length) {
        vscode.window.showWarningMessage(
          "Action not run! A deploy-theme.yaml file already exists. To start fresh, delete file and run command again.",
          { modal: true }
        );
        return;
      }

      try {
        // Get file path
        const extensionUri = context.asAbsolutePath(
          "files/deploy-theme.yml"
        );
        const file = vscode.Uri.file(extensionUri);

        // Create folder in theme
        const ws = vscode.workspace.workspaceFolders;

        if (!ws) {
          throw Error("No open workspace detected!");
        }

        const root = ws[0].uri.fsPath;
        const path = vscode.Uri.parse(
          "file://" + root + "/.github/workflows/",
          true
        );
        await vscode.workspace.fs.createDirectory(path);

        // Copy file to workspace
        const destination = vscode.Uri.parse(path + "deploy-theme.yml");
        await vscode.workspace.fs.copy(file, destination, { overwrite: false });

        // Notify user of additional steps
        const selection = await vscode.window.showInformationMessage(
          "GitHub Action file added to your theme! To enable automatic theme deploy, create a custom integration on your Ghost site and add your secrets to GitHub.",
          "Learn more",
          "See file"
        );

        if (selection) {
          console.log(destination);
          switch (selection) {
            case "Learn more":
              vscode.env.openExternal(
                vscode.Uri.parse(
                  "https://github.com/TryGhost/action-deploy-theme#getting-started"
                )
              );
              break;

            default:
              vscode.commands.executeCommand('vscode.open',destination);

              break;
          }
        }
      } catch (e) {
        throw Error(JSON.stringify(e));
      }
    }
  );

  context.subscriptions.push(search, provider, hoverProvider, gscan, deployTheme);
}

// this method is called when your extension is deactivated
export function deactivate() {}
