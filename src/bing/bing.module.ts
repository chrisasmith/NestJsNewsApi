import {HttpModule, Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { BingController } from './bing.controller';
import { BingService } from './service/bing.service';
import {NewsRepository} from "../repo/news.repository";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([NewsRepository]),
    ],
  controllers: [BingController],
  providers: [BingService]
})
export class BingModule {}
