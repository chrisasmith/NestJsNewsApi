"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let BingService = class BingService {
    constructor(http) {
        this.http = http;
        this.logger = new common_1.Logger('BingService');
        this.regions = {
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
        this.bingURL = process.env.BING_URL || 'https://uniguestapidev.azure-api.net/bingnews/search?mkt=';
        this.bingKey = process.env.BING_URL || 'ce270b887d5543b0b6d3357e4caa37f7';
        this.newsCulture = '';
    }
    getWeatherURL(weatherRequestDto) {
        this.newsCulture = this.buildCultureCode(weatherRequestDto.region, weatherRequestDto.lang);
        this.logger.log(`newsCulture: ${this.newsCulture}`);
        this.logger.log(`Combined URL: ${this.bingURL}${this.newsCulture}`);
        return this.http.get(this.bingURL, {
            headers: { 'Ocp-Apim-Subscription-Key': this.bingKey }
        }).pipe(operators_1.map(response => {
            return response.data.value.map(v => {
                return {
                    name: v.name,
                    url: v.url,
                    image: Object.assign({}, v.image.thumbnail),
                    description: v.description,
                    datePublished: v.datePublished,
                    category: v.category,
                    headline: v.headline
                };
            });
        }));
    }
    buildCultureCode(region, lang) {
        const languages = this.regions[region];
        let langCode = null;
        if (languages) {
            langCode = `${languages.filter(c => c === lang)[0]}`;
            if (langCode) {
                return `${langCode}-${region}`;
            }
        }
        return 'en-US';
    }
};
BingService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], BingService);
exports.BingService = BingService;
//# sourceMappingURL=bing.service.js.map