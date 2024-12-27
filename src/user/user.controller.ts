import { Body, Controller, Post } from "@nestjs/common";

import { SaveUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() user: SaveUserDto) {
        return await this.userService.createUser(user);
    }
}
