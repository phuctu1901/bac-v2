import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HomeController } from 'src/controllers/app/v1/home.controller';
import { HomeService } from 'src/services/home.service';

@Module({
  imports: [ConfigModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
