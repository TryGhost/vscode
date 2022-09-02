export enum HelperTypes {
  functional = "functional",
  data = "data",
  utility = "utility"
}

export interface HelperSchema  {
      name: string;
      type: HelperTypes;
      usage: string;
      definition: string;
      example: string;
      link: string;
      snippet: string | null;
    };
  