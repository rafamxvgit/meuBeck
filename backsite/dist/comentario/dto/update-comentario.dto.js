"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComentarioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_comentario_dto_1 = require("./create-comentario.dto");
class UpdateComentarioDto extends (0, mapped_types_1.PartialType)(create_comentario_dto_1.CreateComentarioDto) {
}
exports.UpdateComentarioDto = UpdateComentarioDto;
//# sourceMappingURL=update-comentario.dto.js.map