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
exports.deleteSpotlight = exports.updateSpotlight = exports.getSpotlightById = exports.getSpotlights = exports.createSpotlight = void 0;
const spotlight_model_1 = __importDefault(require("../models/spotlight.model"));
const createSpotlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { duration, price, viewMultiplier } = req.body;
    try {
        const newSpotlight = new spotlight_model_1.default({
            duration,
            price,
            viewMultiplier,
        });
        yield newSpotlight.save();
        res.status(201).json({
            message: "success",
            data: newSpotlight,
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
exports.createSpotlight = createSpotlight;
const getSpotlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spotlight = yield spotlight_model_1.default.find();
        res.status(200).json({
            message: "success",
            data: spotlight,
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
exports.getSpotlights = getSpotlights;
const getSpotlightById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const spotlight = yield spotlight_model_1.default.findById(id);
        res.status(200).json({
            message: "success",
            data: spotlight,
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
exports.getSpotlightById = getSpotlightById;
const updateSpotlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { duration, price, viewMultiplier } = req.body;
    try {
        const spotlight = yield spotlight_model_1.default.findByIdAndUpdate(id, { duration, price, viewMultiplier }, { new: true });
        res.status(200).json({
            message: "success",
            data: spotlight,
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
exports.updateSpotlight = updateSpotlight;
const deleteSpotlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const spotlight = yield spotlight_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "success",
            data: spotlight,
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
exports.deleteSpotlight = deleteSpotlight;
