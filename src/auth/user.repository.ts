import { UserDto } from './dto/user.dto';
import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(userDto: UserDto): Promise<User> {
    const { username, password } = userDto;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const user = this.create({ username, password: hashPassword });
    await this.save(user);
    return user;
  }
}
