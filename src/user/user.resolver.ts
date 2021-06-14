import { CrudTypeormResolver } from '@app/crud-typeorm'
import {Resolver,Query} from '@nestjs/graphql'
import { User } from './entities/user.entity';
import { UserType } from './entities/user.type';
import { UserService } from './user.service';
@Resolver(type => UserType)
export class UserResolver extends CrudTypeormResolver(UserType)<User> {
  constructor(private userService: UserService) {
    super(userService);
  }
}
