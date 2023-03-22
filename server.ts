import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "App is running on typescript" });
});

app.post("/shorten", (req: Request, res: Response) => {
  let url = req.query.url;
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
