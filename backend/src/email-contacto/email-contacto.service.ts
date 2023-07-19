import { Injectable } from '@nestjs/common';
import { CreateEmailContactoDto } from './dto/create-email-contacto.dto';
import { UpdateEmailContactoDto } from './dto/update-email-contacto.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { from } from 'rxjs';

@Injectable()
export class EmailContactoService {
  constructor(private readonly mailerService: MailerService){}
  sendMail(){
    this.mailerService.sendMail({
      to:"rkitoco@gmail.com",
      from:"rkitoco@gmail.com",
      subject:"Testando nest Mailler",
      text:"Bem Vindo",
      html:"<b>olá Rafael Kitoco</b>."
      
    })
    return 'email enviado'
  }
}
