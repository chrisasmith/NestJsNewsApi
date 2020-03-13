import { Module } from '@nestjs/common';
import {typeOrmConfig} from "./config/typeorm.config";
import {TypeOrmModule} from '@nestjs/typeorm';
import { BingModule } from './bing/bing.module';
import { WsjModule } from './wsj/wsj.module';

@Module({
  imports: [
      BingModule,
      WsjModule,
      TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
