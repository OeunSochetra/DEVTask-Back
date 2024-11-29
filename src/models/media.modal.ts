import mongoose, { Schema, Document } from "mongoose";
import { IMedia } from "../constants/common";

const MediaSchema = new Schema(
  {
    url: { type: String, required: [true, "url is required"] },
    fileType: { type: String, required: [true, "fileType is required"] },
    fileName: { type: String, required: [true, "fileName is required"] },
  },
  { timestamps: true }
);

const Media = mongoose.model<IMedia & Document>("Media", MediaSchema);
export default Media;
