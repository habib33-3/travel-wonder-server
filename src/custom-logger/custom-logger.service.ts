import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class CustomLoggerService {
    private readonly logger = new Logger(CustomLoggerService.name);

    log(message: string) {
        this.logger.log(message);
    }

    error(message: string, context?: string, stack?: string) {
        // Fallbacks for undefined values
        const safeContext = context ?? "Unknown Context";
        const safeStack = stack ?? "No stack trace available";

        if (process.env.NODE_ENV === "production") {
            // Log error without stack trace in production
            this.logger.error(message, safeContext);
        } else {
            // Log error with stack trace in development
            this.logger.error(message, safeStack, safeContext);
        }
    }

    warn(message: string) {
        this.logger.warn(message);
    }

    debug(message: string) {
        this.logger.debug(message);
    }

    verbose(message: string) {
        this.logger.verbose(message);
    }
}
