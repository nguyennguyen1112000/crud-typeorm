import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { BaseEntity } from '@app/crud-typeorm/entities/base.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user/user.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot({autoSchemaFile:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'userdb',
      entities: [User, BaseEntity],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
