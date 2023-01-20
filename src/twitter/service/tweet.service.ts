import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTweetDto } from '../dto/create-tweet.dto';
import { TweetEntity } from '../entities/tweet.entity';
import { UserService } from './user.service';

@Injectable()
export class TweetService {
  constructor(
    private userService: UserService,
    @Inject('TWEET_REPOSITORY')
    private tweetRepository: Repository<TweetEntity>,
  ) {}

  async createTweeter(createTweet: CreateTweetDto) {
    const user = await this.userService.findUser(createTweet.user);
    // if (!user.tweets) {
    //   user.tweets = [];
    // }

    const newTweet = await this.tweetRepository.create();
    newTweet.texto = createTweet.texto;
    newTweet.data = createTweet.data;
    newTweet.user = user;
    const savedTweet = await this.tweetRepository.save(newTweet);

    return savedTweet;
  }
}
