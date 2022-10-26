import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    async createUser(req): Promise<string> {
        
        return 'Usuário criado com sucesso';
    }

    async findAll() {
        return 'Lista de usuários';
    }

    async findOne(id: string) {
        return `Usuário ${id}`;
    }

    async update(id: string, req) {
        return `Atualizando usuário ${id}`;
    }
}
