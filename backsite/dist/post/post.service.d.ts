import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    create(createPostDto: CreatePostDto): string;
    findAll(): string;
    findOneAlvo(id: number): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOneAutor(id: number): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
