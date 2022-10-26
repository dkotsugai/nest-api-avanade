import { Controller, Post, Get, Body, Param, Delete, Patch} from '@nestjs/common';
import { CreateProductDTO } from './dto/createProducts.dto';
import { UpdateProductDTO } from './dto/updateProducts.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async createProduct(@Body() req: CreateProductDTO): Promise<string> {
        return this.productsService.createProduct(req);
    }

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: UpdateProductDTO) {
        return this.productsService.update(id, req);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Deletando produto ${id}`;
    }
}
