import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/modules/users.module';
import { ForgotModule } from 'src/modules/forgot.module';
import { MailModule } from 'src/modules/mail.module';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { JwtStrategy } from 'src/interfaces/strategies/jwt.strategy';
import { AnonymousStrategy } from 'src/interfaces/strategies/anonymous.strategy';
import { AuthController } from 'src/controllers/app/v1/auth.controller';
import { AuthService } from 'src/services/auth.service';

@Module({
  imports: [
    UsersModule,
    ForgotModule,
    PassportModule,
    MailModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('auth.secret'),
        signOptions: {
          expiresIn: configService.get('auth.expires'),
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [IsExist, IsNotExist, AuthService, JwtStrategy, AnonymousStrategy],
  exports: [AuthService],
})
export class AuthModule {}
