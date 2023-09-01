import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default: "https://www.pngmart.com/files/21/Account-User-PNG.png",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userModel);
