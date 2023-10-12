import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import axios from 'axios';

@Injectable()
export class CrawlService {
  async fetchData(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
  }

  async scrapeData(html: string): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.setContent(html);

      // Puppeteer의 API 및 Cheerio 등을 사용하여 원하는 데이터 스크래핑

      const scrapedData = await page.evaluate(() => {
        // 스크래핑 로직 작성
        // return data;
      });

      return scrapedData;
    } catch (error) {
      throw new Error('Failed to scrape data');
    } finally {
      await browser.close();
    }
  }
}
