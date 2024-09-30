import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() authCredentialsDto: AuthCredentialsDto) {
    const user = await this.authService.validateUser(authCredentialsDto); 
    
    if (!user) {
      return { message: 'Invalid credentials!'};
    }

    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.createUser(authCredentialsDto);
  }
}
