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
router.use(user_routes_1.default);
router.use(auth_routes_1.default);
router.use(category_routes_1.default);
router.use(tour_routes_1.default);
router.use(guide_routes_1.default);
router.use(review_routes_1.default);
router.use(booking_routes_1.default);
router.use(wishlist_routes_1.default);
router.use(blog_routes_1.default);
router.get("/api/health", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("server running");
}));
exports.default = router;
//# sourceMappingURL=index.js.map