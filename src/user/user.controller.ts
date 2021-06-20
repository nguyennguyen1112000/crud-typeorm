import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthController } from '@app/crud-typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController extends AuthController(UserEntity, CreateUserDto) {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
