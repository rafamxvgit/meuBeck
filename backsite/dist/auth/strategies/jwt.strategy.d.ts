import { AuthService } from "../auth.service";
declare const JWTStrategy_base: any;
export declare class JWTStrategy extends JWTStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<{
        id: any;
        email: any;
        username: any;
    }>;
}
export {};
