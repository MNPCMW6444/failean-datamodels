import mongoose from "mongoose";
import { WhiteModels } from "@failean/shared-types";
type WhiteToken = WhiteModels.Accounts.WhiteToken;

const tokenModel = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    transaction: { type: Number, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default tokenModel;
