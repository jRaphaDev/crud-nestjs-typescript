import {
  Controller,
  Get, Req,
  Res, HttpStatus,
  Post, Body, Param
} from "@nestjs/common"

import { Observable } from "rxjs/Observable"
import { ProductRepository } from "./product.repository";

// import { User } from "./user.entity"
// import { UserService } from "./user.service"

@Controller('products')
export class ProductController {

  constructor(
    private readonly productRepository: ProductRepository
  ){}

  @Get()
  findById() {
    return this.productRepository.findById('G1')
  }

}

