import { UserDto } from './dto/user.dto';
import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(userDto: UserDto): Promise<User> {
    const { username, password } = userDto;
    const user = this.create({ username, password });

    await this.save(user);
    return user;
  }
}
