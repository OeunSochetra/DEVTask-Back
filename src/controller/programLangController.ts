import { Request, Response } from "express";
import ProgramLang from "../models/programLang.model";
import FeatureJob from "../models/featureJob.model";

export const createProgramLang = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const programLang = new ProgramLang({ name });
    await programLang.save();
    res.status(201).json({
      message: "success",
      data: programLang,
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

export const getProgramLangs = async (req: Request, res: Response) => {
  try {
    const programLangs = await ProgramLang.find();
    res.status(200).json({
      message: "success",
      data: programLangs,
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

// find all feature jobs that have a specific category

export const getFeatureJobsByCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const featureJobs = await FeatureJob.find({ categories: id });
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

export const getProgramLangById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const programLang = await ProgramLang.findById(id);
    res.status(200).json({
      message: "success",
      data: programLang,
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

export const updateProgramLang = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const programLang = await ProgramLang.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json({
      message: "success",
      data: programLang,
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

export const deleteProgramLang = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const programLang = await ProgramLang.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data: programLang,
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
