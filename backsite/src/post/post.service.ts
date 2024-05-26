import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaClient } from '@prisma/client';

export interface comentario {
  id: number
  idAutor: number
  idAlvo: number
  data: string
  conteudo: string
  nomeAutor?: string
  nomeAlvo?: string
}

const prisma = new PrismaClient()
@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return prisma.post.create({data: createPostDto});
  }

  findAll() {
    return `This action returns all post`;
  }

  async findAllAlvo(id: number) {
    let posts = await prisma.post.findMany({where: {idAlvo: id}})
    let realPosts: comentario[] = [];
    const alvo = await prisma.professor.findUnique({where: {id: id}});
    for (let i = 0; i < posts.length; i++){
      const autor = await prisma.professor.findUnique({where: {id: posts[i].idAutor}});
      let realpost: comentario = posts[i];
      realpost.nomeAutor = autor.nome;
      realpost.nomeAlvo = alvo.nome;
      realPosts.push(realpost);
    }
    return(realPosts);
  }
  
  async findAllAutor(id: number) {
    let posts = await prisma.post.findMany({where: {idAutor: id}}); 
    let realPosts: comentario[] = [];
    const autor = await prisma.user.findUnique({where: {id: id}});
    for (let i = 0; i < posts.length; i++){
      const alvo = await prisma.professor.findUnique({where: {id: posts[i].idAlvo}});
      let realpost: comentario = posts[i];
      realpost.nomeAutor = autor.nome;
      realpost.nomeAlvo = alvo.nome;
      realPosts.push(realpost);
    }
    return(realPosts);

  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
