import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [],
  providers: [StudentService, StudentResolver],
  exports: [TypeOrmModule],
})
export class StudentModule {}
