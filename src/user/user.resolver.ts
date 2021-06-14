import { UserService } from './user.service';
import { CrudTypeormResolver } from '@app/crud-typeorm';
import { User } from './entities/user.entity';
import { Resolver } from '@nestjs/graphql';
import { UserType } from './entities/user.type';
@Resolver('user')
export class UserResolver extends CrudTypeormResolver<UserType> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
