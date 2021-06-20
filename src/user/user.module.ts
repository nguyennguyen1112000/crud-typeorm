import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';
import { UserLocalStrategy } from './local.stratetry';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService,UserResolver,UserLocalStrategy],
  exports: [TypeOrmModule]
})
export class UserModule {}
