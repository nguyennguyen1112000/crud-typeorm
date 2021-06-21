import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  controllers: [],
  providers: [AdminService, AdminResolver],
  exports: [TypeOrmModule],
})
export class AdminModule {}
