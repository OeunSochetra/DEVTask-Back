import mongoose, { Document, Schema } from "mongoose";
import { IBoard } from "../constants/common";

export const BoardSchema = new Schema({
  company: { type: String, required: [true, "company name is required"] },
  logo: { type: String, required: [true, "company logo is required"] },
  jobType: { type: String, required: [true, "job type is required"] },
  jobTitle: { type: String, required: [true, "job title is required"] },
  locations: { type: String, required: [true, "locations are required"] },
  description: { type: String, required: [true, "description is required"] },
  spotlightOption: { type: Schema.Types.ObjectId, ref: "Spotlight" },
});

const Board = mongoose.model<IBoard & Document>("Board", BoardSchema);
export default Board;
