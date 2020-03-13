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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const news_request_dto_1 = require("../dto/news-request.dto");
const bing_service_1 = require("./service/bing.service");
const rxjs_1 = require("rxjs");
let BingController = class BingController {
    constructor(bingSrv) {
        this.bingSrv = bingSrv;
        this.logger = new common_1.Logger('BingController');
    }
    getNews(weatherRequestDto) {
        this.logger.verbose(`User retrieving URL. Params: ${JSON.stringify(weatherRequestDto)}`);
        return this.bingSrv.getWeatherURL(weatherRequestDto);
    }
};
__decorate([
    common_1.Get('/:region/:lang'),
    __param(0, common_1.Param(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_request_dto_1.NewsRequestDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], BingController.prototype, "getNews", null);
BingController = __decorate([
    common_1.Controller('bing'),
    __metadata("design:paramtypes", [bing_service_1.BingService])
], BingController);
exports.BingController = BingController;
//# sourceMappingURL=bing.controller.js.map