import mongoose, { Schema, Document } from "mongoose";
import { IFeatureJob } from "../constants/common";

const FeatureJobSchema = new Schema(
  {
    company: { type: String, required: [true, "company name is required"] },
    logo: { type: String, required: [true, "logo is required"] },
    jobType: { type: String, required: [true, "job type is required"] },
    jobTitle: { type: String, required: [true, "job title is required"] },
    spotlightOption: { type: Schema.Types.ObjectId, ref: "Spotlight" },
    locations: { type: String, required: [true, "locations are required"] },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "ProgramLang" }],
    website: { type: String },
    applyLink: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

const FeatureJob = mongoose.model<IFeatureJob & Document>(
  "FeatureJob",
  FeatureJobSchema
);
export default FeatureJob;
