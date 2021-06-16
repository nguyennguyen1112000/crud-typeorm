import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CrudTypeormService } from '@app/crud-typeorm';

@Injectable()
export class UserService extends CrudTypeormService<UserEntity>  {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(userRepository)
  }
}
