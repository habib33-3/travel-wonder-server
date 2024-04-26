"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
const env_1 = require("../env");
const dbUrl = `mongodb+srv://${env_1.dbUser}:${env_1.dbPass}@cluster0.cdjrxf4.mongodb.net/travel-wonder?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionInstance = yield mongoose_1.default.connect(`${dbUrl}`);
    console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    app_1.default.listen(env_1.port, () => {
        console.log(`server running at ${env_1.port} port`);
    });
});
exports.connectDB = connectDB;
//# sourceMappingURL=db.config.js.map