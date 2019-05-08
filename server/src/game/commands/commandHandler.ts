import {Command} from './command';
import {CheckUuidCommand} from './checkUuidCommand';

const commandList: { [k: string]: Command } = {};
commandList.uuid = new CheckUuidCommand();

export const CommandHandler = (command: string, args: string[], myself: string) => {
    if(commandList[command] !== undefined)
        commandList[command].run(command, args, myself);
};