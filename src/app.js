import express from "express";
import { authRouter } from "./routes/auth.routes.js";
import { swipeRouter } from "./routes/swipe.routes.js";
import { chatRouter } from "./routes/chat.routes.js";
import { alertsRouter } from "./routes/alerts.routes.js";

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/swipe", swipeRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/alert", alertsRouter);

export default app;
