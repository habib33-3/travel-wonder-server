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
exports.checkGuideHandler = exports.checkAdminHandler = exports.makeGuide = exports.makeAdmin = exports.getAllUsers = exports.saveUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_services_1 = require("../services/user.services");
const saveUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name } = req.body;
        const userInfo = {
            email,
            name: name !== null && name !== void 0 ? name : email.split("@")[0],
        };
        const user = yield user_model_1.default.create(userInfo);
        if (user) {
            res.status(201).json({
                success: true,
                message: "User has been created",
            });
        }
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }
        else {
            console.error("error during save user : \n", error);
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
});
exports.saveUser = saveUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find();
        if (!users) {
            res.status(404).json({
                success: false,
                message: "no user found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User loaded",
            users,
        });
    }
    catch (error) {
        console.error("error during get all users: \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.getAllUsers = getAllUsers;
const makeAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, user_services_1.findUserById)(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        user.role = "admin";
        yield user.save();
        return res.status(200).json({
            success: true,
            message: "success",
        });
    }
    catch (error) {
        console.error("error during make admin: \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.makeAdmin = makeAdmin;
const makeGuide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, user_services_1.findUserById)(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        user.role = "guide";
        yield user.save();
        return res.status(200).json({
            success: true,
            message: "success",
        });
    }
    catch (error) {
        console.error("error during make guide: \n", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.makeGuide = makeGuide;
const checkAdminHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield (0, user_services_1.findUserByEmail)(email);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        const admin = (user === null || user === void 0 ? void 0 : user.role) === "admin";
        res.status(200).json({
            success: true,
            message: "success",
            admin,
        });
    }
    catch (error) {
        console.error("error during check admin: \n", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.checkAdminHandler = checkAdminHandler;
const checkGuideHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield (0, user_services_1.findUserByEmail)(email);
        if (!user) {
            res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        const guide = (user === null || user === void 0 ? void 0 : user.role) === "guide";
        res.status(200).json({
            success: true,
            message: "success",
            guide,
        });
    }
    catch (error) {
        console.error("error during check guide: \n", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.checkGuideHandler = checkGuideHandler;
