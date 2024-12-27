import { BadRequestException, Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

import { SaveUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(user: SaveUserDto) {
        const { email, firebaseId, name, photo } = user;

        const existingUser = await this.findUserByEmail(email);

        if (existingUser) {
            throw new BadRequestException("user with email already exists");
        }

        const newUser = await this.prisma.user.create({
            data: { email, firebaseId, name, photo },
        });

        return newUser;
    }

    async findUserByEmail(email: string) {
        return await this.prisma.user.findUnique({ where: { email } });
    }
}
