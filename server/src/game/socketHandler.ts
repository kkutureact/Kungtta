import {logger, ws} from '../index';
import WebSocket from 'ws';
import Users from '../database/Users';

export const SocketHandler = (client: any, action: string, data: any) => {
    switch (action) {
        case 'join':
            logger.info('[WS] Join : ' + JSON.stringify(data));

            const uuid = data[0].uuid;

            Users.findOne({where: {uuid: uuid}})
                .then((data: any) => {
                    if (data.dataValues.isBanned) {
                        logger.info(`접근 차단된 ${uuid} 사용자가 접속을 시도하였습니다.`);
                        client.send(JSON.stringify({action: 'ban', data: [{reason: '당신은 관리자에 의하여 차단된 사용자입니다.'}]}));
                    }
                });

            //TODO: 접속 된 유저를 해당 채널 목록에 넣기
            break;
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