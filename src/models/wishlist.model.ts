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
export class Wishlist {
    @prop({
        required: true,
    })
    name: string;

    @prop({
        required: true,
    })
    thumbnail: string;

    @prop({
        required: true,
    })
    price: number;

    @prop({
        required: true,
    })
    email: string;
}

const WishlistModel = getModelForClass(Wishlist);

export default WishlistModel;
