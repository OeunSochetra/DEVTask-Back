"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boardController_1 = require("../controller/boardController");
const router = express_1.default.Router();
router.post("/board", boardController_1.createBoard);
router.get("/boards", boardController_1.getBoards);
router.get("/board/:id", boardController_1.getBoardById);
router.put("/board/:id", boardController_1.updateBoard);
router.delete("/board/:id", boardController_1.deleteBoard);
exports.default = router;
