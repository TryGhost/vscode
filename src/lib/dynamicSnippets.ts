/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from "vscode";

interface Sizes {
  [name: string]: {
    width: number;
  };
}

interface Custom {
  [name: string]: {};
}

const alt = `alt="\${5|{{title\}\},{{@site.title\}\},{{name\}\},{{#if feature_image_alt\}\}{{feature_image_alt\}\}{{else\}\}{{title\}\}{{/if\}\}|}"`;

const responsiveImageTemplate = (
  sizes: string,
  sizeNames: string
) => `<img class="$1"
    srcset="${sizes}"
    sizes="$3"
    src="{{img_url \${2|feature_image,@site.cover_image,cover_image,profile_image|} size="\${4|${sizeNames}|}"}}"
    ${alt}
/>`;

const responsiveImageTemplateWithFormats = (
  avif: string,
  webp: string,
  sizes: string,
  sizeNames: string
) => `<picture class="$1">
  <source 
    srcset="${avif}"
    sizes="$3" 
    type="image/avif"
  >
  <source 
    srcset="${webp}"
    sizes="$3" 
    type="image/webp"
  >
  <img
    srcset="${sizes}"
    sizes="$3" 
    src="{{img_url \${2|feature_image,@site.cover_image,cover_image,profile_image|} size="\${4|${sizeNames}|}"}}"
    ${alt}
  >
</picture>`;

export function sizeMaker(keys: string[], image_sizes: Sizes, type: string | null = null) {
  const format = !type
    ? ""
    : type === "avif"
    ? ' format="avif"'
    : ' format="webp"';

  return keys
    .reduce((previous: any[], current: string) => {
      const size = { name: current, width: image_sizes[current].width };

      previous.push(size);

      return previous;
    }, [])
    .sort((a, b) => {
      if (a.width > b.width) {
        return 1;
      }

      if (a.width < b.width) {
        return -1;
      }

      return 0;
    })
    .map((size, idx, arr) =>
      arr.length === idx + 1
        ? `\n\t{{img_url \${2|feature_image,@site.cover_image,cover_image,profile_image|} size="${size.name}"${format}}} ${size.width}w`
        : `\n\t{{img_url \${2|feature_image,@site.cover_image,cover_image,profile_image|} size="${size.name}"${format}}} ${size.width}w,`
    )
    .join("");
}

export function imageHelper(image_sizes: Sizes) {
  const keys = Object.keys(image_sizes);

  const sizeNames = keys.join();

  const sizes = sizeMaker(keys, image_sizes);

  const avif = sizeMaker(keys, image_sizes, "avif");

  const webp = sizeMaker(keys, image_sizes, "webp");

  return {
    sizeNames,
    sizes,
    avif,
    webp,
  };
}

function createResponsiveImageHelper(image_sizes: Sizes, template: Function) {
  const { sizes, sizeNames } = imageHelper(image_sizes);

  return {
    name: "img:responsive",
    snippet: template(sizes, sizeNames),
    definition: "Generate responsive images based on your theme configuration",
  };
}

function createResponsiveImageHelperWithFormts(
  image_sizes: Sizes,
  template: Function
) {
  const { sizes, sizeNames, avif, webp } = imageHelper(image_sizes);

  return {
    name: "img:formats",
    snippet: template(avif, webp, sizes, sizeNames),
    definition:
      "Generate next-gen format, responsive images based on your theme configuration",
  };
}

function createCustomConfigHelper(custom: Custom) {
  const keys = Object.keys(custom).join();

  return {
    name: "custom",
    snippet: `@custom.\${1|${keys}|} $2`,
    definition: "Fetch custom values",
  };
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
  
  const customSnippets = [];
  
  if (custom) {
    customSnippets.push(createCustomConfigHelper(custom))
  }

  if (image_sizes) {
    customSnippets.push(createResponsiveImageHelper(
      image_sizes,
      responsiveImageTemplate
    ));

    customSnippets.push(createResponsiveImageHelperWithFormts(
      image_sizes,
      responsiveImageTemplateWithFormats
    ));
  }
  
  return customSnippets;
}
