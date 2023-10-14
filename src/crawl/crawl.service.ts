import { Injectable } from '@nestjs/common'
import * as puppeteer from 'puppeteer'
import axios from 'axios'
import { ICrawlData } from './crawl.interface'

@Injectable()
export class CrawlService {
  async name() {
    const browser: puppeteer.Browser = await puppeteer.launch({
      headless: false,
    })
    let arr: ICrawlData[] = []

    const page: puppeteer.Page = await browser.newPage()
    await page.goto(
      'https://www.google.co.kr/search?q=gc%EB%85%B9%EC%8B%AD%EC%9E%90&sca_esv=573484139&tbm=nws&sxsrf=AM9HkKlaHf0fYyp3oa_AKRwYIOz9RPlx2A:1697305525364&source=lnms&sa=X&ved=2ahUKEwjHnajni_aBAxULRN4KHXfNC0IQ_AUoAXoECAIQAw&biw=2514&bih=1289&dpr=1.5',
      { waitUntil: 'networkidle2' }
    )

    const result: ICrawlData = await page.evaluate(() => {
      const newsElement: HTMLElement | null = document.querySelector('#rso > div > div > div:nth-child(1) > div > div > a > div > div.iRPxbe > div.n0jPhd.ynAwRc.MBeuO.nDgy9d')
      const urlElement: HTMLAnchorElement | null = document.querySelector('#rso > div > div > div:nth-child(1) > div > div > a')

      let news: string = newsElement ? newsElement.textContent : 'No data found'
      let url: string = urlElement ? urlElement.href : 'No data found'
      return { news, url }
    })

    const arrName: ICrawlData = {
      news: result.news,
      url: result.url,
    }

    arr.push(arrName)
    await page.close()

    // await browser.close()
    return { currentPercent: arr }
  }

  async fetchData(url: string): Promise<any> {
    const response = await axios.get(url)
    return response.data
  }

  async scrapeData(html: string): Promise<any> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(html)
      await page.setViewport({width: 1080, height: 1024});
      const 

      // Puppeteer의 API 및 Cheerio 등을 사용하여 원하는 데이터 스크래핑

      const scrapedData = await page.evaluate(() => {
        const newsElement: HTMLElement | null = document.querySelector('#rso > div > div > div:nth-child(1) > div > div > a > div > div.iRPxbe > div.n0jPhd.ynAwRc.MBeuO.nDgy9d')
        const urlElement: HTMLAnchorElement | null = document.querySelector('#rso > div > div > div:nth-child(1) > div > div > a')

        let news: string = newsElement ? newsElement.textContent : 'No data found'
        let url: string = urlElement ? urlElement.href : 'No data found'
        return { news, url }
      })

      return scrapedData
    } catch (error) {
      throw new Error('Failed to scrape data')
    } finally {
      await browser.close()
    }
  }
}
