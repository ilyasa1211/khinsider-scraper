import { Option } from "../types";
import Utilities from "../utilities";

export default class SecondScraper {
  public static async getDownloadUrl(url: string, type: Option) {
    const doc = await Utilities.htmlFetch(url);

    const hrefSelector = `#pageContent > p:nth-child(${type.number}) > a`;
    const anchor = doc.querySelector(hrefSelector) as HTMLAnchorElement;

    return anchor.getAttribute("href") as string;
  }
}
