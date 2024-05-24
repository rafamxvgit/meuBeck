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
        return 'This action adds a new post';
    }
    findAll() {
        return `This action returns all post`;
    }
    findOneAlvo(id) {
        return prisma.post.findFirst({ where: { idAlvo: id } });
    }
    findOneAutor(id) {
        return prisma.post.findFirst({ where: { idAutor: id } });
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
//# sourceMappingURL=post.service.js.map