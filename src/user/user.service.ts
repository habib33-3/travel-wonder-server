import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
} from "@nestjs/common";

import { CustomLoggerService } from "src/custom-logger/custom-logger.service";
import { PrismaService } from "src/prisma/prisma.service";

import { CreateGuideDto, SaveUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly log: CustomLoggerService,
    ) {}

    // Helper function for user existence validation
    private async ensureUserDoesNotExist(email: string): Promise<void> {
        try {
            const existingUser = await this.prisma.user.findUnique({
                where: { email },
            });
            if (existingUser) {
                throw new BadRequestException(
                    `User with email ${email} already exists`,
                );
            }
        } catch (error) {
            this.log.error(error.message);
            throw new InternalServerErrorException(
                "Error checking user existence",
            );
        }
    }

    // Create a new user
    async createUser(user: SaveUserDto) {
        try {
            await this.ensureUserDoesNotExist(user.email);

            return await this.prisma.user.create({
                data: {
                    email: user.email,
                    firebaseId: user.firebaseId,
                    name: user.name,
                    photo: user.photo,
                },
            });
        } catch (error) {
            this.log.error(error.message);
            if (error instanceof BadRequestException) {
                throw error; // Rethrow BadRequestException if user already exists
            }
            throw new InternalServerErrorException("Error creating user");
        }
    }

    // Create a guide with user information
    async createGuide(guideInfo: CreateGuideDto) {
        try {
            await this.ensureUserDoesNotExist(guideInfo.email);

            return await this.prisma.$transaction(async (tx) => {
                const user = await tx.user.create({
                    data: {
                        email: guideInfo.email,
                        firebaseId: guideInfo.firebaseId,
                        name: guideInfo.name,
                    },
                });

                return await tx.guide.create({
                    data: {
                        address: guideInfo.address,
                        phone: guideInfo.phone,
                        bio: guideInfo.bio,
                        language: guideInfo.language,
                        skills: guideInfo.skills,
                        userId: user.userId,
                    },
                });
            });
        } catch (error) {
            this.log.error(error.message);
            if (error instanceof BadRequestException) {
                throw error; // Rethrow BadRequestException if user already exists
            }
            throw new InternalServerErrorException("Error creating guide");
        }
    }

    // Find a user by email
    async findUserByEmail(email: string) {
        try {
            return await this.prisma.user.findUnique({ where: { email } });
        } catch (error) {
            this.log.error(error.message);
            throw new InternalServerErrorException("Error finding user");
        }
    }
}
