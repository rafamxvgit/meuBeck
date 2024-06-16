"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let PostService = class PostService {
    create(createPostDto) {
        return prisma.post.create({ data: createPostDto });
    }
    findAll() {
        return prisma.post.findMany();
    }
    async getComentarios(postId) {
        const comentarios = await prisma.comentario.findMany({ where: { idAlvo: postId } });
        const comentariosCompletos = await Promise.all(comentarios.map(async (coment) => {
            const autor = await prisma.user.findUnique({ where: { id: coment.idAutor } });
            return {
                ...coment,
                nomeAutor: autor.nome,
                foto: autor.foto,
            };
        }));
        return comentariosCompletos;
    }
    async formatPost(post, autor, alvo) {
        const comentarios = await this.getComentarios(post.id);
        return {
            ...post,
            nomeAutor: autor.nome,
            foto: autor.foto,
            nomeAlvo: alvo.nome,
            comentarios,
        };
    }
    async getFormattedPosts(posts, getUser, getTarget) {
        return Promise.all(posts.map(async (post) => {
            const autor = await getUser(post.idAutor);
            const alvo = await getTarget(post.idAlvo);
            return this.formatPost(post, autor, alvo);
        }));
    }
    async findAllAlvo(id) {
        const posts = await prisma.post.findMany({ where: { idAlvo: id } });
        const alvo = await prisma.professor.findUnique({ where: { id } });
        return this.getFormattedPosts(posts, (id) => prisma.user.findUnique({ where: { id } }), () => Promise.resolve(alvo));
    }
    async findAllAutor(id) {
        const posts = await prisma.post.findMany({ where: { idAutor: id } });
        const autor = await prisma.user.findUnique({ where: { id } });
        return this.getFormattedPosts(posts, () => Promise.resolve(autor), (id) => prisma.professor.findUnique({ where: { id } }));
    }
    update(id, updatePostDto) {
        return prisma.post.update({ where: { id }, data: updatePostDto });
    }
    async remove(id) {
        await prisma.post.delete({ where: { id } });
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
//# sourceMappingURL=post.service.js.map