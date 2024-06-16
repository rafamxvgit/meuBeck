import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { access } from 'fs';
//no nosso projeto não temos prisma service nem user entity
const prisma = new PrismaClient()
@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
    ) {}
    
    async login(user: any) {//dentro do login eu boto o payload, sem informações confidenciais
        const payLoad = {
            sub: user.id,
            email: user.email,
            username: user.username,
        };

        const token =  await this.jwtService.sign(payLoad);//o metodo vai gerar o token

        return { access_token: token };
    }

    async validateUser(email: string, senha: string) {//password
        //const user = await this.prismaService.user.findUniqueOrThrow(...)
        let user : any;

        try {
            user = await prisma.user.findUniqueOrThrow({
                where: {
                    email: email,
                },
            })
        } catch (err) {
            return null;
        }

        console.log(user)

        const isPassword = await compareSync(senha, user.senha);//password

        if (isPassword) return user;
        return null;
    }
}
