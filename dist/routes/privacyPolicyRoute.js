"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const privacyPolicyController_1 = require("../controller/privacyPolicyController");
const router = express_1.default.Router();
router.post("/privacy-policy", privacyPolicyController_1.createPrivacyPolicy);
router.get("/privacy-policy", privacyPolicyController_1.getPrivacyPolicy);
router.get("/privacy-policy/:id", privacyPolicyController_1.getPrivacyPolicyById);
router.put("/privacy-policy/:id", privacyPolicyController_1.updatePrivacyPolicy);
router.delete("/privacy-policy/:id", privacyPolicyController_1.deletePrivacyPolicy);
exports.default = router;
