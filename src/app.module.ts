import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { BaseEntity } from '@app/crud-typeorm/entities/base.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { StudentModule } from './student/student.module';
import { StudentEntity } from './student/entities/student.entity';
import { Auth } from '@app/crud-typeorm/auth/entities/auth.entity';
import { JwtStrategy } from '@app/crud-typeorm';
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
      entities: [StudentEntity, UserEntity, BaseEntity, Auth],
      synchronize: true,
    }),
    UserModule,
    StudentModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
