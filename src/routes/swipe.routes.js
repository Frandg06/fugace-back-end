import { Router } from "express";

export const swipeRouter = Router();

swipeRouter.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
