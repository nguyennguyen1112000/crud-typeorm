import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudTypeormService } from '@app/crud-typeorm';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentService extends CrudTypeormService<StudentEntity> {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {
    super(studentRepository);
  }
}
