import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(userDto: UserDto): Promise<User> {
    return await this.userRepository.createUser(userDto);
  }

  async signIn(userDto: UserDto): Promise<{ accessToken: string }> {
    const { username, password } = userDto;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id, username: user.username };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    }
    throw new UnauthorizedException(
      'ユーザー名またはパスワードを確認して下さい',
    );
  }
}
