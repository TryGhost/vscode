# Change Log

All notable changes to the Ghost extension will be documented in this file.

## [Unreleased]

## [1.0.0] - 2022-09-20
- Initial release 🎉

## [1.1.0] - 2022-09-20
### Added
- Animations for extension features

## [1.4] - 2022-10-18
- Updated GitHub Action YAML
- Implemented `esbuild` to bundle the extension
- Began writing tests

## [1.4.1] - 2023-01-24
- Updated dependencies
- Fixed bug that crashed autocomplete when properties were missing in `package.json`
- Added `contexts` to Ghost docs search

## [1.5] - 2024-03-23
- Improved autocompletion by checking for and removing redundant characters (`@`,`{{`,`}}`)
- Updated commands to include `@page.show_title_and_feature_image`, `default`, and `member`
- Added hotlinking for partials and assets (ctrl/cmd + click to open the file)
