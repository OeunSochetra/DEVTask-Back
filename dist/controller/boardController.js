"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.updateBoard = exports.getBoardById = exports.getBoards = exports.createBoard = void 0;
const board_model_1 = __importDefault(require("../models/board.model"));
const createBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { company, logo, description, jobType, jobTitle, locations, spotlightOption, } = req.body;
    try {
        const newBoard = new board_model_1.default({
            company,
            logo,
            description,
            jobType,
            jobTitle,
            locations,
            spotlightOption,
        });
        yield newBoard.save();
        res.status(201).json({
            message: "success",
            data: newBoard,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: error,
        });
    }
});
exports.createBoard = createBoard;
const getBoards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boards = yield board_model_1.default.find().populate("spotlightOption").exec();
        res.status(200).json({
            message: "success",
            data: boards,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: error,
        });
    }
});
exports.getBoards = getBoards;
const getBoardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const board = yield board_model_1.default.findById(id).populate("spotlightOption").exec();
        res.status(200).json({
            message: "success",
            data: board,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: error,
        });
    }
});
exports.getBoardById = getBoardById;
const updateBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { company, logo, description, jobType, jobTitle, locations, spotlightOption, } = req.body;
    try {
        const board = yield board_model_1.default.findByIdAndUpdate(id, {
            company,
            logo,
            description,
            jobType,
            jobTitle,
            locations,
            spotlightOption,
        }, { new: true });
        res.status(200).json({
            message: "success",
            data: board,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: error,
        });
    }
});
exports.updateBoard = updateBoard;
const deleteBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const board = yield board_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "success",
            data: board,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: error,
        });
    }
});
exports.deleteBoard = deleteBoard;
