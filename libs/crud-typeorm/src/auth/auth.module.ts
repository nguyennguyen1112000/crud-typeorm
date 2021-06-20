import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Auth]),
  ],
  controllers: [],
  providers: [AuthService],
  exports: [TypeOrmModule,AuthService],
})
export class AuthModule {}
