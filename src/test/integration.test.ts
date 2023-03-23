import { app } from "../server";
import chai from "chai";
import chaiHttp from "chai-http";
import { IUrl, UrlModel } from "../models/url.model";
import { Document, ObjectId } from "mongoose";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Integration tests", () => {
  before(async function (this: Mocha.Context) {
    this.timeout(8000);
    let resp = await UrlModel.find();
    if (resp.length > 0) {
      await UrlModel.deleteMany();
    }
    return;
  });

  describe("GET /", () => {
    it("should return a message", async () => {
      const res = await chai.request(app).get("/");
      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal("App is running on typescript");
    });
  });

  describe("POST /shorten", () => {
    it("should create a new shortened URL", async () => {
      const url = "https://www.google.com";
      const res = await chai.request(app).post("/shorten").send({ url });
      expect(res.status).to.equal(201);
      expect(res.body.status).to.equal(201);
      expect(res.body.message).to.equal("success");
      expect(res.body.newUrl).to.be.a("string");
    });

    it("should return an error if no URL is provided", async () => {
      const res = await chai.request(app).post("/shorten");
      expect(res.status).to.equal(400);
      expect(res.body.status).to.equal(400);
      expect(res.body.message).to.equal("Bad request");
    });
  });

  describe("GET /all", () => {
    it("should return all shortened URLs", async () => {
      const res = await chai.request(app).get("/all");
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
    });
  });
});
