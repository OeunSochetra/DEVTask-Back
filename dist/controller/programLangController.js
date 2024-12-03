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
exports.deleteProgramLang = exports.updateProgramLang = exports.getProgramLangById = exports.getProgramLangs = exports.createProgramLang = void 0;
const programLang_model_1 = __importDefault(require("../models/programLang.model"));
const createProgramLang = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const programLang = new programLang_model_1.default({ name });
        yield programLang.save();
        res.status(201).json({
            message: "success",
            data: programLang,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: { errorDetails: error.message },
        });
    }
});
exports.createProgramLang = createProgramLang;
const getProgramLangs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const programLangs = yield programLang_model_1.default.find();
        res.status(200).json({
            message: "success",
            data: programLangs,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: { errorDetails: error.message },
        });
    }
});
exports.getProgramLangs = getProgramLangs;
const getProgramLangById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const programLang = yield programLang_model_1.default.findById(id);
        res.status(200).json({
            message: "success",
            data: programLang,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: { errorDetails: error.message },
        });
    }
});
exports.getProgramLangById = getProgramLangById;
const updateProgramLang = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const programLang = yield programLang_model_1.default.findByIdAndUpdate(id, { name }, { new: true });
        res.status(200).json({
            message: "success",
            data: programLang,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: { errorDetails: error.message },
        });
    }
});
exports.updateProgramLang = updateProgramLang;
const deleteProgramLang = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const programLang = yield programLang_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "success",
            data: programLang,
            meta: {},
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error",
            data: {},
            meta: { errorDetails: error.message },
        });
    }
});
exports.deleteProgramLang = deleteProgramLang;
