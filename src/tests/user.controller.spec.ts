import { IsInt } from 'class-validator';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import * as jasmine from 'jasmine'
import { HttpCode, HttpStatus } from '@nestjs/common';

describe('User Controller', () => {

  let userController: UserController
  let userService: UserService

  beforeEach(() => {
    userService = new UserService()
    userController = new UserController(userService)
  })

  describe('findAll', () => {

    it('should return an array of users', async () => {
      const result = ['test'];
      jest.spyOn(userService, 'findAll').mockImplementation(() => result)
      expect(await userController.findAll()).toBe(result)
    })

    it('should return an array empty', async () => {
      const result = [];
      jest.spyOn(userService, 'findAll').mockImplementation(() => result)
      expect(await userController.findAll()).toBe(result)
    })

  })

  describe('findOne', () => {

    it('should return an user specific', async () => {
      const result = { id: 1, name: 'Raphael Freitas', age: 27, email: 'dev.rapha@gmail.com' }
      jest.spyOn(userService, 'findOne').mockImplementation(() => result)

      const mockRequest = { params: { id: 1 } }

      expect(await userController.findOne(mockRequest)).toBe(result)
    })

    it('should return an empty object', async () => {
      const result = {}
      jest.spyOn(userService, 'findOne').mockImplementation(() => result)

      const mockRequest = { params: { id: 0 } }
      expect(await userController.findOne(mockRequest)).toBe(result)
    })

  })


})