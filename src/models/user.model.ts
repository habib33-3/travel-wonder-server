import { getModelForClass, prop } from "@typegoose/typegoose";

export class User {
    @prop({
        lowercase: true,
        required: true,
        unique: true,
    })
    email: string;

    @prop()
    name: string;

    @prop({
        default: "https://imgbb.com/HV14rFJ",
    })
    img: string;

    @prop({
        default: "user",
        enum: ["user", "admin", "guide"],
    })
    role: "user" | "admin" | "guide";
}

const UserModel = getModelForClass(User);

export default UserModel;
