import dotenv from "dotenv";
dotenv.config();

export const { PORT, MONGO_URL, JWT_SECRET } = process.env;
