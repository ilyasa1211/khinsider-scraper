"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
class Config {
}
Config.autoDownload = false;
Config.downloadedPath = path_1.default.resolve(__dirname, '../downloads');
Config.outputAllUrl = path_1.default.resolve(__dirname, '../urls');
Config.targetUrl = process.env.TARGET_URL;
Config.chromeExecutablePath = process.env.CHROME_EXECUTABLE_PATH;
exports.default = Config;
