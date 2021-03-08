import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'invoice' })
export class Invoice extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  invoiceNumber: string;
}
