import express from "express";
import AccomodationModel from "../models/index.js";

const { Router } = express;

const AccomodationRouter = new Router();

AccomodationRouter.get("/", async (req, res) => {
  const data = await AccomodationModel.find({});
  res.status(200).send({ data });
});

AccomodationRouter.post("/", async (req, res) => {
  try {
    const { id, name, description, maxGuests, city } = req.body;

    if (!id || !name || !description || !maxGuests || !city)
      throw new Error("Invalid data");

    const data = new ProductModel({ id, name, description, maxGuests, city });
    await data.save();

    res.status(201).send(data);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

export default AccomodationRouter;
