import { Socket } from './socket';
import { ws } from '../../index';
import WebSocket from 'ws';
import RoomManager from '../../RoomManager'
import msgpack from 'msgpack-lite';

export class RoomSocket implements Socket {
    run (client: any, action: string, data: any): void {
        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(msgpack.encode({ action: 'room', data: [{ users: RoomManager.gets() }] }));
            }
        });
    }
}