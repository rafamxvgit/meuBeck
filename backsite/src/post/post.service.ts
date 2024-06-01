import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaClient } from '@prisma/client';

export interface aval {
  id: number
  idAutor: number
  idAlvo: number
  data: string
  conteudo: string
  nomeAutor?: string
  foto?: string
  nomeAlvo?: string
  comentarios?: coment[]
}

interface coment {
    id: number
    idAutor: number
    nomeAutor?: string
    foto?: string
    idAlvo: number
    data: string
    conteudo: string
  }

const prisma = new PrismaClient()
@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return prisma.post.create({ data: createPostDto });
  }

  findAll() {
    return `This action returns all post`;
  }

  async findAllAlvo(id: number) {
    const posts = await prisma.post.findMany({ where: { idAlvo: id } })
    let realPosts: aval[] = [];
    const alvo = await prisma.professor.findUnique({ where: { id: id } });
    for (let i = 0; i < posts.length; i++) {
      const autor = await prisma.user.findUnique({ where: { id: posts[i].idAutor } });
      const coments = await prisma.comentario.findMany({ where: { idAlvo: posts[i].id } })
      let realComents: coment[] = []; 
      for (let ii = 0; ii < coments.length; ii++) {
        const autorComent = await prisma.user.findUnique({where: {id: coments[ii].idAutor}})
        let realComent: coment = coments[i]
        realComent.nomeAutor = autorComent.nome
        realComent.foto = autorComent.foto
        realComents.push(realComent)
      }
      let realpost: aval = posts[i];
      realpost.nomeAutor = autor.nome;
      realpost.foto = autor.foto
      realpost.nomeAlvo = alvo.nome;
      realpost.comentarios = realComents
      realPosts.push(realpost);
    }
    return (realPosts);
  }

  async findAllAutor(id: number) {
    let posts = await prisma.post.findMany({ where: { idAutor: id } });
    let realPosts: aval[] = [];
    const autor = await prisma.user.findUnique({ where: { id: id } });
    for (let i = 0; i < posts.length; i++) {
      const alvo = await prisma.professor.findUnique({ where: { id: posts[i].idAlvo } });
      const coments = await prisma.comentario.findMany({ where: { idAlvo: posts[i].id } })
      let realComents: coment[] = []; 
      for (let ii = 0; ii < coments.length; ii++) {
        const autorComent = await prisma.user.findUnique({where: {id: coments[ii].idAutor}})
        let realComent: coment = coments[ii]
        realComent.nomeAutor = autorComent.nome
        realComent.foto = autorComent.foto
        realComents.push(realComent)
      }
      let realpost: aval = posts[i];
      realpost.nomeAutor = autor.nome;
      realpost.foto = autor.foto;
      realpost.nomeAlvo = alvo.nome;
      realpost.comentarios = realComents
      realPosts.push(realpost);
    }
    return (realPosts);

  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    await prisma.post.delete({ where: { id: id } });
  }
}
