import "dotenv/config";

export const {
    PORT: port = 5000,
    DB_USER: dbUser = "",
    DB_PASS: dbPass = "",
    ACCESS_TOKEN: accessToken = "",
    DEV_CLIENT: devClient = "",
    PROD_CLIENT: prodClient = "",
} = process.env;
