import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import { IUrl, UrlModel } from "./models/url.model";

const app: Express = express();
dotenv.config();
const PORT: any = process.env.PORT || 3000;
const URI: string = process.env.URI || "";

app.use(express.json({ limit: "50mb" }));

connect(URI);

const createUrl = (url: string): string => {
  return "Hi";
};

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "App is running on typescript" });
});

app.post("/shorten", async (req: Request, res: Response) => {
  const url: string = req.body.url || "";
  const newSave: IUrl = new UrlModel({
    url,
    newUrl: await createUrl(url),
  });
  newSave
    .save()
    .then((user: IUrl) => {
      res
        .status(201)
        .send({ status: 201, message: "success", newUrl: user.newUrl });
    })
    .catch((err: Error) => {
      res.status(400).send({ status: 400, message: "Bad request" });
    });
});

app.get("/all", (req: Request, res: Response) => {
  res.send([]);
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));

export { app };
