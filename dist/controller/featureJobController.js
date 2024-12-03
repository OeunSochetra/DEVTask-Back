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
exports.deleteFeatureJob = exports.updateFeatureJob = exports.getFeatureJobById = exports.getFeatureJobs = exports.createFeatureJob = void 0;
const featureJob_model_1 = __importDefault(require("../models/featureJob.model"));
const createFeatureJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { company, logo, jobType, jobTitle, spotlightOption, locations, description, categories, website, applyLink, email, } = req.body;
    try {
        const newFeatureJob = new featureJob_model_1.default({
            company,
            logo,
            jobType,
            jobTitle,
            spotlightOption,
            locations,
            description,
            categories,
            website,
            applyLink,
            email,
        });
        yield newFeatureJob.save();
        res.status(201).json({
            message: "success",
            data: newFeatureJob,
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
exports.createFeatureJob = createFeatureJob;
const getFeatureJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const featureJobs = yield featureJob_model_1.default.find()
            .populate("spotlightOption")
            .populate("categories")
            .exec();
        res.status(200).json({
            message: "success",
            data: featureJobs,
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
exports.getFeatureJobs = getFeatureJobs;
const getFeatureJobById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const featureJob = yield featureJob_model_1.default.findById(id)
            .populate("spotlightOption")
            .populate("categories")
            .exec();
        res.status(200).json({
            message: "success",
            data: featureJob,
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
exports.getFeatureJobById = getFeatureJobById;
const updateFeatureJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { company, logo, jobType, jobTitle, spotlightOption, locations, description, categories, website, applyLink, email, } = req.body;
    try {
        const featureJob = yield featureJob_model_1.default.findByIdAndUpdate(id, {
            company,
            logo,
            jobType,
            jobTitle,
            spotlightOption,
            locations,
            description,
            categories,
            website,
            applyLink,
            email,
        }, { new: true });
        res.status(200).json({
            message: " success",
            data: featureJob,
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
exports.updateFeatureJob = updateFeatureJob;
const deleteFeatureJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const featureJOb = yield featureJob_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "success",
            data: featureJOb,
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
exports.deleteFeatureJob = deleteFeatureJob;
