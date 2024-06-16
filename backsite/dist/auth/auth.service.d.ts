import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(user: any): Promise<{
        access_token: string;
    }>;
    validateUser(email: string, senha: string): Promise<any>;
}
