import express from "express";
import {
  getProgramLangs,
  createProgramLang,
  getProgramLangById,
  updateProgramLang,
  deleteProgramLang,
} from "../controller/programLangController";

const router = express.Router();

router.post("/program-lang", createProgramLang);
router.get("/program-langs", getProgramLangs);
router.get("/program-lang/:id", getProgramLangById);
router.put("/program-lang/:id", updateProgramLang);
router.delete("/program-lang/:id", deleteProgramLang);

export default router;
