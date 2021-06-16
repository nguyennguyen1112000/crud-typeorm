import { CrudTypeormResolver } from '@app/crud-typeorm'
import { Resolver} from '@nestjs/graphql'
import { User } from './entities/user.type';
import { UserService } from './user.service';
@Resolver(type => User)
export class UserResolver extends CrudTypeormResolver(User) {
  constructor(private userService: UserService) {
    super(userService);
  }

}
