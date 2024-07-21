import {
  Body,
  Controller,
  Get,
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
}