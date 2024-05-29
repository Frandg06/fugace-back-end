import { Router } from "express";

export const chatRouter = Router();

chatRouter.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
