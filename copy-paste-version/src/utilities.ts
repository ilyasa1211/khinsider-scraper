import { Option } from "./types";

export default class Utilities {
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
