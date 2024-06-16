"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ComentarioService = class ComentarioService {
    async create(createComentarioDto) {
        return await prisma.comentario.create({ data: createComentarioDto });
    }
    findAll() {
        return `This action returns all comentario`;
    }
    findOne(id) {
        return `This action returns a #${id} comentario`;
    }
    async findByUser(userID) {
        let expComments = [];
        const comments = await prisma.comentario.findMany({ where: { idAutor: userID } });
        for (let i = 0; i < comments.length; i++) {
            const user = await prisma.user.findUnique({ where: { id: +userID } });
            const aval = await prisma.post.findUnique({ where: { id: comments[i].idAlvo } });
            const userAlvo = await prisma.user.findUnique({ where: { id: aval.idAutor } });
            const fullCom = {
                conteudo: comments[i].conteudo,
                data: comments[i].data,
                id: comments[i].id,
                idAutor: +userID,
                idAlvo: comments[i].idAlvo,
                nomeAutor: user.nome,
                nomeAlvo: userAlvo.nome,
                fotoAlvo: userAlvo.foto,
                conteudoAlvo: aval.conteudo,
                foto: user.foto,
                idUserAlvo: user.id
            };
            expComments.push(fullCom);
        }
        return expComments;
    }
    async findByPost(postID) {
        return await prisma.comentario.findMany({ where: { idAlvo: postID } });
    }
    update(id, updateComentarioDto) {
        return `This action updates a #${id} comentario`;
    }
    async remove(id) {
        return await prisma.comentario.delete({ where: { id: id } });
    }
};
exports.ComentarioService = ComentarioService;
exports.ComentarioService = ComentarioService = __decorate([
    (0, common_1.Injectable)()
], ComentarioService);
//# sourceMappingURL=comentario.service.js.map