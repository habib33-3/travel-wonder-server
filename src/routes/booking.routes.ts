import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import {
    addBookingSchema,
    changeBookingStatusSchema,
    deleteBookingSchema,
    getGuideBookingSchema,
    getUserBookingSchema,
} from "../schemas/booking.schema";
import {
    addBookingHandler,
    changeBookingStatusHandler,
    deleteBookingHandler,
    getAllBookingHandler,
    getGuideBookingHandler,
    getUserBookingHandler,
} from "../controllers/booking.controller";
import verifyJWT from "../middlewares/verifyToken";

const router = Router();

router.post(
    "/api/v1/booking/addBooking",
    validateInput(addBookingSchema),
    verifyJWT,
    addBookingHandler
);

router.get("/api/v1/booking/getAllBooking", verifyJWT, getAllBookingHandler);

router.get(
    "/api/v1/bookings/userBookings",
    validateInput(getUserBookingSchema),
    verifyJWT,
    getUserBookingHandler
);

router.get(
    "/api/v1/bookings/guideBookings",
    validateInput(getGuideBookingSchema),
    verifyJWT,
    getGuideBookingHandler
);

router.put(
    "/api/v1/bookings/changeStatus/:id",
    validateInput(changeBookingStatusSchema),
    verifyJWT,
    changeBookingStatusHandler
);

router.delete(
    "/api/v1/booking/cancelBooking/:id",
    validateInput(deleteBookingSchema),
    verifyJWT,
    deleteBookingHandler
);

export default Router;
