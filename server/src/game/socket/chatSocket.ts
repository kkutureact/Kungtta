import {ISocket} from './ISocket';
import {ws} from '../../index';
import WebSocket from 'ws';
import { FilteringBadWord } from '../filteringBadWord';

export class ChatSocket implements ISocket {
    run(client: any, action: string, data: any): void {
        const editedData = data[0];
        editedData.text = FilteringBadWord(data[0].text);

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(JSON.stringify({action: 'chat', data: [editedData]}));
            }
        });
    }
}