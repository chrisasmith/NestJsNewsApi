"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const news_enity_1 = require("../entity/news.enity");
const common_1 = require("@nestjs/common");
let NewsRepository = class NewsRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('NewsRepository');
    }
    async getNews(url, key) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': key
            }
        });
        try {
            return await response.text();
        }
        catch (e) {
            this.logger.error(`Failed to load URL:  ${url}`, e.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
};
NewsRepository = __decorate([
    typeorm_1.EntityRepository(news_enity_1.News)
], NewsRepository);
exports.NewsRepository = NewsRepository;
//# sourceMappingURL=news.repository.js.map