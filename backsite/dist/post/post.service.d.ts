import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export interface comentario {
    id: number;
    idAutor: number;
    idAlvo: number;
    data: string;
    conteudo: string;
    nomeAutor?: string;
    nomeAlvo?: string;
}
export declare class PostService {
    create(createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    findAllAlvo(id: number): Promise<comentario[]>;
    findAllAutor(id: number): Promise<comentario[]>;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
