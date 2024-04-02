import fs from "node:fs";

export default class Utilities {
  // public static getConsoleArguments(): Array<string> {
  //     return process.argv.slice(2);
  // }

  public static writeUrlOutput(path: string, url: string) {
    const ext = '.txt';
    fs.appendFileSync(path + ext, url + "\n");
  }
}
