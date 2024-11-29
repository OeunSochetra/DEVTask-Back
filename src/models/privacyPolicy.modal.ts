import mongoose, { Schema, Document } from "mongoose";
import { IPrivacyPolicy } from "../constants/common";

const PrivacyPolicySchema = new Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    content: { type: String, required: [true, "Content is required"] },
    privacyAndPolicy: {
      type: String,
      required: [true, "privacy and policy is required"],
    },
  },
  { timestamps: true }
);

const PrivacyPolicy = mongoose.model<IPrivacyPolicy & Document>(
  "PrivacyPolicy",
  PrivacyPolicySchema
);
export default PrivacyPolicy;
