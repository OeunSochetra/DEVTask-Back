import express from "express";
import {
  createPrivacyPolicy,
  getPrivacyPolicy,
  getPrivacyPolicyById,
  updatePrivacyPolicy,
  deletePrivacyPolicy,
} from "../controller/privacyPolicyController";

const router = express.Router();

router.post("/privacy-policy", createPrivacyPolicy);
router.get("/privacy-policy", getPrivacyPolicy);
router.get("/privacy-policy/:id", getPrivacyPolicyById);
router.put("/privacy-policy/:id", updatePrivacyPolicy);
router.delete("/privacy-policy/:id", deletePrivacyPolicy);

export default router;
