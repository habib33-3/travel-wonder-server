"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishlistHandler = exports.getUsersWishlistHandler = exports.addWishlistHandler = void 0;
const wishlist_model_1 = __importDefault(require("../models/wishlist.model"));
const addWishlistHandler = async (req, res) => {
    try {
        const wishlist = req.body;
        await wishlist_model_1.default.create(wishlist);
        res.status(200).json({
            message: "created",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};
exports.addWishlistHandler = addWishlistHandler;
const getUsersWishlistHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const wishlist = await wishlist_model_1.default.find({ email });
        res.status(200).json({
            message: "successful",
            wishlist,
            success: true,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};
exports.getUsersWishlistHandler = getUsersWishlistHandler;
const deleteWishlistHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await wishlist_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "successful",
            success: true,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
};
exports.deleteWishlistHandler = deleteWishlistHandler;
