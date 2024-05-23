import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
        foto: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
}
