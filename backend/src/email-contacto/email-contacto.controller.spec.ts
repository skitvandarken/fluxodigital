import { Test, TestingModule } from '@nestjs/testing';
import { EmailContactoController } from './email-contacto.controller';
import { EmailContactoService } from './email-contacto.service';

describe('EmailContactoController', () => {
  let controller: EmailContactoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailContactoController],
      providers: [EmailContactoService],
    }).compile();

    controller = module.get<EmailContactoController>(EmailContactoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
