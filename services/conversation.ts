'use client';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAzIsuR4icw6o24Vn0ZKkwKCNU00yVC-e0');

export class ConversationService {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  private chat = this.model.startChat({
    history: [
      {
        role: 'user',
        parts: `You are a sales agent for Smallest.ai. Follow these rules strictly:
        - Keep responses under 30 words
        - Be professional and direct
        - Focus on Lightning AI's speed and efficiency
        - Never use special characters or emojis
        - Never use asterisks or formatting
        - Speak naturally like a human sales agent`,
      },
      {
        role: 'model',
        parts: 'I understand. I will be concise and professional while focusing on our key product benefits.',
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
      temperature: 0.7,
    },
  });

  async getResponse(userInput: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(userInput);
      const response = await result.response;
      return response.text().replace(/[*_~`]/g, '');
    } catch (error) {
      console.error('Error generating response:', error);
      return 'I apologize for the technical issue. Could you please repeat that?';
    }
  }

  reset() {
    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: `You are a sales agent for Smallest.ai. Follow these rules strictly:
          - Keep responses under 30 words
          - Be professional and direct
          - Focus on Lightning AI's speed and efficiency
          - Never use special characters or emojis
          - Never use asterisks or formatting
          - Speak naturally like a human sales agent`,
        },
        {
          role: 'model',
          parts: 'I understand. I will be concise and professional while focusing on our key product benefits.',
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });
  }
}

export const conversationService = new ConversationService();