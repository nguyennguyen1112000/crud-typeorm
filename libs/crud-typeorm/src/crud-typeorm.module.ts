import { Module } from '@nestjs/common';
import { CrudTypeormService } from './crud-typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './entities/base.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forFeature([BaseEntity]), AuthModule],
  providers: [CrudTypeormService],
  controllers: [],
  exports: [CrudTypeormService, TypeOrmModule],
})
export class CrudTypeormModule {}
