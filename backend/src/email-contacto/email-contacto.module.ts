import { Module } from '@nestjs/common';
import { EmailContactoService } from './email-contacto.service';
import { EmailContactoController } from './email-contacto.controller';
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports:[MailerModule.forRoot({
    transport:{
      host:"smtp.gmail.com",
      auth:{
        user:"rkitoco@gmail.com",
        pass:"yubvnnugnzijnovw",
      }
    }
  })],
  controllers: [EmailContactoController],
  providers: [EmailContactoService]
})
export class EmailContactoModule {}
