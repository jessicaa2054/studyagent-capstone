// server/agents/writerAgent.js
import { askLLM } from "../llm.js";

export async function writerAgent(researchNotes, userQuestion) {
  const messages = [
    {
      role: "system",
      content:
        "You are the Writer Agent. Your job is to create a clean, final answer based ONLY on the research notes."
    },
    {
      role: "user",
      content: `User question: ${userQuestion}\n\nResearch notes:\n${researchNotes}\n\nNow write the final answer.`
    }
  ];

  const finalAnswer = await askLLM(messages);
  return finalAnswer;
}
