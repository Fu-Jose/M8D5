import mongoose from "mongoose";
import AccomodationSchema from "./schema.js";
const { model } = mongoose;

export default model("accomodation", AccomodationSchema);
