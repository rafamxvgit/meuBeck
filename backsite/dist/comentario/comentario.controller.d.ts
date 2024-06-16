import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    create(createComentarioDto: CreateComentarioDto): Promise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }>;
    findAll(): string;
    findByPost(id: string): Promise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }[]>;
    findByUser(id: string): Promise<import("./comentario.service").exportComment[]>;
    update(id: string, updateComentarioDto: UpdateComentarioDto): string;
    remove(id: string): Promise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }>;
}
