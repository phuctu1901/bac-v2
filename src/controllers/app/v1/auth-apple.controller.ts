import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/services/auth.service';
import { AuthAppleService } from 'src/services/auth-apple.service';
import { AuthAppleLoginDto } from 'src/interfaces/dto/auth-apple-login.dto';

@ApiTags('Auth')
@Controller({
  path: 'auth/apple',
  version: '1',
})
export class AuthAppleController {
  constructor(
    public authService: AuthService,
    public authAppleService: AuthAppleService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: AuthAppleLoginDto) {
    const socialData = await this.authAppleService.getProfileByToken(loginDto);

    return this.authService.validateSocialLogin('apple', socialData);
  }
}
