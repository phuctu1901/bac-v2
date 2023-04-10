import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthGoogleController } from 'src/controllers/app/v1/auth-google.controller';
import { AuthModule } from 'src/modules/auth.module';
import { AuthGoogleService } from 'src/services/auth-google.service';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthGoogleService],
  exports: [AuthGoogleService],
  controllers: [AuthGoogleController],
})
export class AuthGoogleModule {}
