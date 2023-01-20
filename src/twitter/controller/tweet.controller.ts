import { Body, Controller, Post } from '@nestjs/common';
import { CreateTweetDto } from '../dto/create-tweet.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { TweetService } from '../service/tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Post()
  async createUser(@Body() createTweet: CreateTweetDto) {
    return await this.tweetService.createTweeter(createTweet);
  }
}
