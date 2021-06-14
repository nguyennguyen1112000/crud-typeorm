import { Module } from '@nestjs/common';
import { CrudTypeormService } from './crud-typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './entities/base.entity'
import { CrudTypeormController } from './crud-typeorm.controller';
@Module({
  imports: [TypeOrmModule.forFeature([BaseEntity])],
  providers: [CrudTypeormService],
  controllers: [CrudTypeormController],
  exports: [CrudTypeormService,TypeOrmModule],
})
export class CrudTypeormModule {}
