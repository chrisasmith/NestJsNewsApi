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
const class_validator_1 = require("class-validator");
class WeatherRequestDto {
    constructor() {
        this.bingSupportedList = ['es-AR', 'en-AU', 'de-AT', 'nl-BE', 'fr-BE', 'pt-BR',
            'en-CA', 'fr-CA', 'es-CL', 'da-DK', 'fi-FI', 'fr-FR', 'de-DE', 'zh-HK', 'en-IN',
            'en-ID', 'en-IE', 'it-IT', 'ja-JP', 'ko-KR', 'en-MY', 'es-MX', 'nl-NL', 'en-NZ',
            'no-NO', 'zh-CN', 'pl-PL', 'pt-PT', 'en-PH', 'ru-RU', 'ar-SA', 'en-ZA', 'es-ES',
            'sv-SE', 'fr-CH', 'de-CH', 'zh-TW', 'tr-TR', 'en-GB', 'en-US', 'es-US'];
        this.regions = {
            'US': ['en', 'es'],
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
    }
    validateLanguage() {
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], WeatherRequestDto.prototype, "region", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], WeatherRequestDto.prototype, "lang", void 0);
exports.WeatherRequestDto = WeatherRequestDto;
//# sourceMappingURL=weather-request.dto.js.map