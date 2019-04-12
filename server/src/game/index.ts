import {logger, ws} from '../index';
import msgpack from 'msgpack-lite';
import {ISocket} from './socket/ISocket';
import {ChatSocket, JoinSocket, QuitSocket} from './socket/index';

const socketHandleList: { [k: string]: ISocket } = {};
socketHandleList.join = new JoinSocket();
socketHandleList.chat = new ChatSocket();
socketHandleList.quit = new QuitSocket();

export const Game = () => {
    ws.on('connection', (client) => {
        client.on('message', (message: Buffer) => {
            const json = msgpack.decode(message);
            const action = json.action;
            const data = json.data;

            logger.info(`[WebSocket] ${action} : ${JSON.stringify(data)}`);
            socketHandleList[action].run(client, action, data);
        });
    });
};