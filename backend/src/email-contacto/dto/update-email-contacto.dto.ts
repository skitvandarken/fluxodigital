import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailContactoDto } from './create-email-contacto.dto';

export class UpdateEmailContactoDto extends PartialType(CreateEmailContactoDto) {}
