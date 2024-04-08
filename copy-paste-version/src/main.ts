import FirstScraper from "./scrapers/first-scraper";
import SecondScraper from "./scrapers/second-scraper";
import Utilities from "./utilities";

export default class Main {
    public static async main(): Promise<void> {
      const downloadUrls: Array<string> = [];
      const option = Utilities.showOptions();
      const downloadPageUrls = await FirstScraper.getDownloadPageUrls();

      for (let index = 0; index < downloadPageUrls.length; index++) {
        const donwloadUrl = await SecondScraper.getDownloadUrl(
          downloadPageUrls[index],
          option
        );
        downloadUrls.push(donwloadUrl);
      }

      Utilities.showResult(downloadUrls);
    }
  }
