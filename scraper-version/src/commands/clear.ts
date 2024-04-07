import { rm, unlink } from "fs/promises";
import Config from "../config";
import Utilities from "../utilities";
import path from "node:path";
import { Command } from ".";

export default class Clear implements Command {
  public async run(): Promise<void> {
    const downloadDir = path.resolve("../", Config.downloadedPath);
    const urlDir = path.resolve("../", Config.outputAllUrl);

    const downloadedDirectory = Utilities.readDirectory(downloadDir);
    const outputUrlFiles = Utilities.readDirectory(urlDir);

    for (const directory of downloadedDirectory) {
      const dir = path.join(Config.downloadedPath, directory.name);

      await rm(dir, { recursive: true, force: true });
    }

    for (const file of outputUrlFiles) {
      const filename = path.join(Config.downloadedPath, file.name);

      await rm(filename);
    }
  }
}
