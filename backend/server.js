import express from "express";
import { chats } from "./data/data.js";
import { PORT } from "./config/index.js";
import ConnectDB from "./config/db.js";
import router from "./routes/index.js";
import chatRoutes from "./routes/chatRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import messageRoutes from "./routes/messageRoutes.js";
const app = express();

ConnectDB();
app.use(express.json());

app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("Server started on PORT 4000"));
