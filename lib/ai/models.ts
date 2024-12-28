// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'llama-3-70b-versatile',
    label: 'Llama 3 70B Versatile',
    apiIdentifier: 'llama-3-70b-versatile',
    description: 'Groq Llama 3 70B Versatile model',
  },
  {
    id: 'llama-3-70b-versatile-2',
    label: 'Llama 3 70B Versatile (2)',
    apiIdentifier: 'llama-3-70b-versatile',
    description: 'Groq Llama 3 70B Versatile model (2)',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'llama-3-70b-versatile';
