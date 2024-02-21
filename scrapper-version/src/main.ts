import { Page, chromium } from "playwright";
import Config from "./config";
import FirstScrapper from "./scrapers/firstScraper";
import SecondScraper from "./scrapers/secondScraper";
import Utilities from "./utilities";
import path from "path";

export default class Main {
  public static async main(): Promise<void> {
    const target = new URL(Config.targetUrl);

    console.log("Opening a browser...");

    const browser = await chromium.launch();
    const page = await browser.newPage();
    page.setDefaultTimeout(0);

    console.log("Searching the url..");

    // First Page
    await page.goto(target.href);
    const title = await FirstScrapper.getTitle(page);
    const rows = await FirstScrapper.getDownloadPageUrl(page, target.origin);

    console.log("Count: %d", rows.length);

    // Second Page
    for (let index = rows.length - 3; index < rows.length; index++) {
      console.log("Getting download url for: ", rows[index].title);

      // Save the downloaded file to downloads directory
      const downloadUrl = await SecondScraper.download(
        page,
        rows[index].downloadPageUrl,
        path.resolve(Config.downloadedPath, title, rows[index].title)
      );

      // Write result urls to urls directory

      Utilities.writeUrlOutput(
        path.resolve(Config.outputAllUrl, title),
        downloadUrl as string
      );
    }

    console.log("Done!");

    page.close();

    process.exit();
  }
}
