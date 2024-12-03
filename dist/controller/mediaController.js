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
exports.getMediaById = exports.createMedia = void 0;
const media_modal_1 = __importDefault(require("../models/media.modal"));
const createMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, fileType, fileName } = req.body;
    try {
        const newMedia = new media_modal_1.default({ url, fileType, fileName });
        yield newMedia.save();
        res.status(201).json({
            message: "success",
            data: newMedia,
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
exports.createMedia = createMedia;
const getMediaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const media = yield media_modal_1.default.findById(id);
        res.status(200).json({
            message: "success",
            data: media,
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
exports.getMediaById = getMediaById;
