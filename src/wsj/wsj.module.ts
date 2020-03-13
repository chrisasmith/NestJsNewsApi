import { Module } from '@nestjs/common';
import { WsjController } from './wsj.controller';

@Module({
  controllers: [WsjController]
})
export class WsjModule {}
