import {Socket} from './socket';
import Users from '../../database/Users';
import {logger, ws} from '../../index';
import WebSocket from 'ws';
import UserManager from '../UserManager';

export class JoinSocket implements Socket {
    run(client: any, action: string, data: any): void {
        const uuid = data[0].uuid;
        const nickname = data[0].nickname;
        const profile = data[0].profile;

        Users.findOne({where: {uuid: uuid}})
            .then((data: any) => {
                if (data.dataValues.isBanned) {
                    logger.info(`접근 차단된 ${uuid} 사용자가 접속을 시도하였습니다.`);
                    client.send(JSON.stringify({action: 'ban', data: [{reason: '당신은 관리자에 의하여 차단된 사용자입니다.'}]}));
                    return;
                }
            })
            .catch(() => {

            });

        UserManager.addUser(uuid, nickname, profile, client);

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(JSON.stringify({action: 'user', data: [{ users: UserManager.gets() }]}));
            }
        });
    }
}