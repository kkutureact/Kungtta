import {logger, ws} from '../index';
import WebSocket from 'ws';

export const SocketHandler = (client: any, action: string, data: string) => {
    switch (action) {
        case 'chat':
            logger.info('[WS] Chat : ' + JSON.stringify(data));
            ws.clients.forEach(eachClient => {
                if (eachClient.readyState === WebSocket.OPEN) {
                    eachClient.send(JSON.stringify({action: 'chat', data: data}));
                }
            });
            break;
        default:
            break;
    }
};