// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from 'axios';

import { definitions, definitionsForQuickPick, definitionsWithSnippets } from './lib';

import { codeDetailFormatter } from './lib/codeDetailFormatter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const search = vscode.commands.registerCommand('ghost.docs', async () => {
    const doc = await vscode.window.showQuickPick(definitionsForQuickPick, {
      matchOnDetail: true,
    });

    if (!doc) {
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'ghostHelpDoc',
      `Ghost Doc: ${doc.label}`,
      vscode.ViewColumn.One,
      { enableScripts: true },
    );

    const pref = vscode.workspace.getConfiguration('ghost').get('openDocsLocation');

    if (pref === 'vscode') {
      const { data } = await axios.get(doc.link);
      panel.webview.html = data;
      return;
    }

    vscode.env.openExternal(vscode.Uri.parse(doc.link));
  });

  const hoverProvider = vscode.languages.registerHoverProvider('handlebars', {
    provideHover(document, position) {
      const line = document.lineAt(position).text;
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      console.log(word);

      const isPartial = /{{>/.test(line);

      if (isPartial) {
        const partialDoc = definitions.find(doc => doc.name === 'partials')!;
        const formattedPartialDoc = codeDetailFormatter(partialDoc);
        return new vscode.Hover(formattedPartialDoc);
      }

      const helper = definitions.find(val => {
        const regEx = new RegExp('^#?@?' + val.name.replace(/\W/, '') + '$');
        return regEx.test(word);
      });

      if (!helper) {
        return;
      }

      const formattedPreview = codeDetailFormatter(helper);

      return new vscode.Hover(formattedPreview);
    },
  });

  const provider = vscode.languages.registerCompletionItemProvider('handlebars', {
    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
      const commands: vscode.CompletionItem[] = [];
      const snippets = await definitionsWithSnippets();
      if (!snippets) {
        return;
      }
      const line = document.lineAt(position).text;
      const doesIncludeStartBracket = /{{/.test(line);
      const doesIncludeAtSymbol = /@/.test(line);
      const doesIncludeEndBracket = /}}$/.test(line);

      snippets.forEach(item => {
        const commandCompletion = new vscode.CompletionItem(item.name, 13);
        commandCompletion.detail = 'Ghost';
        commandCompletion.documentation = item.definition;

        if (doesIncludeStartBracket && !doesIncludeEndBracket) {
          commandCompletion.insertText = new vscode.SnippetString(item.snippet!.replace(/{{/, ''));
        } else if (doesIncludeAtSymbol) {
          commandCompletion.insertText = new vscode.SnippetString(item.snippet!.replace(/@/, ''));
        } else if (doesIncludeEndBracket && !doesIncludeStartBracket) {
          commandCompletion.insertText = new vscode.SnippetString(item.snippet!.replace(/}}$/, ''));
        } else if (doesIncludeStartBracket && doesIncludeEndBracket) {
          commandCompletion.insertText = new vscode.SnippetString(
            item.snippet!.replace(/{{/, '').replace(/}}$/, ''),
          );
        } else {
          commandCompletion.insertText = new vscode.SnippetString(item.snippet!);
        }

        commands.push(commandCompletion);
      });

      return commands;
    },
  });

  const deployTheme = vscode.commands.registerCommand('ghost.deploy', async () => {
    try {
      // Check if the file already exists. If it does, then we abort and give the user a message on how to start fresh
      const alreadyExists = await vscode.workspace.findFiles('**/deploy-theme.yml');

      if (alreadyExists.length) {
        vscode.window.showWarningMessage(
          'Action not run! A deploy-theme.yaml file already exists. To start fresh, delete file and run command again.',
          { modal: true },
        );
        return;
      }

      // Get file path
      const extensionUri = context.asAbsolutePath('files/deploy-theme.yml');
      const file = vscode.Uri.file(extensionUri);

      // Create folder in theme
      const ws = vscode.workspace.workspaceFolders;

      if (!ws) {
        throw Error('No open workspace detected!');
      }

      const root = ws[0].uri.fsPath;
      const path = vscode.Uri.parse('file://' + root + '/.github/workflows/', true);
      await vscode.workspace.fs.createDirectory(path);

      // Copy file to workspace
      const destination = vscode.Uri.parse(path + 'deploy-theme.yml');
      await vscode.workspace.fs.copy(file, destination, { overwrite: false });

      // Notify user of additional steps
      const selection = await vscode.window.showInformationMessage(
        'GitHub Action file added to your theme! To enable automatic theme deploy, create a custom integration on your Ghost site and add your secrets to GitHub.',
        'Learn more',
        'See file',
      );

      if (selection) {
        switch (selection) {
          case 'Learn more':
            vscode.env.openExternal(
              vscode.Uri.parse('https://github.com/TryGhost/action-deploy-theme#getting-started'),
            );
            break;

          default:
            vscode.commands.executeCommand('vscode.open', destination);

            break;
        }
      }
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  });

  const gscan = vscode.commands.registerCommand('ghost.gscan', () => {
    const terminal = vscode.window.createTerminal('👻 Ghost GScan');
    terminal.show();
    terminal.sendText('npx gscan .');
  });

  // TS doesn't yet support the indices property on the RegExpMatchArray type
  type RegExpMatchArrayWithIndices = RegExpMatchArray & { indices: Array<[number, number]> };

  const generateLinksToPartials = vscode.languages.registerDocumentLinkProvider(
    { scheme: 'file', language: 'handlebars' },
    {
      provideDocumentLinks(document) {
        const text = document.getText();
        const regex = new RegExp(/{{>\s*["|']([a-zA-Z0-9-_/]+)["|']\s*.*}}/dg);
        const matches = text.matchAll(regex);
        const links: vscode.DocumentLink[] = [];

        if (matches) {
          for (const match of matches) {
            const [start, end] = (match as RegExpMatchArrayWithIndices).indices[1]; // Need to extend the type to reflect that indices is part of the return value
            const startPos = document?.positionAt(start);
            const endPos = document?.positionAt(end);
            const range = new vscode.Range(startPos!, endPos!);
            const word = document.getText(range);
            const relativePath = `/partials/${word}.hbs`;
            const fileUri = vscode.Uri.parse(
              `file://${vscode.workspace.workspaceFolders![0].uri.fsPath}${relativePath}`,
            );
            links.push(new vscode.DocumentLink(range, fileUri));
          }
        }

        return links;
      },
    },
  );

  const generateLinksToAssets = vscode.languages.registerDocumentLinkProvider(
    { scheme: 'file', language: '*' },
    {
      provideDocumentLinks(document) {
        const text = document.getText();
        const regex = new RegExp(/{{asset \s*["|']([a-zA-Z0-9-_/.]+)["|']\s*.*}}/dg);
        const matches = text.matchAll(regex);
        const links: vscode.DocumentLink[] = [];

        if (matches) {
          for (const match of matches) {
            const [start, end] = (match as RegExpMatchArrayWithIndices).indices[1]; // Need to extend the type to reflect that indices is part of the return value
            const startPos = document?.positionAt(start);
            const endPos = document?.positionAt(end);
            const range = new vscode.Range(startPos!, endPos!);
            const word = document.getText(range);
            const relativePath = `/assets/${word}`;
            const fileUri = vscode.Uri.parse(
              `file://${vscode.workspace.workspaceFolders![0].uri.fsPath}${relativePath}`,
            );
            links.push(new vscode.DocumentLink(range, fileUri));
          }
        }

        return links;
      },
    },
  );

  context.subscriptions.push(
    search,
    provider,
    hoverProvider,
    gscan,
    deployTheme,
    generateLinksToPartials,
    generateLinksToAssets,
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
