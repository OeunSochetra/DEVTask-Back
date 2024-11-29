import express from "express";
import {
  createBoard,
  getBoards,
  getBoardById,
  updateBoard,
  deleteBoard,
} from "../controller/boardController";

const router = express.Router();

router.post("/board", createBoard);
router.get("/boards", getBoards);
router.get("/board/:id", getBoardById);
router.put("/board/:id", updateBoard);
router.delete("/board/:id", deleteBoard);

export default router;
