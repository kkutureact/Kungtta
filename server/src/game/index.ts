import {logger, ws} from '../index';
import msgpack from 'msgpack-lite';
import { SocketHandler } from './socketHandler';

export const Game = () => {
    ws.on('connection', (client) => {
        client.on('message', (message: Buffer) => {
            const json = JSON.parse(JSON.stringify(msgpack.decode(message)));
            const action = json.action;
            const data = json.data;

            SocketHandler(client, action, data);

            client.send(JSON.stringify({action: 'test', data: 'something'}));
        });
    });
}