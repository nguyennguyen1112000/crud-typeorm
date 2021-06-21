import { Auth } from '@app/crud-typeorm/auth/entities/auth.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity extends Auth{
  @Column()
  firstName:string;
  @Column()
  lastName:string;
}
