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
exports.deletePrivacyPolicy = exports.updatePrivacyPolicy = exports.getPrivacyPolicyById = exports.getPrivacyPolicy = exports.createPrivacyPolicy = void 0;
const privacyPolicy_modal_1 = __importDefault(require("../models/privacyPolicy.modal"));
const createPrivacyPolicy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, privacyAndPolicy } = req.body;
    try {
        const newPrivacyPolicy = new privacyPolicy_modal_1.default({
            title,
            content,
            privacyAndPolicy,
        });
        yield newPrivacyPolicy.save();
        res.status(201).json({
            message: "success",
            data: newPrivacyPolicy,
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
exports.createPrivacyPolicy = createPrivacyPolicy;
const getPrivacyPolicy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const privacyPolicy = yield privacyPolicy_modal_1.default.find();
        res.status(200).json({
            message: "success",
            data: privacyPolicy,
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
exports.getPrivacyPolicy = getPrivacyPolicy;
const getPrivacyPolicyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const privacyPolicy = yield privacyPolicy_modal_1.default.findById(id);
        res.status(200).json({
            message: "success",
            data: privacyPolicy,
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
exports.getPrivacyPolicyById = getPrivacyPolicyById;
const updatePrivacyPolicy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content, privacyAndPolicy } = req.body;
    try {
        const updatedPrivacyPolicy = yield privacyPolicy_modal_1.default.findByIdAndUpdate(id, { title, content, privacyAndPolicy }, { new: true });
        res.status(200).json({
            message: "success",
            data: updatedPrivacyPolicy,
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
exports.updatePrivacyPolicy = updatePrivacyPolicy;
const deletePrivacyPolicy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const privacyPolicy = yield privacyPolicy_modal_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "success",
            data: privacyPolicy,
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
exports.deletePrivacyPolicy = deletePrivacyPolicy;
