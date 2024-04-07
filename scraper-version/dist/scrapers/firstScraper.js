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
class FirstScrapper {
    static getTitle(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const titleLocator = page.locator("#pageContent > h2:nth-child(2)");
            const title = yield titleLocator.innerText();
            return title;
        });
    }
    static getDownloadPageUrl(page, targetUrlOrigin) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const hrefSelector = "td.clickable-row > a";
            const allRows = yield page.locator("#songlist > tbody > tr").all();
            const musicRows = allRows.slice(1, -1); // does not include row header and row footer
            for (const row of musicRows) {
                const anchor = row.locator(hrefSelector);
                result.push({
                    title: (yield anchor.textContent()),
                    downloadPageUrl: (targetUrlOrigin +
                        (yield anchor.getAttribute("href"))),
                });
            }
            return result;
        });
    }
}
exports.default = FirstScrapper;
