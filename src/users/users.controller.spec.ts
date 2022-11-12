import { Test, TestingModule } from '@nestjs/testing';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';
import { PrismaService } from '../prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EmailModule],
      controllers: [UsersController],
      providers: [UsersService, PrismaService, EmailService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
