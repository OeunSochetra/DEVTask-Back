import express from "express";
import { createMedia, getMediaById } from "../controller/mediaController";

const router = express.Router();

router.post("/media", createMedia);
router.get("/media/:id", getMediaById);

export default router;
