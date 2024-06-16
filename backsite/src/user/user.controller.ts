import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('login')
  checkLog(@Body() loginDto: LoginUserDto) {
    return this.userService.checkLog(loginDto);
  }

  @Patch('senha:id')
  updateSenha(@Param('id') id: string, @Body() novaSenha: { senha: string }) {
    return this.userService.updateUserPassword(+id, novaSenha)
  }

  @Patch('imagem:id')
  updateImagem(@Param('id') id: string, @Body() novaImagem: { imagem: string }) {
    return this.userService.updateUserImagem(+id, novaImagem)
  }

  @Patch('nome:id')
  updateNome(@Param('id') id: string, @Body() novoNome: { nome: string }) {
    return this.userService.updateUserNome(+id, novoNome)
  }

  @Patch('bio:id')
  updateBio(@Param('id') id: string, @Body() novaBio: { bio: string }){
    return this.userService.updateUserBio(+id, novaBio)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
