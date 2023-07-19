import { Module } from '@nestjs/common';
import { EmailContactoModule } from './email-contacto/email-contacto.module';


@Module({
  imports: [EmailContactoModule]
})
export class AppModule {}
