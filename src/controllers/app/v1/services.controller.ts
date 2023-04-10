import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Service } from 'src/repository/entity/service.entity';
import { ServicesService } from 'src/services/services.service';

@ApiTags('Services')
@Controller({
  path: 'services',
  version: '1',
})
export class ServicesController {
  constructor(private service: ServicesService) {}
  @Get()
  index(): Promise<Service[]> {
    return this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() serviceData: Service) {
    return this.service.create(serviceData);
  }
}
