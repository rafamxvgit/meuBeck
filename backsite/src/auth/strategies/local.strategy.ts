import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({usernameField: 'email'});
    }

    async validate(email: string, senha: string) {//password ou senha
        const user = await this.authService.validateUser(email, senha)//password ou senha

        if (!user) throw new UnauthorizedException('Tem algo errado')

        return user;
    }
}