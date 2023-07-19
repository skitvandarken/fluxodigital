import { Injectable } from '@nestjs/common';
import { CreateEmailContactoDto } from './dto/create-email-contacto.dto';
import { UpdateEmailContactoDto } from './dto/update-email-contacto.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { from } from 'rxjs';

@Injectable()
export class EmailContactoService {
  constructor(private readonly mailerService: MailerService){}
  sendMail(body:any){
    this.mailerService.sendMail({
      to:"comercial@fluxo-digital.com",

      from:`${body.email}`,
      subject:`${body.assunto}`,
      text:"Bem Vindo",
      html:`Nome:${body.nome} <br>
            <hr>
            ${body.messagem} <br>`
      
    })
    return {message : 'email enviado'}
  }
}
