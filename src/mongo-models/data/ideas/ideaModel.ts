import mongoose from "mongoose";
import { WhiteModels } from "@failean/shared-types";
type WhiteIdea = WhiteModels.Data.Ideas.WhiteIdea;

const ideaModel = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    idea: {
      type: String,
      required: true,
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default ideaModel;
