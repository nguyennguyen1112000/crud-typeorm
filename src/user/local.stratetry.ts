import { BaseLocalStrategy } from "@app/crud-typeorm";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./user.service";
@Injectable()
export class UserLocalStrategy extends BaseLocalStrategy(UserEntity) {
  constructor(private userService: UserService) {
    super(userService);
  }
}
