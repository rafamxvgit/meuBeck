import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
export declare class ProfessorService {
    create(createProfessorDto: CreateProfessorDto): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    update(id: number, updateProfessorDto: UpdateProfessorDto): string;
    remove(id: number): string;
}
