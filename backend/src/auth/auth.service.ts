import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService} from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt'; // Verificar qual é a criptografia de senha

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){ }

    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.prisma.user.findUnique([{where: { email },}]);

    // Verifica se o email está incorreto
    if(!user){
        throw new UnauthorizedException("Email ou senha incorretos");
    }

    // Verifica se a senha está incorreta 
    const isPasswordValid = password === user.senha;

    if(!this.isPasswordValid){
        throw new UnauthorizedException("Email ou senha incorretos");
    }

    return $user;  
    } 
}
