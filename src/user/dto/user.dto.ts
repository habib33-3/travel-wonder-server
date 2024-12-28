/* eslint-disable no-magic-numbers */
import { Guide, User } from "@prisma/client";
import {
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    MaxLength,
    MinLength,
} from "class-validator";

export class BaseUserDto implements Partial<User> {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(3)
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    firebaseId: string;

    @IsUrl()
    @IsOptional()
    photo?: string;
}

export class SaveUserDto extends BaseUserDto {}

export class CreateGuideDto extends SaveUserDto implements Partial<Guide> {
    @IsString()
    @IsOptional()
    bio?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    language?: string[];

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    skills?: string[];
}
