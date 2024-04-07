import { Page } from "playwright-core";

export interface FirstScrapeResult {
  title: string;
  downloadPageUrl: string;
}

export default class FirstScrapper {
  public static async getTitle(page: Page) {
    const titleLocator = page.locator("#pageContent > h2:nth-child(2)");
    const title = await titleLocator.innerText();

    return title;
  }

  public static async getDownloadPageUrl(
    page: Page,
    targetUrlOrigin: string
  ): Promise<FirstScrapeResult[]> {
    const result: Array<FirstScrapeResult> = [];
    const hrefSelector = "td:nth-child(3) > a";
    const allRows = await page.locator("#songlist > tbody > tr").all();

    const musicRows = allRows.slice(1, -1); // does not include row header and row footer

    for (const row of musicRows) {
      const anchor = row.locator(hrefSelector);

      result.push({
        title: (await anchor.textContent()) as string,
        downloadPageUrl: (targetUrlOrigin +
          (await anchor.getAttribute("href"))) as string,
      });
    }

    return result;
  }
}
