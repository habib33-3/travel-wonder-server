"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const wishlist_schema_1 = require("../schemas/wishlist.schema");
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const wishlist_controller_1 = require("../controllers/wishlist.controller");
const router = (0, express_1.Router)();
router.post("/api/v1/wishlist/add", (0, validateInput_1.default)(wishlist_schema_1.addWishlistSchema), verifyToken_1.default, wishlist_controller_1.addWishlistHandler);
router.get("/api/v1/wishlist/getWishlist", (0, validateInput_1.default)(wishlist_schema_1.getUsersWishlistSchema), wishlist_controller_1.getUsersWishlistHandler);
router.delete("/api/v1/wishlist/deleteItem/:id", (0, validateInput_1.default)(wishlist_schema_1.deleteWishlistSchema), wishlist_controller_1.deleteWishlistHandler);
exports.default = router;
//# sourceMappingURL=wishlist.routes.js.map