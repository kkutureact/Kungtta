import {ISocket} from './ISocket';
import UserManager from '../UserManager';
import {ws} from '../../index';
import WebSocket from 'ws';

export class QuitSocket implements ISocket {
    run(client: any, action: string, data: any): void {
        const uuid = data[0].uuid;

        UserManager.removeUser(uuid);
        client.close();

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(JSON.stringify({action: 'user', data: [{ users: UserManager.get() }]}));
            }
        });
    }
}