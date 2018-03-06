import { 
  Controller,
  Get, Req,
  Res, HttpStatus,
  Post, Body, Param
} from "@nestjs/common";

import { Observable } from "rxjs/Observable";

import { User } from "./user.interface";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Post()
  create(@Body() user: User, @Res() res): Observable<User> {
    this.userService.create(user)
    return res.status(HttpStatus.CREATED).send(user)
  }

  @Get()
  findAll(@Req() req, @Res() res): Observable<User[]> {
    const users: User[] = this.userService.findAll()
    return res.status(HttpStatus.OK).json(users)
  }

  @Get(':id')
  findOne(@Param() params, @Res() res): Observable<User> {
    const id = params.id
    const user: User = this.userService.findOne(id)
    return res.status(HttpStatus.OK).json(user)
  }

}

