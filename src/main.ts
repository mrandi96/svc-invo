import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import configService from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Invo API')
        .setDescription('These APIs are the documentation for SVC Invo')
        .build(),
    );

    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(Number(process.env.PORT) || 3000);
}
bootstrap();
