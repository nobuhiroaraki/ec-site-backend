import { User } from './../entities/user.entity';
import { UserDto } from './dto/user.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() userDto: UserDto): Promise<User> {
    return await this.authService.signUp(userDto);
  }

  @Post('signin')
  async signIn(@Body() userDto: UserDto): Promise<{ accessToken: string }> {
    return await this.authService.signIn(userDto);
  }
}
