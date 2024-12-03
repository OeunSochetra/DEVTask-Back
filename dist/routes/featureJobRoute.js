"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const featureJobController_1 = require("../controller/featureJobController");
const router = express_1.default.Router();
router.post("/feature-job", featureJobController_1.createFeatureJob);
router.get("/feature-jobs", featureJobController_1.getFeatureJobs);
router.get("/feature-job/:id", featureJobController_1.getFeatureJobById);
router.put("/feature-job/:id", featureJobController_1.updateFeatureJob);
router.delete("/feature-job/:id", featureJobController_1.deleteFeatureJob);
exports.default = router;
