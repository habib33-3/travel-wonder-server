import { NextFunction, Request, RequestHandler, Response } from "express";
import { AnyZodObject } from "zod";

const validateInput =
    (schema: AnyZodObject): RequestHandler =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });

            next();
        } catch (error: any) {
            return res.status(400).send(`Validation Error: ${error.message}`);
        }
    };

export default validateInput;
