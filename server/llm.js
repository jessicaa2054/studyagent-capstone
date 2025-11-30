// server/llm.js
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Universal LLM call wrapper
export async function askLLM(messages) {
  try {
    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages,
      temperature: 0.3,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("LLM ERROR:", error);
    throw new Error("Failed to communicate with AI");
  }
}
