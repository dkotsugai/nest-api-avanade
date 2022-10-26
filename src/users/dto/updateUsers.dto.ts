import { PartialType } from "@nestjs/mapped-types";
import { CreateUsersDTO } from "./createUsers.dto";

export class UpdateUsersDTO extends PartialType(CreateUsersDTO) {}

// import { IsEmail, IsNotEmpty,
//      IsString,
//      MaxLength,
//      MinLength
//      } from "class-validator";

// export class UpdateUsersDTO {
   
//     @IsString()
//     name?: string;

//     @IsEmail()
//     email?: string;

//     @MinLength(6)
//     @MaxLength(20)
//     password?: string;

// }