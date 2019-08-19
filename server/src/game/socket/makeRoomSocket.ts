import { Socket } from './socket';
import { ws } from '../../index';
import WebSocket from 'ws';
import RoomManager from '../../RoomManager';
import UserManager from '../../UserManager';
import msgpack from 'msgpack-lite';

export class MakeRoomSocket implements Socket {
    run (client: any, action: string, data: any): void {
        const id = parseInt(data[0].id, 10);
        const owner = data[0].owner;
        const title = data[0].title;
        const type = data[0].type;
        const max = data[0].max;

        const users = [];
        users.push(UserManager.get(owner));

        RoomManager.addRoom(id, title, users, type, max);

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(msgpack.encode({ action: 'room', data: [{ users: RoomManager.gets() }] }));
            }
        });
    }
}