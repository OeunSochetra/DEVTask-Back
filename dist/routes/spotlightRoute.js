"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotlightController_1 = require("../controller/spotlightController");
const router = express_1.default.Router();
router.post("/spotlight", spotlightController_1.createSpotlight);
router.get("/spotlights", spotlightController_1.getSpotlights);
router.get("/spotlight/:id", spotlightController_1.getSpotlightById);
router.put("/spotlight/:id", spotlightController_1.updateSpotlight);
router.delete("/spotlight/:id", spotlightController_1.deleteSpotlight);
exports.default = router;
