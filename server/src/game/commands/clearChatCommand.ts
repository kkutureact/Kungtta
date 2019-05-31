import { Command } from './command';

export class ClearChatCommand implements Command {
    run(command: string, args: string[], myuuid: string, myclient: WebSocket): void {
        myclient.send(JSON.stringify({ action: 'clearchat', data: [] }));
    }
}