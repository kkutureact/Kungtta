import { Command } from './command';
import { CheckUuidCommand, ClearChatCommand, HelpCommand, WhisperCommand } from './index';

const commandList: { [k: string]: Command } = {};
commandList.uuid = new CheckUuidCommand();
commandList.id = new CheckUuidCommand();
commandList.clear = new ClearChatCommand();
commandList['청소'] = new ClearChatCommand();
commandList.w = new WhisperCommand();
commandList['귓속말'] = new WhisperCommand();
commandList['귓'] = new WhisperCommand();
commandList.help = new HelpCommand();
commandList['도움말'] = new HelpCommand();

export const CommandHandler = (command: string, args: string[], myuuid: string, myclient: WebSocket) => {
    if (commandList[command] !== undefined) {
        commandList[command].run(command, args, myuuid, myclient);
    }
};
