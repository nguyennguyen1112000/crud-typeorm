import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Auth } from './auth.entity';

@Entity()
export class AuthToken {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;

}
