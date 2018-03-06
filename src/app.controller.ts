import { Get, Controller, Res, HttpStatus } from '@nestjs/common'

@Controller()
export class AppController {

  @Get()
  root(@Res() res): string {
    return res.status(HttpStatus.OK).json(process.env)
  }
}
