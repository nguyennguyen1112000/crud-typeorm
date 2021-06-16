import { Body, Controller,  Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CrudTypeormController } from '@app/crud-typeorm';
import { UserEntity } from './entities/user.entity';
@Controller('user')
export class UserController extends CrudTypeormController<UserEntity> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
