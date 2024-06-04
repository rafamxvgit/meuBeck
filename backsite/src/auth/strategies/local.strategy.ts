import { Passport } from "passport";
import { Strategy } from "passport-jwt";


export class LocalStrategy extends Passport(Strategy) {
    constructor(super({usernameField: 'email'})) {}

    async validate(email: string, senha: string) {
        const
    }
}