import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService, CrudTypeormService } from '@app/crud-typeorm';
import { AdminEntity } from './entities/admin.entity';

@Injectable()
export class AdminService extends AuthService<AdminEntity> {
  constructor(
    @InjectRepository(AdminEntity)
    private studentRepository: Repository<AdminEntity>,
  ) {
    super(studentRepository);
  }
}
