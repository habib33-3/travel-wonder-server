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
exports.clearToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../env");
const createToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, role } = req.body;
        if (!env_1.accessToken) {
            throw new Error("Access token is not defined.");
        }
        const token = jsonwebtoken_1.default.sign({ email, role }, env_1.accessToken, {
            expiresIn: process.env.NODE_ENV === "production" ? "24h" : "30d",
        });
        return res
            .status(200)
            .cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
            .send("success");
    }
    catch (error) {
        console.log("error during token create", error);
        return res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
});
exports.createToken = createToken;
const clearToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200)
            .clearCookie("token", {
            maxAge: 0,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
            .send({ message: "cookie cleared", success: true });
    }
    catch (error) {
        console.log("error during clear token", error);
        res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
});
exports.clearToken = clearToken;
//# sourceMappingURL=auth.controller.js.map