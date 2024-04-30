"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGuideHandler = exports.checkAdminHandler = exports.makeGuide = exports.makeAdmin = exports.getAllUsers = exports.saveUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_services_1 = require("../services/user.services");
const saveUser = async (req, res) => {
    try {
        const { email, name } = req.body;
        const userInfo = {
            email,
            name: name !== null && name !== void 0 ? name : email.split("@")[0],
        };
        const user = await user_model_1.default.create(userInfo);
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
};
exports.saveUser = saveUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await user_model_1.default.find();
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
};
exports.getAllUsers = getAllUsers;
const makeAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, user_services_1.findUserById)(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        user.role = "admin";
        await user.save();
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
};
exports.makeAdmin = makeAdmin;
const makeGuide = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, user_services_1.findUserById)(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        user.role = "guide";
        await user.save();
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
};
exports.makeGuide = makeGuide;
const checkAdminHandler = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await (0, user_services_1.findUserByEmail)(email);
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
};
exports.checkAdminHandler = checkAdminHandler;
const checkGuideHandler = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await (0, user_services_1.findUserByEmail)(email);
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
};
exports.checkGuideHandler = checkGuideHandler;
