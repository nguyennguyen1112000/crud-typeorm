import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException, Type } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClassType, CredentialDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';

export function BaseLocalStrategy<T extends ClassType, H extends Auth>(
  baseType: T,
): any {
  const UserInputDto = CredentialDto(baseType);
  type UserInputDto = InstanceType<typeof UserInputDto>;
  class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService<H>) {
      super();
    }
    async validate(username: string, password: string): Promise<any> {
      const user = await this.authService.validateUser({
        username,
        password,
      } as UserInputDto);
      if (!user) {
        throw new UnauthorizedException('Username or password is not valid');
      }
      return user;
    }
  }
  return LocalStrategy;
}
