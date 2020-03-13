"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
    });
    logger.log(`Current Environment ${process.env.NODE_ENV}`);
    const port = process.env.PORT || 3100;
    await app.listen(port);
    logger.log(`Application is running on Port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map