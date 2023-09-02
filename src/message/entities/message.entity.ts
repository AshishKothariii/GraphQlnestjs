import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  FromId: string;
  @Column()
  ToId: string;
  @Column()
  text: string;
}
