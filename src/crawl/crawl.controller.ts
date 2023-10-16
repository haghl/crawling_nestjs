import { Controller, Get } from '@nestjs/common'
import { CrawlService } from './crawl.service'

@Controller('crawl')
export class CrawlController {
  constructor(private readonly crawlService: CrawlService) {}

  @Get('/gc')
  async getDataGC(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22gc%EB%85%B9%EC%8B%AD%EC%9E%90%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKmJ30Sszb9PlhKSorPBdJ0kiqgoxA%3A1697422058053&ei=6posZfvqAoHV1e8P-J6Z0Ao&ved=0ahUKEwj7h7f2vfmBAxWBavUHHXhPBqoQ4dUDCA0&uact=5&oq=%22gc%EB%85%B9%EC%8B%AD%EC%9E%90%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDSJnY-uFueyLreyekCIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESOQQUIMEWNAJcAB4AJABAJgBqQGgAYkGqgEDMC42uAEDyAEA-AEB-AECwgIEEAAYHsICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgQQABgDwgIGEAAYBxgeiAYB&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, 'gc녹십자')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/jw')
  async getDataJW(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22jw%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKmNkxfwWwKd63jzky8BvqN2bkqXqQ%3A1697422038993&ei=1posZbmfPMfn1e8Px5-c0Ag&ved=0ahUKEwi54qvtvfmBAxXHc_UHHccPB4oQ4dUDCA0&uact=5&oq=%22jw%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiECJqd-yDneuqheqzvO2VmSIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB5I-g9QxwRYwAtwAHgAkAEAmAGbAaAB7wWqAQMwLja4AQPIAQD4AQH4AQLCAgsQABiABBixAxiDAcICBxAAGIoFGEPCAgYQABgHGB7CAggQABiABBixA8ICBBAAGAOIBgE&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, 'jw생명과학')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/lg')
  async getDataLG(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22lg%ED%99%94%ED%95%99%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKkH2M_gsmVOcGzKn8yb4IIn80M9fQ%3A1697422024359&ei=yJosZa_JFdPa-QauvaX4Dw&ved=0ahUKEwivza7mvfmBAxVTbd4KHa5eCf8Q4dUDCA0&uact=5&oq=%22lg%ED%99%94%ED%95%99%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiCiJsZ-2ZlO2VmSIyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESPwWUIQDWIcOcAB4AJABAJgBwAGgAZ4EqgEDMC40uAEDyAEA-AEC-AEBwgIHEAAYigUYQ8ICCBAAGIAEGLEDiAYB&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, 'lg화학')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/sk')
  async getDataSK(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22sk%ED%94%8C%EB%9D%BC%EC%A6%88%EB%A7%88%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKlZw-4FRkw72dqJIXtNCcoffHcf-Q%3A1697421880617&ei=OJosZbisJZvj-AbV2auwBA&ved=0ahUKEwi4qOmhvfmBAxWbMd4KHdXsCkYQ4dUDCA0&uact=5&oq=%22sk%ED%94%8C%EB%9D%BC%EC%A6%88%EB%A7%88%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiECJza-2UjOudvOymiOuniCIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESPJGUOYnWKFCcAJ4AJABAJgBf6ABvwWqAQMwLja4AQPIAQD4AQH4AQKoAgDCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIHEAAYigUYQ4gGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, 'sk플라즈마')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/nexus')
  async getDataNEXUS(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22%EB%84%A5%EC%84%9C%EC%8A%A4%ED%8C%8C%EB%A7%88%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKledVdjJfAfdSDOnZ0isHoYP_Dt9A%3A1697421907787&ei=U5osZZbWL4_d-QbInoKIAg&ved=0ahUKEwjWy-OuvfmBAxWPbt4KHUiPACEQ4dUDCA0&uact=5&oq=%22%EB%84%A5%EC%84%9C%EC%8A%A4%ED%8C%8C%EB%A7%88%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiESLrhKXshJzsiqTtjIzrp4giMgUQABiABDIFEAAYgAQyBBAAGB5I-w5QrAVYgQtwAHgAkAEAmAHFAaABvgaqAQMwLja4AQPIAQD4AQH4AQLCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIEEAAYA4gGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '넥서스파마')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/dr')
  async getDataDARIM(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22%EB%8B%A4%EB%A6%BC%ED%8B%B0%EC%84%BC%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKkd_RhQIcAl3ntP_y0Z_OTOi7idsA%3A1697421930089&ei=aposZdCJBZH_wAOh_ruQDw&ved=0ahUKEwjQ5rS5vfmBAxWRP3AKHSH_DvIQ4dUDCA0&uact=5&oq=%22%EB%8B%A4%EB%A6%BC%ED%8B%B0%EC%84%BC%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDiLri6Trprzti7DshLwiMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIEEAAYHjIEEAAYHjIEEAAYHkjSClCcBFicBHAAeACQAQCYAZoBoAGcA6oBAzAuM7gBA8gBAPgBAvgBAcICBhAAGAcYHogGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '다림티센')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/do')
  async getDataDAEUNG(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22%EB%8C%80%EC%9B%85%EC%A0%9C%EC%95%BD%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKkLOtLXaOzNrJJNjd5oycS1m6QJ0w%3A1697421965177&ei=jZosZdeyCqb21e8PlNq1mAs&ved=0ahUKEwiXrZLKvfmBAxUme_UHHRRtDbMQ4dUDCA0&uact=5&oq=%22%EB%8C%80%EC%9B%85%EC%A0%9C%EC%95%BD%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDiLrjIDsm4XsoJzslb0iMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEipB1DfA1jfA3AAeACQAQCYAdIBoAGrA6oBBTAuMi4xuAEDyAEA-AEC-AEBwgIEEAAYHogGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '대웅제약')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/dw')
  async getDataDAWON(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22%EB%8C%80%EC%9B%90%EC%A0%9C%EC%95%BD%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKm1vtFDbnNG2SoJ19t8NU1rUigZ3w%3A1697421982535&ei=nposZfWhINq2oATN4IvoAQ&ved=0ahUKEwj16LXSvfmBAxVaG4gKHU3wAh0Q4dUDCA0&uact=5&oq=%22%EB%8C%80%EC%9B%90%EC%A0%9C%EC%95%BD%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDiLrjIDsm5DsoJzslb0iMgcQABiKBRhDMgcQABiKBRhDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIpgdQkwRYkwRwAHgAkAEAmAHNAaAB3gOqAQUwLjIuMbgBA8gBAPgBAvgBAYgGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '대원제약')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/kr')
  async getDataKR(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22%EB%8C%80%ED%95%9C%EC%95%BD%ED%92%88%EA%B3%B5%EC%97%85%22&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKmWIex_uGJ3nfdv4PVCzNLbYcWiJA%3A1697421995346&ei=q5osZZLcFN7V1e8P6uW4yAE&ved=0ahUKEwjS3cPYvfmBAxXeavUHHeoyDhkQ4dUDCA0&uact=5&oq=%22%EB%8C%80%ED%95%9C%EC%95%BD%ED%92%88%EA%B3%B5%EC%97%85%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiFCLrjIDtlZzslb3tkojqs7Xsl4UiMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgQQABgeMgYQABgeGA8yBBAAGB4yBhAAGB4YD0iYB1CrBFirBHAAeACQAQCYAakBoAGUA6oBAzAuM7gBA8gBAPgBAvgBAcICBxAAGIoFGEOIBgE&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '대한약품공업')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
  @Get('/dmf')
  async getDataDMF(): Promise<any> {
    const url =
      'https://www.google.com/search?q=%22%EB%8D%94%EB%A7%88%ED%8E%8C&sca_esv=573670241&biw=1130&bih=969&tbs=qdr%3Aw&tbm=nws&sxsrf=AM9HkKnqQaW_VDpjKTU1Gj0BF9dBEiNhJw%3A1697422009553&ei=uZosZfO5IYuI-Qb3mq-QBA&ved=0ahUKEwiz-qbfvfmBAxULRN4KHXfNC0IQ4dUDCA0&uact=5&oq=%22%EB%8D%94%EB%A7%88%ED%8E%8C&gs_lp=Egxnd3Mtd2l6LW5ld3MiCiLrjZTrp4jtjowyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJQKUKEFWKEFcAB4AJABAJgBpgGgAZ4DqgEDMC4zuAEDyAEA-AEC-AEBwgIEEAAYHsICBhAAGB4YD4gGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '더마펌')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
}
