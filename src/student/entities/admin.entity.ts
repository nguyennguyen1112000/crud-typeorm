import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdminEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  description: string;
}
