import { Request, Response } from "express";
import upload from "../middlewares/upload";
import Media from "../models/media.modal";
import express from "express";

const router = express.Router();

router.post(
  "/media",
  upload.single("image"),
  async (req: any, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
      }

      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;

      const media = new Media({
        url: imageUrl,
      });
      media.save();

      res.status(201).json({
        message: "success",
        data: media,
        meta: {},
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
        data: {},
        meta: { errorDetails: (error as Error).message },
      });
    }
  }
);

export default router;
