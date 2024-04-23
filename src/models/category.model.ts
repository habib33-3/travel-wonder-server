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

export class Category {
    @prop({
        required: true,
    })
    name!: string;

    @prop({
        required: true,
    })
    img!: string;

    @prop({
        required: true,
    })
    categoryId!: number;

    @prop({
        required: true,
    })
    tagline!: string;
}

const CategoryModel = getModelForClass(Category);

export default CategoryModel;
