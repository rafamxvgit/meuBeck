import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export interface Aval {
    id: number;
    idAutor: number;
    idAlvo: number;
    data: string;
    conteudo: string;
    nomeAutor?: string;
    foto?: string;
    nomeAlvo?: string;
    comentarios?: Coment[];
}
interface Coment {
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
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }[]>;
    private getComentarios;
    private formatPost;
    private getFormattedPosts;
    findAllAlvo(id: number): Promise<Aval[]>;
    findAllAutor(id: number): Promise<Aval[]>;
    update(id: number, updatePostDto: UpdatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<void>;
}
export {};
