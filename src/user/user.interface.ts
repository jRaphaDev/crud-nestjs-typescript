import { IsString, IsInt } from "class-validator";

export class User {

  @IsInt()
  readonly id: number

  @IsString()
  readonly name: string

  @IsInt()
  readonly age: number

  @IsString()
  readonly email: string

}