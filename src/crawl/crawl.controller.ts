import { Controller, Get } from '@nestjs/common';
import { CrawlService } from './crawl.service';

@Controller('crawl')
export class CrawlController {
  constructor(private readonly crawlService: CrawlService) {}

  @Get()
  async getData(): Promise<any> {
    const url = 'https://example.com'; // 크롤링할 웹 사이트 URL

    try {
      const html = await this.crawlService.fetchData(url);
      const data = await this.crawlService.scrapeData(html);

      return data;
    } catch (error) {
      throw new Error('Failed to fetch or scrape data');
    }
  }
}
