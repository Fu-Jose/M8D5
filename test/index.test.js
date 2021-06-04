import supertest from "supertest";
import dotenv from "dotenv";
import mongoose from "mongoose";
import server from "../server.js";
import AccomodationModel from "../models/index.js";
dotenv.config();

const request = supertest(server);

const accomodation = {
  name: "Trivago",
  description: "TuMadre",
  maxGuests: 6,
  city: "Lima",
};

describe("Check endpoints", () => {
  it("Return a list of accomodations", async () => {
    const response = await request.get("/accomodation");
    await AccomodationModel.create(accomodation);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body).toBeDefined();
  });

  it("Should return new accomodation", async () => {
    const response = await request.post("/accomodation");
    await AccomodationModel.create(accomodation);
    expect(response.status).toBe(201);
    expect(Object.isObject(response.body)).toBeTruthy();
    expect(response.body).toBeDefined();
  });

  it("Should return new version of accomodation", async () => {
    const newAccomodation = await AccomodationModel.create(accomodation);
    const { _id } = newAccomodation;

    const response = await request.put("/accomodation/" + _id);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
  it("Return deleted accomodation", async () => {
    const newAccomodation = await AccomodationModel.create(accomodation);
    const { _id } = newAccomodation;

    const response = await request.delete("/accomodation/" + _id);

    expect(response.status).toBe(204);
  });
});
