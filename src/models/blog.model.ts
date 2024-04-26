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

export class Blog {
    @prop({
        required: true,
    })
    storyTitle: string;

    @prop({
        required: true,
    })
    storyText: string;

    @prop({
        required: true,
    })
    writerName: string;

    @prop({
        required: true,
    })
    writerImg: string;

    @prop({
        required: true,
    })
    writerEmail: string;

    @prop({
        required: true,
    })
    publishDate: Date;
}

const BlogModel = getModelForClass(Blog);

export default BlogModel;
