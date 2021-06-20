import { AuthResolver, CrudTypeormResolver } from '@app/crud-typeorm'
import { Resolver} from '@nestjs/graphql'
import { User } from './entities/user.type';
import { UserService } from './user.service';
@Resolver(type => User)
export class UserResolver extends AuthResolver(User,) {
  constructor(private userService: UserService) {
    super(userService);
  }

}
