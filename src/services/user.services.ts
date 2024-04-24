import UserModel from "../models/user.model";

export const findUserById = (id: string) => {
    return UserModel.findById(id);
};

export const findUserByEmail = (email: string) => {
    return UserModel.findOne({ email: email });                
};
