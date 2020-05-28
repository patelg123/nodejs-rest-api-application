import { expect } from "chai";
import app from "../app";
import * as request from "supertest";
import "mocha";

describe("GET /users End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).get("/users");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('List of users');
  });

});

describe("GET /user/:userId End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).get("/users/1");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Get details for 1');
  });
});

describe("POST /user End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).post("/users");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Create user');
  });

});

describe("PUT /user/:userId End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).put("/users/1");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Update user 1');
  });

});

describe("DELETE /user/:userId End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).delete("/users/1");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Delete user 1');
  });

});