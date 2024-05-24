import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all post`;
  }

  findOneAlvo(id: number) {
    return prisma.post.findFirst({where: {idAlvo: id}})
  }
  
  findOneAutor(id: number) { 
    return prisma.post.findFirst({where: {idAutor: id}})
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
