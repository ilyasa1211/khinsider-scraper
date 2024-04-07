"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
const config_1 = __importDefault(require("./config"));
const firstScraper_1 = __importDefault(require("./scrapers/firstScraper"));
const secondScraper_1 = __importDefault(require("./scrapers/secondScraper"));
const utilities_1 = __importDefault(require("./utilities"));
const path_1 = __importDefault(require("path"));
class Main {
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            const target = new URL(config_1.default.targetUrl);
            console.log("Opening a browser...");
            const browser = yield playwright_1.chromium.launch({
                executablePath: config_1.default.chromeExecutablePath,
            });
            const page = yield browser.newPage();
            page.setDefaultTimeout(0);
            console.log("Searching the url: ", config_1.default.targetUrl);
            // First Page
            yield page.goto(target.href);
            const title = yield firstScraper_1.default.getTitle(page);
            const rows = yield firstScraper_1.default.getDownloadPageUrl(page, target.origin);
            console.log("Title: %s", title);
            console.log("Count: %d", rows.length);
            // Second Page
            for (let index = 0; index < rows.length; index++) {
                console.log(index + 1, ".", "Downloading: ", rows[index].title);
                // Save the downloaded file to downloads directory
                const downloadUrl = yield secondScraper_1.default.download(page, rows[index].downloadPageUrl, path_1.default.resolve(config_1.default.downloadedPath, title, rows[index].title));
                // Write result urls to urls directory
                utilities_1.default.writeUrlOutput(path_1.default.resolve(config_1.default.outputAllUrl, title), downloadUrl);
            }
            console.log("Done!");
            yield page.close();
            yield browser.close();
            process.exit();
        });
    }
}
exports.default = Main;
