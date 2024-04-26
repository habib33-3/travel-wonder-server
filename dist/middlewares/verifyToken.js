"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../env");
const verifyJWT = (req, res, next) => {
    var _a;
    const token = req.cookies.token || null;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.accessToken);
        const tokenEmail = decoded.email;
        const paramEmail = (_a = req.params) === null || _a === void 0 ? void 0 : _a.email;
        if (paramEmail && tokenEmail !== paramEmail) {
            return res.status(401).json({
                message: "Unauthorized: Token email does not match request email",
            });
        }
        req.user = {
            email: decoded.email,
            role: decoded.role,
        };
        next();
    }
    catch (err) {
        if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Token expired" });
        }
        else if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Invalid token" });
        }
        else {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
};
exports.default = verifyJWT;
//# sourceMappingURL=verifyToken.js.map