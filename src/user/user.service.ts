import { Component } from "@nestjs/common"

import { User } from "./user.entity"

@Component()
export class UserService {

  private users: User[] = []

  create(user: User) {
    this.users.push(user)
  }

  findAll() {
    return this.users
  }

  findOne(id: number) {
    return this.users.find(item => item.id == id)
  }

}