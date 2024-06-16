import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export interface exportComment {
  id: number
  idAutor: number
  nomeAutor: string
  idAlvo: number
  nomeAlvo: string
  conteudo: string
  data: string
  foto: string
  conteudoAlvo: string
  fotoAlvo: string
  idUserAlvo: number
}

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
    let expComments: exportComment[] = [];
    const comments = await prisma.comentario.findMany({where: {idAutor: userID}})
    for (let i = 0; i<comments.length; i++){
      const user = await prisma.user.findUnique({where: {id: +userID}})
      const aval = await prisma.post.findUnique({where: {id: comments[i].idAlvo}})
      const userAlvo = await prisma.user.findUnique({where: {id: aval.idAutor}})
      const fullCom: exportComment = {
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
      }
      expComments.push(fullCom)
    }
    return expComments
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
