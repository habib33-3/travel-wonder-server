"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
const env_1 = require("../env");
const dbUrl = `mongodb+srv://${env_1.dbUser}:${env_1.dbPass}@cluster0.cdjrxf4.mongodb.net/travel-wonder?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose_1.default.connect(`${dbUrl}`);
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
        app_1.default.listen(env_1.port, () => {
            console.log(`server running at ${env_1.port} port`);
        });
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
exports.connectDB = connectDB;
