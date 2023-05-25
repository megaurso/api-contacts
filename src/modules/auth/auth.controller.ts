import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-Auth.guard';

interface UserLogin {
  email: string;
  password: string;
}

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: UserLogin) {
    return this.authService.login(user.email);
  }
}
