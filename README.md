# ghost-helper README

Ghostwriter helps you develop themes for the opensource publishing platform [Ghost](https://ghost.org/)

## Features

### Hover for info
Hovering over any Ghost theme syntax will provide info about what the code and a link to get more information.
### Autocomplete
Just start typing and Ghostwriter will do the rest by autocompleting your code.

Currently, the following commands are supported:
-

### Dynamic autocomplete

Ghostwriter also provides three dynamic autocomplete functions that reads data from your theme configuration (`package.json`).

- `custom`: generates a list of your custom properties for easy autocompetion
- `img:responsive`: generates a responsive image srcset based on your theme's configured image sizes
- `img:formats`: generates a responsive image srcset but also includes sytnax for converting image formats

### Help
Use the `ghost help` command to search theme docs and open the relevant doc on the web.

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

For best results, open VS Code so that your theme is the root folder.


## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of Ghostwriter

-----------------------------------------------------------------------------------------------------------
## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

