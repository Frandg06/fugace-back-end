import { Router } from "express";

export const alertsRouter = Router();

alertsRouter.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
