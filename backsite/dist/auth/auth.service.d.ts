import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(user: any): Promise<{
        access_token: any;
    }>;
    validateUser(email: string, senha: string): Promise<any>;
}
