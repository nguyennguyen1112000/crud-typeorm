import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { ClassType, CredentialDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';
import { InputDto } from '../dto';
import { CredentialGraphqlDto } from './dto/create-auth.graphql.dto ';
import { UserToken } from './entities/user-token';
import { GetUser } from './user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { CurrentUser } from './gql-user.decorator';

export function AuthResolver<T extends ClassType, H extends Auth>(
  baseType: T,
): any {
  const CreateUserInput = InputDto(baseType);
  type CreateUserInput = InstanceType<typeof CreateUserInput>;
  const CredentialDto = CredentialGraphqlDto(baseType);
  type CredentialDto = InstanceType<typeof CredentialDto>;
  @Resolver({ isAbstract: true })
  abstract class AuthResolver {
    constructor(private readonly authService: AuthService<H>) {}
    @Mutation((type) => baseType, { name: `signUp${baseType.name}` })
    async create(@Args('dto') dto: CreateUserInput) {
      return this.authService.createUser(dto);
    }
    @Mutation((type) => UserToken, { name: `signIn${baseType.name}` })
    async login(
      @Args('dto') dto: CredentialDto,
    ): Promise<{ access_token: string }> {
      return this.authService.login(dto);
    }
    @UseGuards(GqlAuthGuard)
    @Query((type) => baseType, { name: `profile${baseType.name}` })
    async profile(@CurrentUser() user: any) {
      return this.authService.profile(user);
    }
  }
  return AuthResolver;
}
