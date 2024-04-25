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

export class Review {
    @prop({
        required: true,
    })
    rating: number;

    @prop({
        required: true,
    })
    reviewText: string;

    @prop({
        required: true,
    })
    guideEmail: string;

    @prop({
        required: true,
    })
    userEmail: string;

    @prop({
        required: true,
    })
    userName: string;

    @prop({
        required: true,
    })
    userPic: string;
}

const ReviewModel = getModelForClass(Review);

export default ReviewModel
