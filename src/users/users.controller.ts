import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param
} from '@nestjs/common';
import { CreateUsersDTO } from './dto/createUsers.dto';
import { UpdateUsersDTO } from './dto/updateUsers.dto';
import { UsersService } from './users.service';
import { users } from '@prisma/client';

@Controller('users')
export class UsersController {
    //injeção de dependência
    constructor(private readonly usersService: UsersService) { }

    //criar
    @Post()
    async createUser(@Body() req:CreateUsersDTO
    ): Promise<users>{
        return this.usersService.createUser(req);
    }
    //listar todos localhots:3000/users
    @Get()
    async findAll() {
        return this.usersService.findAll();
    }
    //listar um localhots:3000/users/1
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }
    //atualizar localhots:3000/users/1
    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: UpdateUsersDTO) {
        return this.usersService.update(id, req);
    }
    //deletar localhots:3000/users/1
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}