import { getModelForClass, prop } from "@typegoose/typegoose";

export class Tour {
    @prop({
        required: true,
    })
    name!: string;

    @prop({
        required: true,
    })
    thumbnail!: string;

    @prop({
        required: true,
    })
    category!: string;

    @prop({
        required: true,
    })
    categoryId!: string;

    @prop({
        required: true,
    })
    description!: string;

    @prop({
        required: true,
        type: () => [String],
    })
    images!: string[];

    @prop({
        required: true,
        type: () => [String],
    })
    activities!: string[];

    @prop({
        required: true,
    })
    price!: number;
}

const TourModel = getModelForClass(Tour);

export default TourModel;
