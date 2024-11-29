import { Request, Response } from "express";
import PrivacyPolicy from "../models/privacyPolicy.modal";

export const createPrivacyPolicy = async (req: Request, res: Response) => {
  const { title, content, privacyAndPolicy } = req.body;
  try {
    const newPrivacyPolicy = new PrivacyPolicy({
      title,
      content,
      privacyAndPolicy,
    });
    await newPrivacyPolicy.save();
    res.status(201).json({
      message: "success",
      data: newPrivacyPolicy,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const getPrivacyPolicy = async (req: Request, res: Response) => {
  try {
    const privacyPolicy = await PrivacyPolicy.find();
    res.status(200).json({
      message: "success",
      data: privacyPolicy,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const getPrivacyPolicyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const privacyPolicy = await PrivacyPolicy.findById(id);
    res.status(200).json({
      message: "success",
      data: privacyPolicy,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const updatePrivacyPolicy = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, privacyAndPolicy } = req.body;
  try {
    const updatedPrivacyPolicy = await PrivacyPolicy.findByIdAndUpdate(
      id,
      { title, content, privacyAndPolicy },
      { new: true }
    );
    res.status(200).json({
      message: "success",
      data: updatedPrivacyPolicy,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};

export const deletePrivacyPolicy = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const privacyPolicy = await PrivacyPolicy.findByIdAndDelete(id);
    res.status(200).json({
      message: "success",
      data: privacyPolicy,
      meta: {},
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      data: {},
      meta: error,
    });
  }
};
