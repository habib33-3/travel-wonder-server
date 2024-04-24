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
export class Guide {
    @prop({
        required: true,
    })
    name: string;

    @prop({
        required: true,
        unique: true,
        lowercase: true,
    })
    email: string;

    @prop({
        required: true,
    })
    pic: string;

    @prop({
        required: true,
        type: () => [String],
    })
    skills: string[];

    @prop({
        required: true,
        type: () => [String],
    })
    language: string[];

    @prop({
        required: true,
    })
    phone: string;

    @prop({
        required: true,
    })
    education: string;

    @prop({
        required: true,
    })
    experience: string;
}

const GuideModel = getModelForClass(Guide);

export default GuideModel;
