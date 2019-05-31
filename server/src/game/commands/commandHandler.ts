import { Command } from './command';
import { CheckUuidCommand, ClearChatCommand } from './index';

const commandList: { [k: string]: Command } = {};
commandList.uuid = new CheckUuidCommand();
commandList.clear = new ClearChatCommand();
commandList['청소'] = new ClearChatCommand();

export const CommandHandler = (command: string, args: string[], myuuid: string, myclient: WebSocket) => {
    if (commandList[command] !== undefined) {
        commandList[command].run(command, args, myuuid, myclient);
    }
};
