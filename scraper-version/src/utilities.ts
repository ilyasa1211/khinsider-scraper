import fs from "node:fs";

export default class Utilities {
  public static getConsoleArguments(): Array<string> {
    return process.argv.slice(2);
  }

  public static readDirectory(
    path: string
  ): { name: string; isDirectory: boolean }[] {
    const filenames: { name: string; isDirectory: boolean }[] = [];

    const files = fs.readdirSync(path, { withFileTypes: true });

    for (const file of files) {
      filenames.push({ name: file.name, isDirectory: file.isDirectory() });
    }

    return filenames;
  }

  public static writeUrlOutput(path: string, url: string) {
    const ext = ".txt";
    const filename = path + ext;
    const content = url + "\n";

    fs.appendFileSync(filename, content);
  }
}
