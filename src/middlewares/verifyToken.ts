import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { accessToken } from "../env";

interface ExtendedRequest extends Request {
    user?: jwt.JwtPayload;
}

const verifyJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token || null;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    try {
        const decoded = jwt.verify(token, accessToken) as jwt.JwtPayload;
        req.user = decoded;
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Token expired" });
        } else if (err instanceof jwt.JsonWebTokenError) {
            return res
                .status(401)
                .json({ message: "Unauthorized: Invalid token" });
        } else {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

export default verifyJWT;
