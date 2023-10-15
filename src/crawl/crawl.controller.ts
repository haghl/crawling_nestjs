import { Controller, Get } from '@nestjs/common'
import { CrawlService } from './crawl.service'

@Controller('crawl')
export class CrawlController {
  constructor(private readonly crawlService: CrawlService) {}

  @Get('/gc')
  async getDataGC(): Promise<any> {
    const url =
      'https://www.google.co.kr/search?q=%22gc%EB%85%B9%EC%8B%AD%EC%9E%90%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKneEYMHWUARE5MHPeXh5I0vT12Dvg%3A1697385982531&ei=_g0sZaP9H-fT1e8Ppb2WcA&ved=0ahUKEwij9KPEt_iBAxXnafUHHaWeBQ4Q4dUDCA0&uact=5&oq=%22gc%EB%85%B9%EC%8B%AD%EC%9E%90%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDSJnY-uFueyLreyekCIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESMKBAVCUeliUenACeACQAQCYAXWgAcUCqgEDMC4zuAEDyAEA-AEC-AEBwgIHEAAYigUYQ4gGAQ&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22jw%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKlrzrQp8_zi5k3lENo4XSGyz1b_gw%3A1697386007951&ei=Fw4sZZ_cOda5hwO8v724CQ&ved=0ahUKEwjfw7PQt_iBAxXW3GEKHbxfD5cQ4dUDCA0&uact=5&oq=%22jw%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiECJqd-yDneuqheqzvO2VmSIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB5Iih9Q4QFY1RZwAHgAkAEAmAGUAaAB6gKqAQMwLjO4AQPIAQD4AQL4AQHCAgUQABiiBIgGAQ&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22lg%ED%99%94%ED%95%99%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKmNbudATfKSJ84EaKqWYYr4Vc0NrA%3A1697386025994&ei=KQ4sZaylPM_3hwOMpbDYBA&ved=0ahUKEwjs3YDZt_iBAxXP-2EKHYwSDEsQ4dUDCA0&uact=5&oq=%22lg%ED%99%94%ED%95%99%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiCiJsZ-2ZlO2VmSIyBxAAGIoFGEMyBxAAGIoFGEMyBRAAGIAEMgUQABiABDIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzIFEAAYgAQyBxAAGIoFGENI_hRQzQdYzwxwAHgAkAEAmAFzoAGIBaoBAzEuNbgBA8gBAPgBAfgBAsICBBAAGB7CAgsQABiABBixAxiDAcICBBAAGAPCAgYQABgHGB6IBgE&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22sk%ED%94%8C%EB%9D%BC%EC%A6%88%EB%A7%88%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKn6iXQEIYTuHo473kLzINZiewKszQ%3A1697386039926&ei=Nw4sZfGTOJDX1e8P5tiNiAM&ved=0ahUKEwixi9Pft_iBAxWQa_UHHWZsAzEQ4dUDCA0&uact=5&oq=%22sk%ED%94%8C%EB%9D%BC%EC%A6%88%EB%A7%88%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiECJza-2UjOudvOymiOuniCIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESPoRUOsJWOsJcAB4AJABAJgBfqAB3QKqAQMwLjO4AQPIAQD4AQL4AQHCAgcQABiKBRhDwgIGEAAYBxgeiAYB&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22%EB%84%A5%EC%84%9C%EC%8A%A4%ED%8C%8C%EB%A7%88%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKloTj5Iqw5EtXgVs6dVwpZGrFsy9A%3A1697385794797&ei=Qg0sZb-rMJuhhwP47L7ADg&ved=0ahUKEwi_1OHqtviBAxWb0GEKHXi2D-gQ4dUDCA0&oq=%22%EB%84%A5%EC%84%9C%EC%8A%A4%ED%8C%8C%EB%A7%88%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiESLrhKXshJzsiqTtjIzrp4giMgUQABiABDIFEAAYgAQyBBAAGB5IlK8BUABYAHAAeACQAQCYAW6gAW6qAQMwLjG4AQzIAQCIBgE&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22%EB%8B%A4%EB%A6%BC%ED%8B%B0%EC%84%BC%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKlAPWuLcHfo372WSdBvlQ7tuDfhlg%3A1697385822851&ei=Xg0sZdvJM7DW1e8PyLayqAo&ved=0ahUKEwjb8JH4tviBAxUwa_UHHUibDKUQ4dUDCA0&uact=5&oq=%22%EB%8B%A4%EB%A6%BC%ED%8B%B0%EC%84%BC%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDiLri6Trprzti7DshLwiMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIEEAAYHjIEEAAYHjIEEAAYHkj-cVD6U1izcHACeACQAQGYAYABoAHXCqoBBDAuMTK4AQPIAQD4AQHCAgQQABgDwgILEAAYgAQYsQMYgwHCAgYQABgHGB7CAgcQABgNGIAEwgIGEAAYHhgNiAYB&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22%EB%8C%80%EC%9B%85%EC%A0%9C%EC%95%BD%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKngxLGEChO6LY8okMq204sIDH0Mkg%3A1697385876368&ei=lA0sZaKRFrvW1e8PhNCauAw&ved=0ahUKEwiiq9SRt_iBAxU7a_UHHQSoBscQ4dUDCA0&uact=5&oq=%22%EB%8C%80%EC%9B%85%EC%A0%9C%EC%95%BD%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDiLrjIDsm4XsoJzslb0iMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEj9cVDlPljvbHAGeACQAQKYAZEBoAHHD6oBBDAuMTe4AQPIAQD4AQHCAgQQABgewgIIEAAYgAQYsQPCAgQQABgDwgIGEAAYBxgewgIFEAAYogTCAgcQABgNGIAEiAYB&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22%EB%8C%80%EC%9B%90%EC%A0%9C%EC%95%BD%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKmlKYXhkkmhvaCj1Eua8GXZPMrqwg%3A1697385902809&ei=rg0sZdegL9ao-Qb96r_gBw&ved=0ahUKEwjXr6Cet_iBAxVWVN4KHX31D3wQ4dUDCA0&uact=5&oq=%22%EB%8C%80%EC%9B%90%EC%A0%9C%EC%95%BD%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiDiLrjIDsm5DsoJzslb0iMgcQABiKBRhDMgcQABiKBRhDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI3VlQ5TtY8z9wAXgAkAEAmAGWAaABzQaqAQMwLje4AQPIAQD4AQHCAgYQABgHGB7CAgUQABiiBIgGAQ&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22%EB%8C%80%ED%95%9C%EC%95%BD%ED%92%88%EA%B3%B5%EC%97%85%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKlSI5PCi60VY1t4vgopIf0OhhMqdQ%3A1697385928918&ei=yA0sZafVN8bg-AaG_rewCA&ved=0ahUKEwin2duqt_iBAxVGMN4KHQb_DYYQ4dUDCA0&uact=5&oq=%22%EB%8C%80%ED%95%9C%EC%95%BD%ED%92%88%EA%B3%B5%EC%97%85%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiFCLrjIDtlZzslb3tkojqs7Xsl4UiMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgQQABgeMgYQABgeGA8yBBAAGB4yBhAAGB4YD0iLXlCeLViJWnAEeACQAQCYAa4BoAHHE6oBBDAuMjG4AQPIAQD4AQHCAgcQABiKBRhDwgIEEAAYA8ICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgcQABgNGIAEwgIGEAAYBxgewgIJEAAYBxgeGPEEwgIIEAAYBxgeGA_CAgYQABgeGA3CAgUQABiiBMICCBAAGB4YDRgPiAYB&sclient=gws-wiz-news'

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
      'https://www.google.co.kr/search?q=%22%EB%8D%94%EB%A7%88%ED%8E%8C%22&sca_esv=573484139&biw=1376&bih=1274&tbm=nws&sxsrf=AM9HkKkgee_-2bHPthg8QYEybhgI27wd8w%3A1697385950014&ei=3g0sZYBA_aHV7w_xi7WoAg&ved=0ahUKEwiAp-O0t_iBAxX9UPUHHfFFDSUQ4dUDCA0&uact=5&oq=%22%EB%8D%94%EB%A7%88%ED%8E%8C%22&gs_lp=Egxnd3Mtd2l6LW5ld3MiCyLrjZTrp4jtjowiMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiiQlCmOliKQXADeACQAQKYAYUBoAH2CKoBBDAuMTC4AQPIAQD4AQHCAgQQABgewgIGEAAYHhgPwgIEEAAYA8ICCxAAGIAEGLEDGIMBwgIGEAAYBxgewgIHEAAYDRiABIgGAQ&sclient=gws-wiz-news'

    try {
      const data = await this.crawlService.scrapeData(url, '더마펌')

      return data
    } catch (error) {
      throw new Error('Failed to fetch or scrape data')
    }
  }
}
