"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
class Utilities {
    // public static getConsoleArguments(): Array<string> {
    //     return process.argv.slice(2);
    // }
    static writeUrlOutput(path, url) {
        const ext = '.txt';
        node_fs_1.default.appendFileSync(path + ext, url + "\n");
    }
}
exports.default = Utilities;
