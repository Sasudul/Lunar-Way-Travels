
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client using the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAdvice = async (destination: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest a 3-day itinerary for a tourist visiting ${destination}.`,
      config: {
        systemInstruction: "You are a travel assistant for Lunarway Travels, a Sri Lankan agency. Keep the tone professional, inviting, and mention that Lunarway Travels can handle all these arrangements. Format with clear headings and bullet points.",
        temperature: 0.7,
        topP: 0.95,
      }
    });
    // response.text is a property, not a method.
    return response.text || "I'm sorry, I couldn't generate advice right now. Please contact our support team!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Book a ticket Right Now and have a Luxury Experience With us.";
  }
};