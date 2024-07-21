import { Controller, Post } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
  @Post()
  async criar() {
    return 'Criando um usuário'
  }
}