import { Page } from "playwright-core";

export default class SecondScraper {
  public static async getDownloadUrl(page: Page, downloadPageUrl: string) {
    await page.goto(downloadPageUrl);
    const anchorSelector = "#pageContent > p:nth-child(10) > a";
    const anchor = page.locator(anchorSelector);
    const donwloadUrl = await anchor.getAttribute("href");

    return donwloadUrl as string;
  }

  public static async download(page: Page, downloadPageUrl: string, path: string) {
    const ext = ".mp3";

    await page.goto(downloadPageUrl);
    const anchorSelector = "#pageContent > p:nth-child(10) > a";
    const downloadPromise = page.waitForEvent("download");
    const anchor = page.locator(anchorSelector);
    await anchor.click();
    const download = await downloadPromise;

    await download.saveAs(path + ext);

    return anchor.getAttribute("href");
  }
}
