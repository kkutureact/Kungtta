import { Command } from './command';
import msgpack from 'msgpack-lite';

export class ClearChatCommand implements Command {
    run(command: string, args: string[], myuuid: string, myclient: WebSocket): void {
        myclient.send(msgpack.encode({ action: 'clearchat', data: [] }));
    }
}