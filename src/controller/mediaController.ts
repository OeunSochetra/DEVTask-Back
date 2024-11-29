import { Request, Response } from "express";
import Media from "../models/media.modal";

export const createMedia = async (req: Request, res: Response) => {
  const { url, fileType, fileName } = req.body;
  try {
    const newMedia = new Media({ url, fileType, fileName });
    await newMedia.save();
    res.status(201).json({
      message: "success",
      data: newMedia,
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

export const getMediaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const media = await Media.findById(id);
    res.status(200).json({
      message: "success",
      data: media,
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
