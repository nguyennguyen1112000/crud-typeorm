import { CreateUserDto } from "src/user/dto/create-user.dto";
import { DeepPartial } from "typeorm";
export interface AuthBaseService<T> {
  createUser(createAuthDto: CreateUserDto): Promise<T>;
  validateUser(inputDto: DeepPartial<T>): Promise<any>;
  login(user: any): Promise<{ access_token: string }>;
}

