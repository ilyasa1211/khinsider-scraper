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
const promises_1 = require("fs/promises");
const config_1 = __importDefault(require("../config"));
const utilities_1 = __importDefault(require("../utilities"));
const node_path_1 = __importDefault(require("node:path"));
class Clear {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const downloadDir = node_path_1.default.resolve("../", config_1.default.downloadedPath);
            const urlDir = node_path_1.default.resolve("../", config_1.default.outputAllUrl);
            const downloadedDirectory = utilities_1.default.readDirectory(downloadDir);
            const outputUrlFiles = utilities_1.default.readDirectory(urlDir);
            for (const directory of downloadedDirectory) {
                const dir = node_path_1.default.join(config_1.default.downloadedPath, directory.name);
                yield (0, promises_1.rm)(dir, { recursive: true, force: true });
            }
            for (const file of outputUrlFiles) {
                const filename = node_path_1.default.join(config_1.default.downloadedPath, file.name);
                yield (0, promises_1.rm)(filename);
            }
        });
    }
}
exports.default = Clear;
