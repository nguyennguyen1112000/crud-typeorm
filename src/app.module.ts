import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { BaseEntity } from '@app/crud-typeorm/entities/base.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { Auth } from '@app/crud-typeorm/auth/entities/auth.entity';
import { JwtStrategy } from '@app/crud-typeorm';
import { AdminEntity } from './student/entities/admin.entity';
import { AdminModule } from './student/admin.module';
@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'userdb',
      entities: [AdminEntity, UserEntity, BaseEntity, Auth],
      synchronize: true,
    }),
    UserModule,
    AdminModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
