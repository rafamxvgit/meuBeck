import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
export declare class ProfessorController {
    private readonly professorService;
    constructor(professorService: ProfessorService);
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
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        email: string;
        senha: string;
        curso: string;
        departamento: string;
        foto: string;
    }>;
    update(id: string, updateProfessorDto: UpdateProfessorDto): string;
    remove(id: string): string;
}
