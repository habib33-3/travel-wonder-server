"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodClient = exports.devClient = exports.accessToken = exports.dbPass = exports.dbUser = exports.port = void 0;
require("dotenv/config");
_a = process.env, _b = _a.PORT, exports.port = _b === void 0 ? 5000 : _b, _c = _a.DB_USER, exports.dbUser = _c === void 0 ? "" : _c, _d = _a.DB_PASS, exports.dbPass = _d === void 0 ? "" : _d, _e = _a.ACCESS_TOKEN, exports.accessToken = _e === void 0 ? "" : _e, _f = _a.DEV_CLIENT, exports.devClient = _f === void 0 ? "" : _f, _g = _a.PROD_CLIENT, exports.prodClient = _g === void 0 ? "" : _g;
//# sourceMappingURL=env.js.map