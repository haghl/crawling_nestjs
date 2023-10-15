import { Injectable, Logger } from '@nestjs/common'
import * as puppeteer from 'puppeteer'
import { ICrawlData } from './crawl.interface'
import * as fs from 'fs'
import * as xlsx from 'xlsx'
import path from 'path'

@Injectable()
export class CrawlService {
  private readonly logger = new Logger(CrawlService.name)

  async scrapeData(url: string, excelName: string): Promise<any> {
    const browser = await puppeteer.launch({
      headless: false,
    })
    const page = await browser.newPage()

    try {
      const arr: ICrawlData[] = []
      await page.goto(url)
      await page.setViewport({ width: 1080, height: 1024 })

      while (true) {
        const nextButtonSelector = '#pnnext'
        const nextButton = await page.$(nextButtonSelector)
        const newsData = await page.evaluate(() => document.querySelectorAll('.SoaBEf').length)

        for (let i = 0; i < newsData; i++) {
          const newsElement = await page.evaluate(
            (index) => document.querySelector(`#rso > div > div > div:nth-child(${index + 1}) > div > div > a > div > div.iRPxbe > div.n0jPhd.ynAwRc.MBeuO.nDgy9d`).textContent,
            i
          )
          const urlElement = await page.evaluate((index) => (document.querySelector(`#rso > div > div > div:nth-child(${index + 1}) > div > div > a`) as HTMLAnchorElement).href, i)
          let news: string = newsElement ? newsElement : 'No data found'
          let url: string = urlElement ? urlElement : 'No data found'
          arr.push({ news, url })
        }

        if (nextButton) {
          // 다음 버튼이 있다면
          await Promise.all([
            page.waitForNavigation(), // 다음 페이지 로딩 완료 대기
            nextButton.click(), // 다음 버튼 클릭
          ])
        } else {
          // 없다면 종료
          break
        }
      }

      return this.saveDataToExcel(arr, excelName)
    } catch (error) {
      this.logger.error(error)
      throw new Error('Failed to scrape data')
    } finally {
      await browser.close()
    }
  }

  saveDataToExcel(data: ICrawlData[], fileName: string) {
    const workbook = xlsx.utils.book_new()
    const worksheet = xlsx.utils.json_to_sheet(data)
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet 1')

    xlsx.writeFile(workbook, `./src/crawl/xlsx/${fileName}.xlsx`)
  }
}
