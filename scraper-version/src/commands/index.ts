import Utilities from "../utilities";
import Clear from "./clear";

export interface Command {
  run(): Promise<void>;
}

class Index {
  private static actions: Map<
    string,
    { command: Command; description: string | undefined }
  > = new Map();

  public static async index() {
    const action = Utilities.getConsoleArguments()[0];

    console.info("Running command: ", action);

    this.register();

    const command = this.actions.get(action);

    if (!command) {
      console.error("command not found: ", action, "\n");

      console.info("Available commands: \n");
      return this.printAvailableCommands();
    }

    await command.command.run();
  }

  private static register() {
    this.registerCommand("clear", new Clear());
    // this.registerCommand("clear", new Clear());
    // register other action here...
  }

  private static registerCommand(
    argument: string,
    object: Command,
    description: string | undefined = undefined
  ) {
    this.actions.set(argument, { command: object, description });
  }

  private static printAvailableCommands(): void {
    for (const command of this.getAvailableCommands()) {
      const description = this.getCommandDescription(command);
      console.log("-", command, " ", description, " ", "\n");
    }
  }

  private static getAvailableCommands() {
    return this.actions.keys();
  }

  private static getCommandDescription(command: string): string | undefined {
    return this.actions.get(command)?.description ?? " ";
  }
}

(async () => await Index.index())();
