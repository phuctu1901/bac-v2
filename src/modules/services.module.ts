import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesController } from 'src/controllers/app/v1/services.controller';
import { Service } from 'src/repository/entity/service.entity';
import { ServicesService } from 'src/services/services.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
