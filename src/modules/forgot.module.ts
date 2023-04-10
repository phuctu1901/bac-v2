import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forgot } from 'src/repository/entity/forgot.entity';
import { ForgotService } from 'src/services/forgot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Forgot])],
  providers: [ForgotService],
  exports: [ForgotService],
})
export class ForgotModule {}
