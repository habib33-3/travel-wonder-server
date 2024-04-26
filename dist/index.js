"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_config_1 = require("./config/db.config");
// const envVariables = ["DB_USER", "DEV_CLIENT", "PROD_CLIENT"];
// envVariables.forEach((envVar) => {
//     if (!process.env[envVar]) {
//         console.error(
//             `Error: Environment variable ${envVar} is not set. Please refer to the Readme file for details. Exiting...`
//         );
//         process.exit(1);
//     }
// });
(0, db_config_1.connectDB)().catch((err) => {
    console.error("Error starting express server:", err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map