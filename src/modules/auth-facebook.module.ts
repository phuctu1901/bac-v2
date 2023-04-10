import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthFacebookController } from 'src/controllers/app/v1/auth-facebook.controller';
import { AuthModule } from 'src/modules/auth.module';
import { AuthFacebookService } from 'src/services/auth-facebook.service';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthFacebookService],
  exports: [AuthFacebookService],
  controllers: [AuthFacebookController],
})
export class AuthFacebookModule {}
