import express from "express";
import { chats } from "./data/data.js";
import { PORT } from "./config/index.js";
import ConnectDB from "./config/db.js";
import router from "./routes/index.js";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import messageRoutes from "./routes/messageRoutes.js";
import { Server } from "socket.io";
const app = express();

ConnectDB();
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", router);
app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT, console.log("Server started on PORT 4000"));

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("user joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    let chat = newMessageReceived.chat;

    if (!chat.users) return console.log("Chat.users not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;

      socket.in(user._id).emit("message received", newMessageReceived);
    });
  });
});
