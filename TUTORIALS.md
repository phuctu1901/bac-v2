## Hướng dẫn cho người mới bắt đầu



### 1. Create entity file
   `src/repository/entity/service.entity.ts`

### 2. Update entity file
```javascript
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';
@Entity()
export class Service extends EntityHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 1 })
  @Allow()
  @Column({ nullable: true })
  serviceName?: string;

  @ApiProperty({ example: 1 })
  @Allow()
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({ example: 1 })
  @Allow()
  @Column({ nullable: true })
  shortDescription?: string;

  @ApiProperty({ example: 1 })
  @Allow()
  @Column({ nullable: true })
  price?: string;

  @Column({ nullable: true })
  idServiceType?: number;

  @ApiProperty({ example: 1 })
  @Allow()
  @Column({ nullable: true })
  isRunning?: boolean;
}
```

### 3. Create migration

```bash
npm run migration:generate -- src/database/migrations/CreateServiceTable
```

### 4. Migrate database

```bash
npm run migration:generate -- src/database/migrations/CreateServiceTable
```

### 5. Create new service

```bash
nest g service services/services --flat --no-spec
```

### 6. Update service
Follow tutorial here
   https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/

```javascript
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

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find();
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

```

### 7. Create controller

```bash
nest g controller controllers/app/v1/services --flat --no-spec
```

### 8. Update controller

```javascript
import { Controller, Get } from '@nestjs/common';
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
}
```

### 9. Generate module

```bash
nest g module modules/services --no-spec --flat
```

### 10. Update module

```javascript
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
```

### 11. Test get all service

### 12. Add create Service

```javascript
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() serviceData: Service) {
    return this.service.create(serviceData);
  }
```
