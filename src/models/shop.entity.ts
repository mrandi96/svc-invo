import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'shop' })
export class Shop extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 31 })
  shopPhoneNumber: string;

  @Column({ type: 'integer' })
  lat: number;

  @Column({ type: 'integer' })
  long: number;

  @Column({ type: 'varchar', length: 300 })
  imageUrl: string;

  @Column({ type: 'varchar', length: 51 })
  invoiceFormat: string;
}
