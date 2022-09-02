import { functionalDefinitions } from "./functionalHelpers";
import { dataDefinitions } from "./dataHelpers";
import { utilityDefinitions } from "./utilityHelpers";
import { generateSpecialSnippets } from "./dynamicSnippets";

export const definitions = [
  ...functionalDefinitions,
  ...dataDefinitions,
  ...utilityDefinitions,
];

export const definitionsForQuickPick: { label: string; detail: string }[] =
  definitions.map((def) => {
    const { name, definition } = def;
    return {
      label: name,
      detail: definition,
    };
  });


export const definitionsWithSnippets = async () => {
  const special = await generateSpecialSnippets();
  if (!special) {return null;};
  return [...definitions, ...special].filter((def) => def.snippet);
};
