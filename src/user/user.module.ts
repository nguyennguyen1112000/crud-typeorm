import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UserService,UserResolver],
  exports: [TypeOrmModule]
})
export class UserModule {}
