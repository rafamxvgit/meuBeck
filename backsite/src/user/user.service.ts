import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, PrismaClient } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';
import { retry } from 'rxjs';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient()

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const hash = hashSync(createUserDto.senha, 10);
    const user = await prisma.user.create({
      data: {
        ...createUserDto,
        senha: hash,
      },
    });
    return await prisma.user.create({data: createUserDto});
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await prisma.user.findFirst({where:{id: id}});
  }

  async updateUserPassword(id: number, novaSenha:{senha: string}){
    return await prisma.user.update({where: {id: id}, data:{senha: novaSenha.senha}})
  }

  async checkLog(loginUserDto: LoginUserDto) {
    return await prisma.user.findFirst({where:{email: loginUserDto.email, senha: loginUserDto.senha}})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await prisma.user.update({data: updateUserDto, where:{id: id}});
  }
  
  async remove(id: number) {
    return await prisma.user.delete({where: {id: id}})
  }

  async updateUserImagem(id: number, novaImagem: {imagem: string}) {
    return await prisma.user.update({where: {id:id}, data: {foto: novaImagem.imagem}})
  }

  async updateUserNome(id: number, novoNome: {nome: string}) {
    return await prisma.user.update({where: {id:id}, data: {nome: novoNome.nome}})
  }

}
