import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { accessToken } from "../env";

export interface ExtendedRequest extends Request {
    user?: {
        email?: string;
        role?: string;
    };
}

const verifyJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token || null;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    try {
        const decoded: JwtPayload = jwt.verify(
            token,
            accessToken
        ) as JwtPayload;

        const tokenEmail = decoded.email;
        const paramEmail = req.params?.email;

        if (paramEmail && tokenEmail !== paramEmail) {
            return res.status(401).json({
                message:
                    "Unauthorized: Token email does not match request email",
            });
        }

        req.user = {
            email: decoded.email,
            role: decoded.role,
        };
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
