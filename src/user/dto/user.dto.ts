import { User } from "@prisma/client";
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsUrl,
    MaxLength,
    MinLength,
} from "class-validator";

export class SaveUserDto implements Partial<User> {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    firebaseId: string;

    @IsNotEmpty()
    @IsUrl()
    photo?: string;
}
