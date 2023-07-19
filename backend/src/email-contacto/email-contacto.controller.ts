import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailContactoService } from './email-contacto.service';
import { CreateEmailContactoDto } from './dto/create-email-contacto.dto';
import { UpdateEmailContactoDto } from './dto/update-email-contacto.dto';

@Controller('email-contacto')
export class EmailContactoController {
  constructor(private readonly emailContactoService: EmailContactoService) {}

  @Post()
  EnviarEmail(@Body() body:{nome:string, email:string, assunto:string, messagem:string},){
    console.log(body)
  }

}
