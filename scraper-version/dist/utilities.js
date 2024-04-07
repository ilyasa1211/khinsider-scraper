"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
class Utilities {
    static getConsoleArguments() {
        return process.argv.slice(2);
    }
    static readDirectory(path) {
        const filenames = [];
        const files = node_fs_1.default.readdirSync(path, { withFileTypes: true });
        for (const file of files) {
            filenames.push({ name: file.name, isDirectory: file.isDirectory() });
        }
        return filenames;
    }
    static writeUrlOutput(path, url) {
        const ext = ".txt";
        const filename = path + ext;
        const content = url + "\n";
        node_fs_1.default.appendFileSync(filename, content);
    }
}
exports.default = Utilities;
