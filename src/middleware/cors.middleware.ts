import {
  ExpressMiddleware,
  NestMiddleware,
  Middleware
} from '@nestjs/common'

@Middleware()
export class CorsMiddlweare implements NestMiddleware {
  resolve(): ExpressMiddleware {
    return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', '*')
      next()
    }
  }
}