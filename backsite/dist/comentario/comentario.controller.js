"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioController = void 0;
const common_1 = require("@nestjs/common");
const comentario_service_1 = require("./comentario.service");
const create_comentario_dto_1 = require("./dto/create-comentario.dto");
const update_comentario_dto_1 = require("./dto/update-comentario.dto");
let ComentarioController = class ComentarioController {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    create(createComentarioDto) {
        return this.comentarioService.create(createComentarioDto);
    }
    findAll() {
        return this.comentarioService.findAll();
    }
    findByPost(id) {
        return this.comentarioService.findByPost(+id);
    }
    findByUser(id) {
        return this.comentarioService.findByUser(+id);
    }
    update(id, updateComentarioDto) {
        return this.comentarioService.update(+id, updateComentarioDto);
    }
    remove(id) {
        return this.comentarioService.remove(+id);
    }
};
exports.ComentarioController = ComentarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comentario_dto_1.CreateComentarioDto]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('post:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findByPost", null);
__decorate([
    (0, common_1.Get)('user:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comentario_dto_1.UpdateComentarioDto]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "remove", null);
exports.ComentarioController = ComentarioController = __decorate([
    (0, common_1.Controller)('comentario'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
//# sourceMappingURL=comentario.controller.js.map