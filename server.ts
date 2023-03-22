import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";

const app: Express = express();
dotenv.config();
const PORT: any = process.env.PORT || 3000;
const URI: string = process.env.URI || "";

connect(URI);

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "App is running on typescript" });
});

app.post("/shorten", (req: Request, res: Response) => {
  let url = req.query.url;
});

app.get("/all", (req: Request, res: Response) => {});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
