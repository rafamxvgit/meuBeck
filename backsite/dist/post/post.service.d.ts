import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    create(createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    findOneAlvo(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }[]>;
    findOneAutor(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }[]>;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
