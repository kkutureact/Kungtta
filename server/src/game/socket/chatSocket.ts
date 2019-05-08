import {Socket} from './socket';
import {logger, ws} from '../../index';
import WebSocket from 'ws';
import {FilteringBadWord} from '../chat/filteringBadWord';
import {CommandHandler} from '../commands/commandHandler';

export class ChatSocket implements Socket {
    run(client: any, action: string, data: any): void {
        const editedData = data[0];
        editedData.text = FilteringBadWord(data[0].text);

        if(data[0].text.startsWith('/')) {
            const args = data[0].text.substring(1).split(' ');

            CommandHandler(args[0], args, data[0].uuid);
            return;
        }

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(JSON.stringify({action: 'chat', data: [editedData]}));
            }
        });
    }
}