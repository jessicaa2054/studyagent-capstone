// server/agents/plannerAgent.js
import { askLLM } from "../llm.js";

export async function plannerAgent(userQuestion) {
  const messages = [
    {
      role: "system",
      content: "You are the Planner Agent. Break the user's question into 2–4 clear steps. Return ONLY the steps."
    },
    {
      role: "user",
      content: userQuestion
    }
  ];

  const plan = await askLLM(messages);
  return plan;
}
