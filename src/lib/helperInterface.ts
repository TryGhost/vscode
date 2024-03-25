export enum HelperTypes {
  functional = 'functional',
  data = 'data',
  utility = 'utility',
  attribute = 'attribute',
  variable = 'variable',
  context = 'context',
}

export interface HelperSchema {
  name: string;
  type: HelperTypes;
  usage: string;
  definition: string;
  example: string;
  link: string;
  snippet: string | null;
  parents: string[] | null;
  variables: string[] | null;
  attributes: string[] | null;
}
