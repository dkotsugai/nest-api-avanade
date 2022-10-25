import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

//https://localhost:3000/auth
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    //https://localhost:3000/auth/login
    @Post('login')
    async validaLogin(@Body() req) {
        const { login, password } = req;

        if (!login) {
            // return{error: true, msg: 'Login não informado'};

            throw new HttpException('Login não encontro',
                HttpStatus.FORBIDDEN);
        }

        console.log('No controller - login', login);
        console.log('No controller - password', password);
        return this.authService.validaLogin(login, password);
    }


}
