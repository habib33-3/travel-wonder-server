import {
    getModelForClass,
    modelOptions,
    prop,
    Severity,
} from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true,
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})

export class Booking {
    @prop({
        required: true,
    })
    touristName: string;

    @prop({
        required: true,
    })
    touristEmail: string;

    @prop({
        required: true,
    })
    touristPic: string;

    @prop({
        required: true,
    })
    price: number;

    @prop({
        required: true,
    })
    tourName: string;

    @prop({
        required: true,
    })
    tourDate: Date;

    @prop({
        required: true,
    })
    guideEmail: string;

    @prop({
        default: "in review",
    })
    status: "accepted" | "rejected" | "in review";
}

const BookingModel = getModelForClass(Booking);

export default BookingModel;
