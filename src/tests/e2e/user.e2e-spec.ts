import { Module } from '@nestjs/common';

import * as express from 'express'
import * as request from 'supertest'

import { Test } from '@nestjs/testing'

import { UserService } from './../../user/user.service'
import { UserModule } from './../../user/user.module'

describe('User end 2 end', () => {

  let server = express();

  it(`/GET users`, async () => {

    const userService = { findAll: () => ['test'] }

    const myModule = await Test.createTestingModule({
      imports: [ UserModule ]
    })
      .overrideComponent(UserService)
      .useValue(userService)
      .compile()

    const app = myModule.createNestApplication(server)
    await app.init()

    return request(server)
      .get('/users')
      .expect(200)
      .expect(userService.findAll())
  })

})