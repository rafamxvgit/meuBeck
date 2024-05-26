import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, PrismaClient } from '@prisma/client';
import { LoginUserDto } from './dto/login-user.dto';

const prisma = new PrismaClient()

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await prisma.user.create({data: createUserDto});
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await prisma.user.findFirst({where:{id: id}});
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
}
