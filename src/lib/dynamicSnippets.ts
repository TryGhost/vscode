/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from "vscode";

function createResponsiveImageHelper(image_sizes) {
  const sizes = Object.keys(image_sizes)
    .reduce(
      (previous: { name: string; width: number }[] | [], current: string) => {
        const size = { name: current, width: image_sizes[current].width };
        previous.push(size);

        return previous;
      },
      []
    )
    .sort((a, b) => a.width > b.width)
    .map((size, idx, arr) =>
      arr.length === idx
        ? `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}"}} ${size.width}w`
        : `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}"}} ${size.width}w,`
    )
    .join("");

  const template = (sizes) => `<img class="$1"
    srcset="${sizes}"
    sizes="$3"
    src="{{img_url \${2|@site.cover_image,feature_image|} size="$4"}}"
    alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
/>`;

  return {
    name: "img:responsive",
    snippet: template(sizes),
    definition: "Generate responsive images based on your theme configuration",
  };
}

function createCustomConfigHelper(custom) {
  
    const keys = Object.keys(custom).join();

  return {name: 'custom', snippet: `@custom.\${1|${keys}|} $2`, definition: "Fetch custom values"};
}

export async function generateSpecialSnippets() {
  const file = await vscode.workspace.findFiles("package.json");

  if (!file.length) {
    return null;
  }

  const contents = await vscode.workspace.fs.readFile(file[0]);



  const {
    config: { image_sizes, custom },
  } = JSON.parse(Buffer.from(contents).toString("utf-8"));
  const customConfigSnippets = createCustomConfigHelper(custom);



  const responsiveImageSnippets = createResponsiveImageHelper(image_sizes);
  return [responsiveImageSnippets, customConfigSnippets];
}
