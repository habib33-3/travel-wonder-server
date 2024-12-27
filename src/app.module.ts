import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CustomLoggerService } from "./custom-logger/custom-logger.service";
import { AllExceptionsFilter } from "./filters/all-exceptions.filter";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [AppController],
    providers: [
        AppService,
        CustomLoggerService,
        {
            provide: "APP_FILTER",
            useClass: AllExceptionsFilter,
        },
    ],
})
export class AppModule {}
