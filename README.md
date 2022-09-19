# Ghost Theme Development Helper README

 The Ghost Theme Development Helper VS Code Extension helps you develop themes for the open-source publishing platform [Ghost](https://ghost.org/).

## Features

### Hover for info
Hovering over any Ghost theme syntax will provide info about what the code and a link to get more information.
### Autocomplete
Just start typing and Ghostwriter will do the rest by autocompleting your code.

#### Snippets
- `asset`
- `custom`
- `foreach`
- `get`
- `has`
- `if`
- `img:formats`
- `img:responsive`
- `img_url`
- `is`
- `partials`
- `plural`
- `post`
- `price`
- `site`
- `unless`

### Dynamic autocomplete

This extension also provides three dynamic autocomplete functions that reads data from your theme configuration (`package.json`).

- `custom`: generates a list of your custom properties for easy autocompetion
- `img:responsive`: generates a responsive image srcset based on your theme's configured image sizes
- `img:formats`: generates a responsive image srcset but also includes sytnax for converting image formats

### Help
Use the `Ghost search` command to search theme documentation and open the official page.

### Gscan
Use the `Gscan` command to scan your Ghost theme for errors.

If `Gscan` is not installed, you'll be prompted to install it before it runs.

### GitHub Deploy Theme Action
Use `Ghost Github Action` to add the GitHub Deploy Action to your theme.

For it to work, you also need to set up a custom configuration on your Ghost site and add your secrets to GitHub. [Read the docs for more info](https://github.com/TryGhost/action-deploy-theme)

<!-- \!\[feature X\]\(images/feature-x.png\) -->

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

Open your theme as the root folder in VS Code.


## Release Notes

- Initial release 🎉

### 1.0.0

Initial release of **Ghost Theme Development Helper**

## Tips & Tricks
- Matches for hover are simple, so the extension may generate some false positives.
- For autocomplete, write Handlebar helpers without curly braces (`{{``}}`). For example, write `foreach` not `{{foreach}}`.
- With autocomplete, use `tab` to advance your cursor
- To use autocomplete options within other autocomplete syntax (like using `custom` with `match`), add the following in your VS Code `settings.json` file:
```json
  "editor.suggest.snippetsPreventQuickSuggestions": false
```


## Development
See [`CONTRIBUTING.md`](https://github.com/TryGhost/vscode-ghost-theme-development-helper/blob/ba52f9bd210b1b8033fbfc302ca61e3481b0df51/development.md) for more developing this extension.