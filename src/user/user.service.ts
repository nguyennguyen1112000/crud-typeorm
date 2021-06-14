import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CrudTypeormService } from '@app/crud-typeorm';

@Injectable()
export class UserService extends CrudTypeormService<User>  {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(userRepository)
  }
}
