import { Module } from '@nestjs/common';
import { DatabaseProviders } from 'src/core/database/database.providers';
import { TweetController } from './controller/tweet.controller';
import { UserController } from './controller/user.controller';
import { TweetService } from './service/tweet.service';
import { UserService } from './service/user.service';
import { TwitterProviders } from './twitter.providers';

@Module({
  controllers: [UserController, TweetController],
  providers: [UserService, TweetService, ...DatabaseProviders, ...TwitterProviders],
})
export class TwitterModule {}
