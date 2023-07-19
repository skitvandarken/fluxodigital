import { Module } from '@nestjs/common';
import { EmailContactoModule } from './email-contacto/email-contacto.module';
import {Co} from '@nestjs/core'

@Module({
  imports: [EmailContactoModule]
})
export class AppModule {}
