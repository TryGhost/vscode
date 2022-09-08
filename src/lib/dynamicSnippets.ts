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

const responsiveImageTemplate = (
  sizes: string,
  sizeNames: string
) => `<img class="$1"
    srcset="${sizes}"
    sizes="$3"
    src="{{img_url \${2|@site.cover_image,feature_image|} size="\${4|${sizeNames}|}"}}"
    alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
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
    src="{{img_url \${2|@site.cover_image,feature_image|} size="\${4|${sizeNames}|}"}}"
    alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
  >
</picture>`;

function createResponsiveImageHelper(image_sizes: Sizes, template: Function) {
  const sizeNames = Object.keys(image_sizes).join();
  console.log(sizeNames);

  const sizes = Object.keys(image_sizes)
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
        ? `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}"}} ${size.width}w`
        : `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}"}} ${size.width}w,`
    )
    .join("");

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
  const sizeNames = Object.keys(image_sizes).join();
  console.log(sizeNames);

  const sizes = Object.keys(image_sizes)
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
        ? `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}"}} ${size.width}w`
        : `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}"}} ${size.width}w,`
    )
    .join("");

  const avif = Object.keys(image_sizes)
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
        ? `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}" format="avif"}} ${size.width}w`
        : `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}" format="avif"}} ${size.width}w,`
    )
    .join("");

  const webp = Object.keys(image_sizes)
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
        ? `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}" format="webp"}} ${size.width}w`
        : `\n\t{{img_url \${2|@site.cover_image,feature_image|} size="${size.name}" format="webp"}} ${size.width}w,`
    )
    .join("");

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
  const customConfigSnippets = createCustomConfigHelper(custom);

  const responsiveImageSnippets = createResponsiveImageHelper(
    image_sizes,
    responsiveImageTemplate
  );

  const responsiveImageTemplateWithFormatsSnippet =
    createResponsiveImageHelperWithFormts(
      image_sizes,
      responsiveImageTemplateWithFormats
    );

  return [
    responsiveImageSnippets,
    customConfigSnippets,
    responsiveImageTemplateWithFormatsSnippet,
  ];
}
