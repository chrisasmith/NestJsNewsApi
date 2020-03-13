import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";

async function bootstrap() {
    const logger: Logger = new Logger('bootstrap');
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']});

    logger.log(`Current Environment ${process.env.NODE_ENV}`);

    const port = process.env.PORT || 3100;

    await app.listen(port);
    logger.log(`Application is running on Port ${port}`);
}
bootstrap();
