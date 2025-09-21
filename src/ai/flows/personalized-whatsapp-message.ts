'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized WhatsApp message
 * to help users quickly reach out for support during an anxiety crisis.
 * 
 * - generatePersonalizedMessage - A function that generates a personalized WhatsApp message.
 * - PersonalizedMessageInput - The input type for the generatePersonalizedMessage function.
 * - PersonalizedMessageOutput - The return type for the generatePersonalizedMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedMessageInputSchema = z.object({
  situation: z
    .string()
    .describe('A brief description of the user\'s current situation and feelings.'),
});
export type PersonalizedMessageInput = z.infer<typeof PersonalizedMessageInputSchema>;

const PersonalizedMessageOutputSchema = z.object({
  message:
    z.string()
      .describe(
        'A personalized message that the user can send via WhatsApp to seek support. If the situation provided by the user does not seem to indicate they need immediate support, return an empty string.'
      ),
});
export type PersonalizedMessageOutput = z.infer<typeof PersonalizedMessageOutputSchema>;

export async function generatePersonalizedMessage(
  input: PersonalizedMessageInput
): Promise<PersonalizedMessageOutput> {
  return personalizedWhatsAppMessageFlow(input);
}

const personalizedWhatsAppMessagePrompt = ai.definePrompt({
  name: 'personalizedWhatsAppMessagePrompt',
  input: {schema: PersonalizedMessageInputSchema},
  output: {schema: PersonalizedMessageOutputSchema},
  prompt: `You are a helpful assistant that drafts personalized messages for users seeking support during an anxiety crisis.

  Given the user\'s description of their situation, create a brief and supportive message that they can send via WhatsApp to a therapist or support contact.
  The message should acknowledge their feelings and clearly state that they are seeking help.

  If the situation provided by the user does not seem to indicate they need immediate support, return an empty string.

  Situation: {{{situation}}}
  `,
});

const personalizedWhatsAppMessageFlow = ai.defineFlow(
  {
    name: 'personalizedWhatsAppMessageFlow',
    inputSchema: PersonalizedMessageInputSchema,
    outputSchema: PersonalizedMessageOutputSchema,
  },
  async input => {
    const {output} = await personalizedWhatsAppMessagePrompt(input);
    return output!;
  }
);
