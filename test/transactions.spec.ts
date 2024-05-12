import { expect, test, beforeAll, afterAll, describe, it } from "vitest";
import request from "supertest";
import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });
  // deve ser possivel fazer x
  it("should be able to create a new transaction", async () => {
    // fazer a chamada HTTP para criar uma nova transação
    const response = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transations",
        amount: 500,
        type: "credit",
      })
      .expect(201);
    // expect(response.statusCode).toEqual(201)
  });
});
