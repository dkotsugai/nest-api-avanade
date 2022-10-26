import { IsNotEmpty, IsNumberString, IsString, Max } from "class-validator";

export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumberString()
    price: number;

    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsNumberString()
    @Max(99)       
    categoryId: number;
}