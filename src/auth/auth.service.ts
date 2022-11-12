import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async validaLogin(login: string, password: string) {
        console.log('No service - login', login);
        console.log('No service - password', password);
        
        return {login, password, msg:'Usuário autenticado com sucesso'};
    }
}
