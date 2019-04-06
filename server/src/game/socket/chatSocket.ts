import {ISocket} from './ISocket';
import {ws} from '../../index';
import WebSocket from 'ws';

export class ChatSocket implements ISocket {
    run(client: any, action: string, data: any): void {
        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(JSON.stringify({action: 'chat', data: data}));
            }
        });
    }
}