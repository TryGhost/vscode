import { functionalDefinitions } from './functionalHelpers';
import { dataDefinitions } from './dataHelpers';
import { utilityDefinitions } from './utilityHelpers';
import { generateSpecialSnippets } from './dynamicSnippets';
import { helperVariables } from './variables';
import { attributes } from './attributes';
import { contexts } from './contexts';

export const definitions = [
  ...functionalDefinitions,
  ...dataDefinitions,
  ...utilityDefinitions,
  ...helperVariables,
  ...attributes,
  ...contexts,
];

export const definitionsForQuickPick: {
  label: string;
  detail: string;
  link: string;
}[] = definitions.map(def => {
  const { name, definition, link } = def;
  return {
    label: name,
    detail: definition.replace(/`/g, ''),
    link,
  };
});

export const definitionsWithSnippets = async () => {
  const special = await generateSpecialSnippets();
  if (!special) {
    return null;
  }
  return [...definitions, ...special].filter(def => def.snippet);
};
