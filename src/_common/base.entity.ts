import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
  ValueTransformer,
} from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Exclude()
export abstract class BaseEntity {
  @ApiHideProperty()
  @Generated('increment')
  @PrimaryColumn('integer')
  id: number;

  @ApiHideProperty()
  @Column({
    name: 'created_by',
    type: 'text',
    nullable: false,
    default: 'system',
  })
  createdBy: number;

  @ApiHideProperty()
  @Column({
    name: 'updated_by',
    type: 'text',
    nullable: true,
  })
  updatedBy: number;

  @ApiHideProperty()
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @ApiHideProperty()
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @ApiHideProperty()
  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @ApiHideProperty()
  @Column({
    name: 'deleted_by',
    type: 'text',
    nullable: true,
  })
  deletedBy: number;
}
