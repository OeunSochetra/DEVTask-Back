import { Request, Response } from "express";
import FeatureJob from "../models/featureJob.model";

export const createFeatureJob = async (req: Request, res: Response) => {
  const {
    company,
    logo,
    jobType,
    jobTitle,
    spotlightOption,
    locations,
    description,
    categories,
    website,
    applyLink,
    email,
  } = req.body;
  try {
    const newFeatureJob = new FeatureJob({
      company,
      logo,
      jobType,
      jobTitle,
      spotlightOption,
      locations,
      description,
      categories,
      website,
      applyLink,
      email,
    });

    await newFeatureJob.save();

    res.status(201).json({
      message: "success",
      data: newFeatureJob,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: { errorDetails: (error as Error).message },
    });
  }
};

export const getFeatureJobs = async (req: Request, res: Response) => {
  try {
    const featureJobs = await FeatureJob.find()
      .populate("spotlightOption")
      .populate("categories")
      .exec();
    res.status(200).json({
      message: "success",
      data: featureJobs,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: { errorDetails: (error as Error).message },
    });
  }
};

export const getFeatureJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const featureJob = await FeatureJob.findById(id)
      .populate("spotlightOption")
      .populate("categories")
      .exec();

    res.status(200).json({
      message: "success",
      data: featureJob,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: { errorDetails: (error as Error).message },
    });
  }
};

export const updateFeatureJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    company,
    logo,
    jobType,
    jobTitle,
    spotlightOption,
    locations,
    description,
    categories,
    website,
    applyLink,
    email,
  } = req.body;
  try {
    const featureJob = await FeatureJob.findByIdAndUpdate(
      id,
      {
        company,
        logo,
        jobType,
        jobTitle,
        spotlightOption,
        locations,
        description,
        categories,
        website,
        applyLink,
        email,
      },
      { new: true }
    );
    res.status(200).json({
      message: " success",
      data: featureJob,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: { errorDetails: (error as Error).message },
    });
  }
};

export const deleteFeatureJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const featureJOb = await FeatureJob.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data: featureJOb,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: { errorDetails: (error as Error).message },
    });
  }
};
