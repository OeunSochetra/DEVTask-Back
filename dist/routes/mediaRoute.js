"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mediaController_1 = require("../controller/mediaController");
const router = express_1.default.Router();
router.post("/media", mediaController_1.createMedia);
router.get("/media/:id", mediaController_1.getMediaById);
exports.default = router;
