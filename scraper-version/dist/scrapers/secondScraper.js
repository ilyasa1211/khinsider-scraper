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
Object.defineProperty(exports, "__esModule", { value: true });
class SecondScraper {
    static getDownloadUrl(page, downloadPageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.goto(downloadPageUrl);
            const anchorSelector = "#pageContent > p:nth-child(10) > a";
            const anchor = page.locator(anchorSelector);
            const donwloadUrl = yield anchor.getAttribute("href");
            return donwloadUrl;
        });
    }
    static download(page, downloadPageUrl, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const ext = ".flac";
            yield page.goto(downloadPageUrl);
            const anchorSelector = "#pageContent > p:nth-child(10) > a"; //  10th child for .flac, 9th for .mp3
            const downloadPromise = page.waitForEvent("download");
            const anchor = page.locator(anchorSelector);
            yield anchor.click();
            const download = yield downloadPromise;
            yield download.saveAs(path + ext);
            return anchor.getAttribute("href");
        });
    }
}
exports.default = SecondScraper;
