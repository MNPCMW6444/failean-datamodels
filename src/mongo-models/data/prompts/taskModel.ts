import mongoose from "mongoose";
import { WhiteModels } from "@failean/shared-types";
type WhiteTask = WhiteModels.Data.Prompts.WhiteTask;

const taskModel = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    ideaId: { type: mongoose.Schema.Types.ObjectId, required: true },
    promptName: { type: String, required: true },
    taskId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default taskModel;
