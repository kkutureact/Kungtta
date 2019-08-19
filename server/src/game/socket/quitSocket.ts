import { Socket } from './socket';
import { ws } from '../../index';
import WebSocket from 'ws';
import UserManager from '../../UserManager';
import msgpack from 'msgpack-lite';

export class QuitSocket implements Socket {
    run(client: any, action: string, data: any): void {
        const uuid = data[0].uuid;

        UserManager.removeUser(uuid);
        client.close();

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(msgpack.encode({ action: 'user', data: [{ users: UserManager.gets() }] }));
            }
        });
    }
}