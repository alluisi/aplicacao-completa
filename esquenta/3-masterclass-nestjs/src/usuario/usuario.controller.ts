import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) {}

  @Post()
  async criar(@Body() usuario: Usuario) {
    const novoUsuario = await this.repo.criar(usuario);
    return novoUsuario;
  }

  @Get()
  async obterTodos() {
    const usuarios = await this.repo.obterTodos();
    return usuarios;
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    const usuario = await this.repo.obterPorId(+id);
    return usuario;
  }
}