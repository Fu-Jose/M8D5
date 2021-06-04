import express from "express";
import cors from "cors";
import AccomodationRouter from "./services/index";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/test", (req, res) => {
  res.status(200).send({ message: "Test success!" });
});

server.use("/accomodation", AccomodationRouter);

export default server;
