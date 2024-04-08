import Utilities from "../utilities";

export default class FirstScraper {
    public static async getDownloadPageUrls() {
      const downloadPageUrls: Array<string> = [];
      const doc = await Utilities.htmlFetch(window.location.href);
      const songlist = doc.querySelectorAll(
        "#songlist > tbody > tr"
      ) as NodeListOf<HTMLTableRowElement>;

      const hrefSelector = "td:nth-child(3) > a";

      Array.from(songlist)
        .slice(1, -1)
        .forEach(function (element: HTMLTableRowElement) {
          const anchor = element.querySelector(
            hrefSelector
          ) as HTMLAnchorElement;
          downloadPageUrls.push(anchor.href);
        });

      return downloadPageUrls;
    }
  }
