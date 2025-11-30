import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import agentRoutes from "./routes/agentRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public"))); // <- correct

// API routes
app.use("/api/agent", agentRoutes);
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
