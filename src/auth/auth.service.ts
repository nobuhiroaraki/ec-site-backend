import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(userDto: UserDto): Promise<User> {
    return await this.userRepository.createUser(userDto);
  }
}
