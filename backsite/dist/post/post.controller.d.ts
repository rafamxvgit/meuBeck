import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: number;
        idAutor: number;
        idAlvo: number;
        data: string;
        conteudo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): string;
    findManyAlvo(id: string): Promise<import("./post.service").aval[]>;
    findManyAutor(id: string): Promise<import("./post.service").aval[]>;
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: string): Promise<void>;
}
