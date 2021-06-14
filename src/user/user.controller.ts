import { Body, Controller,  Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CrudTypeormController } from '@app/crud-typeorm';
import { User } from './entities/user.entity';
@Controller('user')
export class UserController extends CrudTypeormController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
