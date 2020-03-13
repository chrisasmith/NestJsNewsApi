import {Controller, Get, Logger, Param, ValidationPipe} from '@nestjs/common';
import {NewsRequestDto} from "../dto/news-request.dto";
import {BingService} from "./service/bing.service";
import {Observable} from "rxjs";
import {AxiosResponse} from 'axios';
import {BingFeed} from "./model/bing-feed.model";

@Controller('bing')
export class BingController {
    private logger: Logger = new Logger('BingController');
    constructor(private bingSrv: BingService){}

    @Get('/:region/:lang')
    getNews(@Param(ValidationPipe) weatherRequestDto: NewsRequestDto): Observable<AxiosResponse<BingFeed[]>> {
        this.logger.verbose(`User retrieving URL. Params: ${JSON.stringify(weatherRequestDto)}`);
        return this.bingSrv.getWeatherURL(weatherRequestDto);
    }

}
