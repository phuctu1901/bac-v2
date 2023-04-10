import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthAppleController } from 'src/controllers/app/v1/auth-apple.controller';
import { AuthModule } from 'src/modules/auth.module';
import { AuthAppleService } from 'src/services/auth-apple.service';
import { ServicesModule } from './services.module';

@Module({
  imports: [ConfigModule, AuthModule, ServicesModule],
  providers: [AuthAppleService],
  exports: [AuthAppleService],
  controllers: [AuthAppleController],
})
export class AuthAppleModule {}
