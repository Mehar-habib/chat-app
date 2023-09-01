import express from "express";
import { chats } from "./data/data.js";
import { PORT } from "./config/index.js";
const app = express();

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id)
  const singleChat = chats.find((e) => e._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, console.log("Server started on PORT 4000"));
