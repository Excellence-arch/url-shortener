import { expect } from "chai";
import { connect, disconnect } from "mongoose";
import { app } from "../server";
import request from "supertest";

describe("Get", () => {
  before(async () => {
    // Connect to the database before running tests
    const URI: string = process.env.URI || "";
    await connect(URI);
  });

  describe("GET /", () => {
    it("should get /", (done) => {
      request(app)
        .get("/")
        .end((err, resp) => {
          expect(resp.status).to.equal(200);
          done();
        });
    });
  });

  // describe("GET /all", () => {
  //   it("should get /all", function (this: Mocha.Context, done) {
  //     this.timeout(9000);
  //     request(app)
  //       .get("/all")
  //       .end((err, resp) => {
  //         expect(resp.status).to.equal(200);
  //         done();
  //       });
  //   });
  // });

  // after(async () => {
  //   // Disconnect from the database after running tests
  //   await disconnect();
  // });
});
