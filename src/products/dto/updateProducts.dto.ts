import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDTO } from "./createProducts.dto";

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}