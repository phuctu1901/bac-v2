import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from 'src/repository/entity/service.entity';
import { Repository } from 'typeorm';

import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  //   async findAll(): Promise<Service[]> {
  //     return await this.serviceRepository.find();
  //   }

  async findAll(): Promise<Service[]> {
    return this.serviceRepository.find({
      select: [
        'id',
        'serviceName',
        'description',
        'shortDescription',
        'price',
        'idServiceType',
        'isRunning',
      ],
    });
  }

  async create(service: Service): Promise<Service> {
    return await this.serviceRepository.save(service);
  }

  async update(service: Service): Promise<UpdateResult> {
    return await this.serviceRepository.update(service.id, service);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.serviceRepository.delete(id);
  }
}
