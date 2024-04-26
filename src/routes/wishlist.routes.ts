import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import {
    addWishlistSchema,
    deleteWishlistSchema,
    getUsersWishlistSchema,
} from "../schemas/wishlist.schema";
import verifyJWT from "../middlewares/verifyToken";
import {
    addWishlistHandler,
    deleteWishlistHandler,
    getUsersWishlistHandler,
} from "../controllers/wishlist.controller";

const router = Router();

router.post(
    "/api/v1/wishlist/add",
    validateInput(addWishlistSchema),
    verifyJWT,
    addWishlistHandler
);

router.get(
    "/api/v1/wishlist/getWishlist",
    validateInput(getUsersWishlistSchema),
    getUsersWishlistHandler
);

router.delete(
    "/api/v1/wishlist/deleteItem/:id",
    validateInput(deleteWishlistSchema),
    deleteWishlistHandler
);

export default router;
