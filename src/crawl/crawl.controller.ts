import { Controller, Get } from '@nestjs/common';
import { CrawlService } from './crawl.service';

@Controller('crawl')
export class CrawlController {
  constructor(private readonly crawlService: CrawlService) {}

  @Get()
  async getData(): Promise<any> {
    const url = 'https://www.google.co.kr/search?q=gc%EB%85%B9%EC%8B%AD%EC%9E%90&sca_esv=573484139&tbm=nws&sxsrf=AM9HkKlaHf0fYyp3oa_AKRwYIOz9RPlx2A:1697305525364&source=lnms&sa=X&ved=2ahUKEwjHnajni_aBAxULRN4KHXfNC0IQ_AUoAXoECAIQAw&biw=2514&bih=1289&dpr=1.5'; // 크롤링할 웹 사이트 URL

    try {
      // const html = await this.crawlService.fetchData(url);
      const data = await this.crawlService.scrapeData(url);

      return data;
    } catch (error) {
      throw new Error('Failed to fetch or scrape data');
    }
  }
}
