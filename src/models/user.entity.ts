import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export type UserType = 'owner' | 'employee' | 'customer';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 21 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 101 })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  homeAddress: string;

  @Column({ type: 'varchar', length: 300 })
  imageUrl: string;

  @Column({
    type: 'enum',
    enum: ['owner', 'employee', 'customer'],
    default: 'owner',
  })
  userType: UserType;
}
