import mongoose, { Schema, Document } from "mongoose";
import { IMedia } from "../constants/common";

const MediaSchema = new Schema(
  {
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Media = mongoose.model<IMedia & Document>("Media", MediaSchema);
export default Media;
