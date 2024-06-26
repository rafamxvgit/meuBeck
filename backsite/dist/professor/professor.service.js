"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ProfessorService = class ProfessorService {
    async create(createProfessorDto) {
        return await prisma.professor.create({ data: createProfessorDto });
    }
    async findAll() {
        return await prisma.professor.findMany();
    }
    async findOne(id) {
        return await prisma.professor.findUnique({ where: { id: id } });
    }
    update(id, updateProfessorDto) {
        return `This action updates a #${id} professor`;
    }
    remove(id) {
        return `This action removes a #${id} professor`;
    }
};
exports.ProfessorService = ProfessorService;
exports.ProfessorService = ProfessorService = __decorate([
    (0, common_1.Injectable)()
], ProfessorService);
//# sourceMappingURL=professor.service.js.map