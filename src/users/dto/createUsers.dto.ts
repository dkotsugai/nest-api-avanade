import {
    IsNotEmpty,
    IsString,
    IsEmail,
    MinLength,
    MaxLength
} from "class-validator";

export class CreateUsersDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}