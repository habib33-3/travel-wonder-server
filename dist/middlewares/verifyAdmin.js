"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyAdmin = (req, res, next) => {
    var _a;
    const role = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
    if (role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};
exports.default = verifyAdmin;
