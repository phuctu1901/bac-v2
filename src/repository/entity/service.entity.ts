import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { EntityHelper } from 'src/utils/entity-helper';
@Entity()
export class Service extends EntityHelper {
  // export class Service {
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
