import mongoose from "mongoose";
import { MONGO_URL } from "./index.js";

const ConnectDB = async () => {
  const conn = await mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("err");
    });
};

export default ConnectDB;
