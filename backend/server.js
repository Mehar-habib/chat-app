import express from "express";
import { chats } from "./data/data.js";
import { PORT } from "./config/index.js";
import ConnectDB from "./config/db.js";
import router from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const app = express();

ConnectDB();
app.use(express.json());
app.use("/api/user", router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("Server started on PORT 4000"));
