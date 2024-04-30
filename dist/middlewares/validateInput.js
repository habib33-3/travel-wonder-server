"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateInput = (schema) => async (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        next();
    }
    catch (error) {
        return res.status(400).send(`Validation Error: ${error.message}`);
    }
};
exports.default = validateInput;
