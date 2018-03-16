import {
  Module, Global,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod
} from '@nestjs/common'

import { AppController } from './app.controller'

import { UserModule } from './user/user.module'

import { LoggerMiddleware } from './middleware/logger.middleware'
import { CorsMiddlweare } from './middleware/cors.middleware'
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ProductModule,
  ],
  controllers: [ AppController ],
  components: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply([ LoggerMiddleware, CorsMiddlweare ])
      .forRoutes({ path: '/**', method: RequestMethod.ALL })
  }
}
