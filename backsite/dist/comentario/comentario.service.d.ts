import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
export interface exportComment {
    id: number;
    idAutor: number;
    nomeAutor: string;
    idAlvo: number;
    nomeAlvo: string;
    conteudo: string;
    data: string;
    foto: string;
    conteudoAlvo: string;
    fotoAlvo: string;
    idUserAlvo: number;
}
export declare class ComentarioService {
    create(createComentarioDto: CreateComentarioDto): Promise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    findByUser(userID: number): Promise<exportComment[]>;
    findByPost(postID: number): Promise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }[]>;
    update(id: number, updateComentarioDto: UpdateComentarioDto): string;
    remove(id: number): Promise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }>;
}
