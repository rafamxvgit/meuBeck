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
        return `This action returns all post`;
    }
    async findAllAlvo(id) {
        const posts = await prisma.post.findMany({ where: { idAlvo: id } });
        let realPosts = [];
        const alvo = await prisma.professor.findUnique({ where: { id: id } });
        for (let i = 0; i < posts.length; i++) {
            const autor = await prisma.user.findUnique({ where: { id: posts[i].idAutor } });
            const coments = await prisma.comentario.findMany({ where: { idAlvo: posts[i].id } });
            let realComents = [];
            for (let ii = 0; ii < coments.length; ii++) {
                const autorComent = await prisma.user.findUnique({ where: { id: coments[ii].idAutor } });
                let realComent = coments[ii];
                realComent.nomeAutor = autorComent.nome;
                realComent.foto = autorComent.foto;
                realComents.push(realComent);
            }
            let realpost = posts[i];
            realpost.nomeAutor = autor.nome;
            realpost.foto = autor.foto;
            realpost.nomeAlvo = alvo.nome;
            realpost.comentarios = realComents;
            realPosts.push(realpost);
        }
        return (realPosts);
    }
    async findAllAutor(id) {
        let posts = await prisma.post.findMany({ where: { idAutor: id } });
        let realPosts = [];
        const autor = await prisma.user.findUnique({ where: { id: id } });
        for (let i = 0; i < posts.length; i++) {
            const alvo = await prisma.professor.findUnique({ where: { id: posts[i].idAlvo } });
            const coments = await prisma.comentario.findMany({ where: { idAlvo: posts[i].id } });
            let realComents = [];
            for (let ii = 0; ii < coments.length; ii++) {
                const autorComent = await prisma.user.findUnique({ where: { id: coments[ii].idAutor } });
                let realComent = coments[ii];
                realComent.nomeAutor = autorComent.nome;
                realComent.foto = autorComent.foto;
                realComents.push(realComent);
            }
            let realpost = posts[i];
            realpost.nomeAutor = autor.nome;
            realpost.foto = autor.foto;
            realpost.nomeAlvo = alvo.nome;
            realpost.comentarios = realComents;
            realPosts.push(realpost);
        }
        return (realPosts);
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
    async remove(id) {
        await prisma.post.delete({ where: { id: id } });
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
//# sourceMappingURL=post.service.js.map