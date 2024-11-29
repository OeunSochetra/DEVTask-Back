import { Request, Response } from "express";
import Spotlight from "../models/spotlight.model";

export const createSpotlight = async (req: Request, res: Response) => {
  const { duration, price, viewMultiplier } = req.body;
  try {
    const newSpotlight = new Spotlight({
      duration,
      price,
      viewMultiplier,
    });
    await newSpotlight.save();

    res.status(201).json({
      message: "success",
      data: newSpotlight,
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

export const getSpotlights = async (req: Request, res: Response) => {
  try {
    const spotlight = await Spotlight.find();
    res.status(200).json({
      message: "success",
      data: spotlight,
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

export const getSpotlightById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const spotlight = await Spotlight.findById(id);
    res.status(200).json({
      message: "success",
      data: spotlight,
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

export const updateSpotlight = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { duration, price, viewMultiplier } = req.body;
  try {
    const spotlight = await Spotlight.findByIdAndUpdate(
      id,
      { duration, price, viewMultiplier },
      { new: true }
    );
    res.status(200).json({
      message: "success",
      data: spotlight,
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

export const deleteSpotlight = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const spotlight = await Spotlight.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data: spotlight,
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
