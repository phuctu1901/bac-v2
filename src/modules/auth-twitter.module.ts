import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthTwitterController } from 'src/controllers/app/v1/auth-twitter.controller';
import { AuthModule } from 'src/modules/auth.module';
import { AuthTwitterService } from 'src/services/auth-twitter.service';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthTwitterService],
  exports: [AuthTwitterService],
  controllers: [AuthTwitterController],
})
export class AuthTwitterModule {}
