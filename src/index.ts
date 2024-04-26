import "dotenv/config";
import { connectDB } from "./config/db.config";

// const envVariables = ["DB_USER", "DEV_CLIENT", "PROD_CLIENT"];

// envVariables.forEach((envVar) => {
//     if (!process.env[envVar]) {
//         console.error(
//             `Error: Environment variable ${envVar} is not set. Please refer to the Readme file for details. Exiting...`
//         );
//         process.exit(1);
//     }
// });

connectDB().catch((err) => {
    console.error("Error starting express server:", err);
    process.exit(1);
});
