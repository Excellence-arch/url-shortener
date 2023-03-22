import { expect } from "chai";
import { connect, disconnect } from "mongoose";
import { UrlModel, IUrl } from "../models/url.model";
import { app } from "../server";
import request from "supertest";

describe("URL Test", () => {
  before(async () => {
    // Connect to the database before running tests
    const URI: string = process.env.URI || "";
    console.log(URI);
    await connect(URI);
  });

  // after(async () => {
  //   // Disconnect from the database after running tests
  //   await disconnect();
  // });

  describe("POST /shorten", () => {
    it("should create a new user", function (this: Mocha.Context, done) {
      this.timeout(8000);
      request(app)
        .post("/shorten")
        .send({ url: "Hello" })
        .end((err, response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.have.property("_id");
          expect(response.body.url).to.equal("Hello");
          done();
        });

      // Verify that the user has been saved to the database
      // const savedUser: IUrl | null = await UrlModel.findOne({
      //   url: "hello",
      // });
      // expect(savedUser).to.not.be.null;
      // expect(savedUser?.url).to.equal("Hello");
      // expect(savedUser?.newUrl).not.to.equal("Hello");
      // expect(savedUser?.createdAt).to.equal(Date.now());
    });
  });
});
