import { CrudTypeormResolver } from '@app/crud-typeorm';
import { Resolver } from '@nestjs/graphql';
import { Student } from './entities/student.type';
import { StudentService } from './student.service';
@Resolver((type) => Student)
export class StudentResolver extends CrudTypeormResolver(Student) {
  constructor(private studentService: StudentService) {
    super(studentService);
  }
}
