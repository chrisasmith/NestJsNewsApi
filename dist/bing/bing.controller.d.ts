import { NewsRequestDto } from "../dto/news-request.dto";
import { BingService } from "./service/bing.service";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios';
import { BingFeed } from "./model/bing-feed.model";
export declare class BingController {
    private bingSrv;
    private logger;
    constructor(bingSrv: BingService);
    getNews(weatherRequestDto: NewsRequestDto): Observable<AxiosResponse<BingFeed[]>>;
}
