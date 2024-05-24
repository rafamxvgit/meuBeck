import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): string;
    findAll(): string;
    findOneAlvo(id: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOneAutor(id: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: string): string;
}
