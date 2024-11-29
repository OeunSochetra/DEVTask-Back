import { Document } from "mongoose";

export interface IFeatureJob extends Document {
  company: string;
  logo: string;
  jobType: string;
  jobTitle: string;
  spotlightOption?: string[];
  locations: string;
  description: string;
  website?: string;
  applyLink?: string;
  email?: string;
  categories: string[];
}

export interface ISpotlight extends Document {
  duration: string;
  price: number;
  viewMultiplier: number;
}

export interface IProgramLang extends Document {
  name: string;
}

export interface IBoard extends Document {
  company: string;
  logo: string;
  description: string;
  jobType: string;
  jobTitle: string;
  locations: string;
  spotlightOption: string;
}

export interface IMedia extends Document {
  url: string;
  fileType: string;
  fileName: string;
}

export interface IPrivacyPolicy extends Document {
  title: string;
  content: string;
  privacyAndPolicy: string;
}
