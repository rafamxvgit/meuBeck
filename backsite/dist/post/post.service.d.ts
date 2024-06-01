import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export interface aval {
    id: number;
    idAutor: number;
    idAlvo: number;
    data: string;
    conteudo: string;
    nomeAutor?: string;
    foto?: string;
    nomeAlvo?: string;
    comentarios?: coment[];
}
interface coment {
    id: number;
    idAutor: number;
    nomeAutor?: string;
    foto?: string;
    idAlvo: number;
    data: string;
    conteudo: string;
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
    findAllAlvo(id: number): Promise<aval[]>;
    findAllAutor(id: number): Promise<aval[]>;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): Promise<void>;
}
export {};
