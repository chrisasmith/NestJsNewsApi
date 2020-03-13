import { HttpService } from '@nestjs/common';
import { NewsRequestDto } from "../../dto/news-request.dto";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios';
import { BingFeed } from "../model/bing-feed.model";
export declare class BingService {
    private http;
    private logger;
    private regions;
    private bingURL;
    private bingKey;
    private newsCulture;
    constructor(http: HttpService);
    getWeatherURL(weatherRequestDto: NewsRequestDto): Observable<AxiosResponse<BingFeed[]>>;
    private buildCultureCode;
}
