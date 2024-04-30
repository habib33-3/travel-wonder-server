"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const tour_routes_1 = __importDefault(require("./tour.routes"));
const guide_routes_1 = __importDefault(require("./guide.routes"));
const review_routes_1 = __importDefault(require("./review.routes"));
const booking_routes_1 = __importDefault(require("./booking.routes"));
const wishlist_routes_1 = __importDefault(require("./wishlist.routes"));
const blog_routes_1 = __importDefault(require("./blog.routes"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("travel wonder");
});
router.get("/api/health", async (req, res) => {
    res.send("server running|");
});
router.use(user_routes_1.default);
router.use(auth_routes_1.default);
router.use(category_routes_1.default);
router.use(tour_routes_1.default);
router.use(guide_routes_1.default);
router.use(review_routes_1.default);
router.use(booking_routes_1.default);
router.use(wishlist_routes_1.default);
router.use(blog_routes_1.default);
exports.default = router;
