import UserModel from "../models/user.model";

export const findUserById = (id: string) => {
    return UserModel.findById(id);
};
