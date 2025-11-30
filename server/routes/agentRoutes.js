import { Router } from "express";

import { plannerAgent } from "../agents/plannerAgent.js";
import { researchAgent } from "../agents/researchAgent.js";
import { writerAgent } from "../agents/writerAgent.js";

const router = Router();

router.post("/ask", async (req, res) => {
  console.log(">>> HIT /api/agent/ask ROUTE");

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const plan = await plannerAgent(question);
    const research = await researchAgent(plan);
    const finalAnswer = await writerAgent(research, question);

    res.json({ plan, research, answer: finalAnswer });
  } catch (error) {
    console.error("PIPELINE ERROR:", error);
    res.status(500).json({ error: "Agent pipeline failed" });
  }
});

export default router;
