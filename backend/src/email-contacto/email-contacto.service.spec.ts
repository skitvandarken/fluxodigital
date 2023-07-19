import { Test, TestingModule } from '@nestjs/testing';
import { EmailContactoService } from './email-contacto.service';

describe('EmailContactoService', () => {
  let service: EmailContactoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailContactoService],
    }).compile();

    service = module.get<EmailContactoService>(EmailContactoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
