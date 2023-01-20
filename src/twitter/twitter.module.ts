import { Module } from '@nestjs/common';
import { DatabaseProviders } from 'src/core/database/database.providers';
import { TwitterProviders } from './twitter.providers';

@Module({
  controllers: [ ],
  providers: [
    ...DatabaseProviders,
    ...TwitterProviders
  ],
})
export class ProdutoModule {}
