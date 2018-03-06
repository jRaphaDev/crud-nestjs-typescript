import {
  Module, Global,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod
} from '@nestjs/common'

import { AppController } from './app.controller'
import { UserController } from './user/user.controller'

import { UserService } from './user/user.service'

import { UserModule } from './user/user.module'

import { LoggerMiddleware } from './middleware/logger.middleware'
import { CorsMiddlweare } from './middleware/cors.middleware'

@Global()
@Module({
  imports: [ UserModule ],
  controllers: [ AppController ],
  components: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply([ LoggerMiddleware, CorsMiddlweare ])
      .forRoutes({ path: '/**', method: RequestMethod.ALL })
  }
}
