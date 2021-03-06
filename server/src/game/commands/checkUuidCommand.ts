import { Command } from './command';
import msgpack from 'msgpack-lite';

export class CheckUuidCommand implements Command {
    run (command: string, args: string[], myuuid: string, myclient: WebSocket): void {
        const data = { 'nickname': '당신의 UUID', 'text': myuuid, isNotice: true };
        myclient.send(msgpack.encode({ action: 'chat', data: [data] }));
    }
}
