import express from "express";
import {
  createFeatureJob,
  getFeatureJobs,
  getFeatureJobById,
  updateFeatureJob,
  deleteFeatureJob,
} from "../controller/featureJobController";

const router = express.Router();

router.post("/feature-job", createFeatureJob);
router.get("/feature-jobs", getFeatureJobs);
router.get("/feature-job/:id", getFeatureJobById);
router.put("/feature-job/:id", updateFeatureJob);
router.delete("/feature-job/:id", deleteFeatureJob);

export default router;
