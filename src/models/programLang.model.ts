import mongoose, { Schema, Document } from "mongoose";
import { IProgramLang } from "../constants/common";

export const ProgramLangSchema = new Schema(
  {
    name: { type: String, required: [true, "program name is required"] },
  },
  { timestamps: true }
);

const Program = mongoose.model<IProgramLang & Document>(
  "ProgramLang",
  ProgramLangSchema
);
export default Program;
