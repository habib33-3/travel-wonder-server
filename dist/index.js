"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_config_1 = require("./config/db.config");
(0, db_config_1.connectDB)().catch((error) => {
    console.error("Error starting express server:", error.message);
    process.exit(1);
});
