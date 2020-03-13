import { Test, TestingModule } from '@nestjs/testing';
import { WsjController } from './wsj.controller';

describe('Wsj Controller', () => {
  let controller: WsjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WsjController],
    }).compile();

    controller = module.get<WsjController>(WsjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
