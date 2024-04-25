import BookingModel from "../models/booking.model";

export const findBookingById = (id: string) => {
    return BookingModel.findById(id);
};
