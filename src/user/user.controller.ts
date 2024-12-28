import { Body, Controller, Param, Post } from "@nestjs/common";

import { CreateGuideDto, SaveUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("/create-user")
    async createUser(@Body() user: SaveUserDto) {
        return await this.userService.createUser(user);
    }

    @Post("/create-guide")
    async createGuide(@Body() guideInfo: CreateGuideDto) {
        return await this.userService.createGuide(guideInfo);
    }

    @Post("/create-admin/:userId")
    async createAdmin(@Param("userId") userId: string) {
        return await this.userService.createAdmin(userId);
    }
}
