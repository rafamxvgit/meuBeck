import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class ProfessorService {
  async create(createProfessorDto: CreateProfessorDto) {
    return await prisma.professor.create({data: createProfessorDto});
  }

  async findAll() {
    return await prisma.professor.findMany();
  }

  async findOne(id: number) {
    return await prisma.professor.findUnique({where: {id: id}});
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return `This action updates a #${id} professor`;
  }

  remove(id: number) {
    return `This action removes a #${id} professor`;
  }
}
