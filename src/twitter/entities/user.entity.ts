import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TweetEntity } from './tweet.entity';

@Entity({ name: 'User' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  user: string;

  @Column()
  email: string;

  @Column()
  photoUrl: string;

  @OneToMany(() => TweetEntity, (tweet) => tweet.userId, { cascade: true })
  tweets: TweetEntity[];
}
