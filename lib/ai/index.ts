import { Groq } from 'groq';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: async (params) => {
      const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
      const chatCompletion = await groq.chat.completions.create({
        messages: params.messages,
        model: apiIdentifier,
        stream: true,
      });
      return chatCompletion.toReadableStream();
    },
    middleware: customMiddleware,
  });
};
