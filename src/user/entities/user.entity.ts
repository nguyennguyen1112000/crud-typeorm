import { Auth } from '@app/crud-typeorm';
import { Entity, Column } from 'typeorm';

@Entity()
export class UserEntity extends Auth{
  @Column()
  firstName:string;
  @Column()
  lastName:string;
}
