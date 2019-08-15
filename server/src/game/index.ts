import { logger, ws } from '../index';
import msgpack from 'msgpack-lite';
import { Socket } from './socket/socket';
import { ChatSocket, JoinSocket, QuitSocket } from './socket/index';

const socketHandleList: { [k: string]: Socket } = {};
socketHandleList.join = new JoinSocket();
socketHandleList.chat = new ChatSocket();
socketHandleList.quit = new QuitSocket();

export const Game = () => {
    ws.on('connection', (client: any) => {
        client.on('message', (message: Buffer) => {
            const json = msgpack.decode(message);
            const action = json.action;
            const data = json.data;

            logger.info(`[CLIENT] @${client._socket.remoteAddress} ${action} : ${JSON.stringify(data)}`);
            socketHandleList[action].run(client, action, data);
        });
    });
};