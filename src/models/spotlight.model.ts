import mongoose, { Schema, Document } from "mongoose";
import { ISpotlight } from "../constants/common";

const SpotlightSchema = new Schema(
  {
    duration: { type: String, required: [true, "duration is required"] },
    price: { type: Number, required: [true, "price is required"] },
    viewMultiplier: {
      type: Number,
      required: [true, "view multiplier is required"],
    },
  },
  { timestamps: true }
);
const Spotlight = mongoose.model<ISpotlight & Document>(
  "Spotlight",
  SpotlightSchema
);
export default Spotlight;
