import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { planRouter } from "./routes/plan";
import { profileRouter } from "./routes/profile";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-workout-planner-sepia.vercel.app/",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

//API Routes
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});