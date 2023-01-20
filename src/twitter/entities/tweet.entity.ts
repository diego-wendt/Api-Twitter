import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'Tweet' })
export class TweetEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column()
  texto: string;
  @Column()
  userId: string;
  @Column()
  data: string;

  @ManyToOne(() => UserEntity, (user) => user.tweets, { cascade: true })
  user: UserEntity;
}