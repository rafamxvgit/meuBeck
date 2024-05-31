import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class ComentarioService {
  async create(createComentarioDto: CreateComentarioDto) {
    return await prisma.comentario.create({data: createComentarioDto});
  }

  findAll() {
    return `This action returns all comentario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comentario`;
  }

  async findByUser(userID: number) {
    return await prisma.comentario.findMany({where: {idAutor: userID}})
  }
  async findByPost(postID: number) {
    return await prisma.comentario.findMany({where: {idAlvo: postID}})
  }
  update(id: number, updateComentarioDto: UpdateComentarioDto) {
    return `This action updates a #${id} comentario`;
  }

  async remove(id: number) {
    return await prisma.comentario.delete({where: {id: id}})
  }
}
