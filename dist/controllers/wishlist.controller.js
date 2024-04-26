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
exports.deleteWishlistHandler = exports.getUsersWishlistHandler = exports.addWishlistHandler = void 0;
const wishlist_model_1 = __importDefault(require("../models/wishlist.model"));
const addWishlistHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wishlist = req.body;
        yield wishlist_model_1.default.create(wishlist);
        res.status(200).json({
            message: "created",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "internal error",
        });
    }
});
exports.addWishlistHandler = addWishlistHandler;
const getUsersWishlistHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const wishlist = yield wishlist_model_1.default.find({ email });
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
});
exports.getUsersWishlistHandler = getUsersWishlistHandler;
const deleteWishlistHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield wishlist_model_1.default.findByIdAndDelete(id);
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
});
exports.deleteWishlistHandler = deleteWishlistHandler;
//# sourceMappingURL=wishlist.controller.js.map