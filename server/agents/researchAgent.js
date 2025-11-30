// server/agents/researchAgent.js
import { askLLM } from "../llm.js";

// mock tool for research (simple version for now)
export async function researchAgent(planText) {
  const messages = [
    {
      role: "system",
      content:
        "You are the Research Agent. Use general knowledge to gather accurate information for each step."
    },
    {
      role: "user",
      content: `Here is the plan:\n${planText}\n\nProvide researched notes.`
    }
  ];

  const research = await askLLM(messages);
  return research;
}
