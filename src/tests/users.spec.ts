import app from "../app";
import * as request from "supertest";


describe("GET /users End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).get("/users");
    expect(response.text).toBe('List of users');
  });

});

describe("GET /user/:userId End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).get("/users/1");
    expect(response.status).toBe(200);
    expect(response.text).toBe('Get details for 1');
  });

});

describe("POST /user End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).post("/users");
    expect(response.status).toBe(200);
    expect(response.text).toBe('Create user');
  });

});

describe("PUT /user/:userId End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).put("/users/1");
    expect(response.status).toBe(200);
    expect(response.text).toBe('Update user 1');
  });

});

describe("DELETE /user/:userId End Point", () => {

  it("valid request response", async () => {
    const response = await request(app).delete("/users/1");
    expect(response.status).toBe(200);
    expect(response.text).toBe('Delete user 1');
  });

});