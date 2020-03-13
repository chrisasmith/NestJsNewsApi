import {HttpService, Injectable, Logger} from '@nestjs/common';
import {NewsRequestDto} from "../../dto/news-request.dto";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {AxiosResponse} from 'axios';
import {BingFeed} from "../model/bing-feed.model";

@Injectable()
export class BingService {
    private logger: Logger = new Logger('BingService');
    /*bingSupportedList ['es-AR','en-AU','de-AT','nl-BE','fr-BE','pt-BR',
        'en-CA','fr-CA','es-CL','da-DK','fi-FI','fr-FR','de-DE','zh-HK','en-IN',
        'en-ID','en-IE','it-IT','ja-JP','ko-KR','en-MY','es-MX','nl-NL','en-NZ',
        'no-NO','zh-CN','pl-PL','pt-PT','en-PH','ru-RU','ar-SA','en-ZA','es-ES',
        'sv-SE','fr-CH','de-CH','zh-TW','tr-TR','en-GB','en-US','es-US'];*/

    private regions: {[key: string]: string[]} = {
        US: ['en', 'es'],
        AR: ['es'],
        AU: ['en'],
        AT: ['de'],
        BE: ['nl', 'fr'],
        BR: ['pt'],
        CA: ['en', 'fr'],
        CL: ['es'],
        DK: ['da'],
        FI: ['fi'],
        FR: ['fr'],
        DE: ['de'],
        HK: ['zh'],
        IN: ['en'],
        ID: ['en'],
        IE: ['en'],
        IT: ['it'],
        JP: ['ja'],
        KR: ['ko'],
        MY: ['en'],
        MX: ['es'],
        NL: ['nl'],
        NZ: ['en'],
        NO: ['no'],
        CN: ['zh'],
        PL: ['pl'],
        PT: ['pt'],
        PH: ['en'],
        RU: ['ru'],
        SA: ['ar'],
        ZA: ['en'],
        ES: ['es'],
        SE: ['sv'],
        CH: ['fr', 'de'],
        TW: ['zh'],
        TR: ['tr'],
        GB: ['en']
    };
    private bingURL: string = process.env.BING_URL || 'https://uniguestapidev.azure-api.net/bingnews/search?mkt=';
    private bingKey: string = process.env.BING_URL || 'ce270b887d5543b0b6d3357e4caa37f7';
    private newsCulture: string = '';

    constructor(private http: HttpService) {}

    public getWeatherURL(weatherRequestDto: NewsRequestDto): Observable<AxiosResponse<BingFeed[]>> {
        this.newsCulture = this.buildCultureCode(weatherRequestDto.region, weatherRequestDto.lang);

        this.logger.log(`newsCulture: ${this.newsCulture}`);
        this.logger.log(`Combined URL: ${this.bingURL}${this.newsCulture}`);

        return this.http.get(this.bingURL, {
            headers: { 'Ocp-Apim-Subscription-Key': this.bingKey }
        }).pipe(
            map(response => {
                return response.data.value.map(v => {
                    return {
                        name: v.name,
                        url: v.url,
                        image: {
                            ...v.image.thumbnail
                        },
                        description: v.description,
                        datePublished: v.datePublished,
                        category: v.category,
                        headline: v.headline
                    }
                })
            })
        );
    }

    private buildCultureCode(region: string, lang: string): string {
        const languages: string[] = this.regions[region];
        let langCode: string = null;
        if (languages) {
            langCode =  `${languages.filter(c => c === lang)[0]}`;
            if (langCode) {
                return `${langCode}-${region}`;
            }
        }
        return 'en-US';
    }
}
