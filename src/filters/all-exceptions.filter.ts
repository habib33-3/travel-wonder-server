import {
    ArgumentsHost,
    Catch,
    HttpException,
    HttpStatus,
} from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

import { CustomLoggerService } from "src/custom-logger/custom-logger.service";

import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { Request, Response } from "express";

type MyResponseObj = {
    statusCode: number;
    timestamp: string;
    path: string;
    response: string | object;
    errorId?: string;
};

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    private readonly logger = new CustomLoggerService();

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const myResponseObj: MyResponseObj = {
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: request.url,
            response: "",
        };

        // Handle known HTTP exceptions
        if (exception instanceof HttpException) {
            myResponseObj.statusCode = exception.getStatus();
            myResponseObj.response = exception.getResponse();
        }
        // Handle Prisma errors
        else if (exception instanceof PrismaClientValidationError) {
            myResponseObj.statusCode = 422;
            myResponseObj.response = exception.message.replaceAll(/\n/g, " ");
        } else if (exception instanceof PrismaClientKnownRequestError) {
            myResponseObj.statusCode = 400;
            myResponseObj.response = exception.message;
        }
        // Handle general errors
        else {
            myResponseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

            // Adjust error response based on the environment
            if (process.env.NODE_ENV === "production") {
                myResponseObj.response = "Internal Server Error";
            } else {
                myResponseObj.response = exception as string;
            }
        }

        // Optional: Add unique error ID for tracking
        if (myResponseObj.statusCode >= 500) {
            myResponseObj.errorId = this.generateErrorId();
        }

        response.status(myResponseObj.statusCode).json(myResponseObj);

        // Log error using MyLoggerService (Ensure response is a string)
        const responseString = this.formatExceptionForLogging(
            myResponseObj.response,
        );

        this.logger.error(responseString, AllExceptionsFilter.name);

        super.catch(exception, host);
    }

    // Optional: Generate a unique error ID for tracing errors
    private generateErrorId(): string {
        return "error_" + Math.random().toString(36).substring(2, 15);
    }

    // Format exception for logging (to avoid '[object Object]' stringification)
    private formatExceptionForLogging(exception: string | object): string {
        if (exception instanceof Error) {
            return `${exception.name}: ${exception.message}\n${exception.stack}`;
        }
        if (typeof exception === "object") {
            return JSON.stringify(exception, null, 2); // Pretty-print object errors
        }
        return exception.toString();
    }
}
