"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const programLangController_1 = require("../controller/programLangController");
const router = express_1.default.Router();
router.post("/program-lang", programLangController_1.createProgramLang);
router.get("/program-langs", programLangController_1.getProgramLangs);
router.get("/program-lang/:id", programLangController_1.getProgramLangById);
router.put("/program-lang/:id", programLangController_1.updateProgramLang);
router.delete("/program-lang/:id", programLangController_1.deleteProgramLang);
exports.default = router;
