import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaClient } from '@prisma/client';

export interface Aval {
  id: number;
  idAutor: number;
  idAlvo: number;
  data: string;
  conteudo: string;
  nomeAutor?: string;
  foto?: string;
  nomeAlvo?: string;
  comentarios?: Coment[];
}

interface Coment {
  id: number;
  idAutor: number;
  nomeAutor?: string;
  foto?: string;
  idAlvo: number;
  data: string;
  conteudo: string;
}

const prisma = new PrismaClient();

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return prisma.post.create({ data: createPostDto });
  }

  findAll() {
    return prisma.post.findMany();
  }

  private async getComentarios(postId: number): Promise<Coment[]> {
    const comentarios = await prisma.comentario.findMany({ where: { idAlvo: postId } });
    const comentariosCompletos = await Promise.all(
      comentarios.map(async (coment) => {
        const autor = await prisma.user.findUnique({ where: { id: coment.idAutor } });
        return {
          ...coment,
          nomeAutor: autor.nome,
          foto: autor.foto,
        };
      })
    );
    return comentariosCompletos;
  }

  private async formatPost(post: any, autor: any, alvo: any): Promise<Aval> {
    const comentarios = await this.getComentarios(post.id);
    return {
      ...post,
      nomeAutor: autor.nome,
      foto: autor.foto,
      nomeAlvo: alvo.nome,
      comentarios,
    };
  }

  private async getFormattedPosts(posts: any[], getUser: (id: number) => Promise<any>, getTarget: (id: number) => Promise<any>): Promise<Aval[]> {
    return Promise.all(
      posts.map(async (post) => {
        const autor = await getUser(post.idAutor);
        const alvo = await getTarget(post.idAlvo);
        return this.formatPost(post, autor, alvo);
      })
    );
  }

  async findAllAlvo(id: number) {
    const posts = await prisma.post.findMany({ where: { idAlvo: id } });
    const alvo = await prisma.professor.findUnique({ where: { id } });
    return this.getFormattedPosts(posts, (id) => prisma.user.findUnique({ where: { id } }), () => Promise.resolve(alvo));
  }

  async findAllAutor(id: number) {
    const posts = await prisma.post.findMany({ where: { idAutor: id } });
    const autor = await prisma.user.findUnique({ where: { id } });
    return this.getFormattedPosts(posts, () => Promise.resolve(autor), (id) => prisma.professor.findUnique({ where: { id } }));
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return prisma.post.update({ where: { id }, data: updatePostDto });
  }

  async remove(id: number) {
    await prisma.post.delete({ where: { id } });
  }
}