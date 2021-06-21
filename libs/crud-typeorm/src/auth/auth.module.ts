import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from './gql-auth.guard';
@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Auth]),
  ],
  controllers: [],
  providers: [AuthService, GqlAuthGuard],
  exports: [TypeOrmModule,AuthService],
})
export class AuthModule {}
