import { AuthService } from "../auth.service";
declare const LocalStrategy_base: any;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, senha: string): Promise<any>;
}
export {};
