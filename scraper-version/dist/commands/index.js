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
const utilities_1 = __importDefault(require("../utilities"));
const clear_1 = __importDefault(require("./clear"));
class Index {
    static index() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = utilities_1.default.getConsoleArguments()[0];
            console.info("Running command: ", action);
            this.register();
            const command = this.actions.get(action);
            if (!command) {
                console.error("command not found: ", action, "\n");
                console.info("Available commands: \n");
                return this.printAvailableCommands();
            }
            yield command.command.run();
        });
    }
    static register() {
        this.registerCommand("clear", new clear_1.default());
        // this.registerCommand("clear", new Clear());
        // register other action here...
    }
    static registerCommand(argument, object, description = undefined) {
        this.actions.set(argument, { command: object, description });
    }
    static printAvailableCommands() {
        for (const command of this.getAvailableCommands()) {
            const description = this.getCommandDescription(command);
            console.log("-", command, " ", description, " ", "\n");
        }
    }
    static getAvailableCommands() {
        return this.actions.keys();
    }
    static getCommandDescription(command) {
        var _a, _b;
        return (_b = (_a = this.actions.get(command)) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : " ";
    }
}
Index.actions = new Map();
(() => __awaiter(void 0, void 0, void 0, function* () { return yield Index.index(); }))();
