import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import { sizeMaker } from "../../lib/dynamicSnippets";

// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Generate sizes for images", () => {
    const result = sizeMaker(
      ["xxs", "xs"],
      {
        xxs: {
          width: 100,
        },
        xs: {
          width: 200,
        },
      },
      "avif"
    );

    assert.strictEqual(
      result,
      '\n\t{{img_url ${2|feature_image,@site.cover_image,cover_image,profile_image|} size="xxs" format="avif"}} 100w,\n\t{{img_url ${2|feature_image,@site.cover_image,cover_image,profile_image|} size="xs" format="avif"}} 200w'
    );
  });

  
});
