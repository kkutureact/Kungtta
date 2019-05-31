import { Socket } from './socket';
import { ws } from '../../index';
import WebSocket from 'ws';
import { FilteringBadWord } from '../chat/filteringBadWord';
import { CommandHandler } from '../commands/commandHandler';

export class ChatSocket implements Socket {
    run(client: any, action: string, data: any): void {
        const editedData = data[0];
        editedData.text = FilteringBadWord(data[0].text);

        if (data[0].text.startsWith('/')) {
            const args = data[0].text.substring(1).split(' ');

            CommandHandler(args[0], args, data[0].uuid, client);
            return;
        }

        if(data[0].mute) {
            const data = { 'nickname': '채팅 금지!', 'text': '당신은 현재 채팅 금지 상태입니다.', isNotice: true };
            client.send(JSON.stringify({ action: 'chat', data: [data] }));
            return;
        }

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(JSON.stringify({ action: 'chat', data: [editedData] }));
            }
        });
    }
}
