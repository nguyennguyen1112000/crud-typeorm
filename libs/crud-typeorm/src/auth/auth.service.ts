import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Injectable()
export class AuthService<T extends Auth> {
  private jwtService: JwtService;
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<T>,
  ) {}
  async validateUser(inputDto: DeepPartial<T>): Promise<any> {
    const { username, password } = inputDto;
    const auth = await this.authRepository.findOne({ where: { username } });
    if (auth && (await bcrypt.compare(password as string, auth.password))) {
      return auth;
    }
    return null;
  }
  async login(user: any): Promise<{ access_token: string }> {
    const { password, ...payload } = user;
    this.jwtService = new JwtService({
      secret: jwtConstants.KEY,
      signOptions: { expiresIn: 3600 },
    });
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async createUser(createAuthDto: DeepPartial<T>): Promise<T> {
    const { username, password, ...other } = createAuthDto;
    const found = await this.authRepository.findOne({ where: { username } });
    if (found) {
      throw new ConflictException(`Username ${username} already exists`);
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password as string, salt);
    const user = await this.authRepository.create({
      username,
      password: hash,
      ...other,
    } as DeepPartial<T>);

    await this.authRepository.save<any>(user);
    return user;
  }
  async profile(user: any): Promise<any> {
    const { username } = user;
    const found = await this.authRepository.findOne({ where: { username } });
    const { password, ...profile } = found;
    return profile;
  }
}
