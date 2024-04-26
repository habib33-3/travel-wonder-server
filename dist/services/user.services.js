"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.findUserById = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const findUserById = (id) => {
    return user_model_1.default.findById(id);
};
exports.findUserById = findUserById;
const findUserByEmail = (email) => {
    return user_model_1.default.findOne({ email: email });
};
exports.findUserByEmail = findUserByEmail;
//# sourceMappingURL=user.services.js.map