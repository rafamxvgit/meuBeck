import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserService {
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    findAll(): string;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    updateUserPassword(id: number, novaSenha: {
        senha: string;
    }): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    checkLog(loginUserDto: LoginUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
}
