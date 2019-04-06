import {logger, ws} from '../index';
import msgpack from 'msgpack-lite';
import { SocketHandler } from './socketHandler';

export const Game = () => {
    ws.on('connection', (client) => {
        client.on('message', (message: Buffer) => {
            const json = msgpack.decode(message);
            const action = json.action;
            const data = json.data;

            logger.info(`[WebSocket] ${action} : ${JSON.stringify(data)}`);
            SocketHandler(client, action, data);
        });
    });
}