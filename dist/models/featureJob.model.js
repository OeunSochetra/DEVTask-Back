"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const FeatureJobSchema = new mongoose_1.Schema({
    company: { type: String, required: [true, "company name is required"] },
    logo: { type: String, required: [true, "logo is required"] },
    jobType: { type: String, required: [true, "job type is required"] },
    jobTitle: { type: String, required: [true, "job title is required"] },
    spotlightOption: { type: mongoose_1.Schema.Types.ObjectId, ref: "Spotlight" },
    locations: { type: String, required: [true, "locations are required"] },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    categories: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "ProgramLang" }],
    website: { type: String },
    applyLink: { type: String },
    email: { type: String },
}, { timestamps: true });
const FeatureJob = mongoose_1.default.model("FeatureJob", FeatureJobSchema);
exports.default = FeatureJob;