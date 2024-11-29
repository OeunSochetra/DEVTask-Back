import express from "express";
import {
  createSpotlight,
  getSpotlights,
  getSpotlightById,
  updateSpotlight,
  deleteSpotlight,
} from "../controller/spotlightController";

const router = express.Router();

router.post("/spotlight", createSpotlight);
router.get("/spotlights", getSpotlights);
router.get("/spotlight/:id", getSpotlightById);
router.put("/spotlight/:id", updateSpotlight);
router.delete("/spotlight/:id", deleteSpotlight);

export default router;
