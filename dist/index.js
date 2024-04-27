"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_config_1 = require("./config/db.config");
(0, db_config_1.connectDB)().catch((err) => {
    console.error("Error starting express server:", err);
    process.exit(1);
});
