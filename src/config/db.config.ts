import mongoose from "mongoose";
import app from "../app";
import { dbPass, dbUser, port } from "../env";

const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.cdjrxf4.mongodb.net/travel-wonder?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${dbUrl}`);
        console.log(
            `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
        );
        app.listen(port, () => {
            console.log(`server running at ${port} port`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
