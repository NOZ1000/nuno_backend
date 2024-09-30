import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; // Store hashed password

  @Column({ default: 0 })
  totalGamesPlayed: number;

  @Column({ default: 0 })
  totalWins: number;
}
