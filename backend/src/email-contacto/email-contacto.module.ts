import { Module } from '@nestjs/common';
import { EmailContactoService } from './email-contacto.service';
import { EmailContactoController } from './email-contacto.controller';
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports:[MailerModule.forRoot({
    transport:{
      host:"mail.fluxo-digital.com",
      auth:{
        user:"comercial@fluxo-digital.com",
        pass:"fluxodigital#23",
      },
      port:465
    }
  })],
  controllers: [EmailContactoController],
  providers: [EmailContactoService]
})
export class EmailContactoModule {}
