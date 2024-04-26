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

export class User {
    @prop({
        lowercase: true,
        required: true,
        unique: true,
    })
    email!: string;

    @prop({})
    public name?: string;

    @prop({
        default: "https://imgbb.com/HV14rFJ",
    })
    img?: string;

    @prop({
        default: "user",
        enum: ["user", "admin", "guide"],
    })
    role?: "user" | "admin" | "guide";
}

const UserModel = getModelForClass(User);

export default UserModel;
