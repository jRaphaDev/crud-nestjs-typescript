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
  create(@Body() user: User) {
    return this.userService.create(user)
  }

  @Get()
  findAll() {
    const users: User[] = this.userService.findAll()
    return users
  }

  @Get(':id')
  findOne(@Param() params) {
    const id = params.id
    return this.userService.findOne(id)
  }

}

