import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrawlModule } from './crawl/crawl.module';

@Module({
  imports: [ConfigModule.forRoot(), CrawlModule],
})
export class AppModule {}
