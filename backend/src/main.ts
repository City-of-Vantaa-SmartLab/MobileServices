import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(/^\/$/, (_, res) => {
    res.redirect('/app/');
  });
  const options = new DocumentBuilder()
    .setTitle('Vantaa Mobile Services')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('events')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT);
}
bootstrap();
