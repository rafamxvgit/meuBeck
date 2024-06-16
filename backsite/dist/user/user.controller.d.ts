import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    checkLog(loginDto: LoginUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    updateSenha(id: string, novaSenha: {
        senha: string;
    }): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    updateImagem(id: string, novaImagem: {
        imagem: string;
    }): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    updateNome(id: string, novoNome: {
        nome: string;
    }): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        bio: string;
        foto: string;
    }>;
}
