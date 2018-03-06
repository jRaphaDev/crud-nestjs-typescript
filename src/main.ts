import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';
import { ValidationPipe } from './pipe/validation.pipe';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

async function bootstrap() {

  const app = await NestFactory.create(ApplicationModule)

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new LoggingInterceptor())

  await app.listen(3000);
}
bootstrap();
