import "dotenv/config";
import { connectDB } from "./config/db.config";

connectDB().catch((err) => {
    console.error("Error starting express server:", err);
    process.exit(1);
});
