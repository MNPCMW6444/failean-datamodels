import { Schema } from "mongoose";

const userModel = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    subscription: {
      type: String,
      required: true,
      default: "free",
    },
  },
  {
    timestamps: true,
  }
);

export default userModel;
