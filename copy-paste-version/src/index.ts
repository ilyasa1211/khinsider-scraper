type MP3 = {
  number: 9;
  type: "mp3";
};

type FLAC = {
  number: 10;
  type: "flac";
};

type Option = MP3 | FLAC;

namespace Index {
  export class Main {
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

  export class Utilities {
    public static showOptions(): Option {
      let option: Option = {
        number: 10,
        type: "flac",
      };

      const userInput = prompt("Choose:\n1. MP3\n2. FLAC");

      if (userInput == "1") {
        option = {
          number: 9,
          type: "mp3",
        };
      }

      console.log(`GETTING LINKS FOR ${option.type}`);

      return option;
    }

    public static showResult(downloadUrls: Array<string>): void {
      Array.from(document.body.children).forEach((child) => child.remove());

      const pre = document.createElement("pre");

      const copyButton = document.createElement("input");
      const copyMessage = document.createElement("p");

      copyMessage.textContent = "Copied!";
      copyMessage.setAttribute("id", "copy-message");
      copyMessage.style.visibility = "hidden";

      pre.textContent = downloadUrls.join("\n");

      copyButton.setAttribute("type", "button");
      copyButton.setAttribute("id", "copy-button");
      copyButton.setAttribute("value", "Copy to clipboard");

      copyButton.onclick = async function (_e) {
        navigator.clipboard.writeText(pre.textContent as string);
        copyMessage.style.visibility = "visible";
        setTimeout(() => {
          copyMessage.style.visibility = "hidden";
        }, 2000);
      };

      document.body.appendChild(pre);
      document.body.appendChild(copyButton);
      document.body.appendChild(copyMessage);
    }

    public static async htmlFetch(url: string) {
      const response = await fetch(url);
      const html = await response.text();

      return new DOMParser().parseFromString(html, "text/html");
    }
  }

  export class FirstScraper {
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

  export class SecondScraper {
    public static async getDownloadUrl(url: string, type: Option) {
      const doc = await Utilities.htmlFetch(url);

      const hrefSelector = `#pageContent > p:nth-child(${type.number}) > a`;
      const anchor = doc.querySelector(hrefSelector) as HTMLAnchorElement;

      return anchor.getAttribute("href") as string;
    }
  }
}

Index.Main.main();
