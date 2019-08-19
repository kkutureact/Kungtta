import { Socket } from './socket';
import { logger, ws } from '../../index';
import WebSocket from 'ws';
import BanList from '../../database/Banlist';
import UserManager from '../../UserManager';
import msgpack from 'msgpack-lite';

export class JoinSocket implements Socket {
    run (client: any, action: string, data: any): void {
        const uuid = data[0].uuid;
        const nickname = data[0].nickname;
        const profile = data[0].profile;

        BanList.findOne({ where: { uuid: uuid } })
            .then((data: any) => {
                if (profile !== 'guest' && data !== null) {
                    const nowUnixtime = Math.floor(Date.now() / 1000);
                    if (data.exp_date === 0 || nowUnixtime <= data.exp_date) {
                        logger.info(`접근 차단된 ${uuid} 사용자가 접속을 시도하였습니다.`);
                        client.send(msgpack.encode({ action: 'ban', data: [{ reason: data.reason, exp: data.exp_date }] }));
                    }
                    return;
                }
            })
            .catch((error) => {
                logger.error(`사용자 밴 상태 확인 중에 오류가 발생하였습니다 \nError: ${error}`);
            });

        UserManager.addUser(uuid, nickname, profile, client);

        ws.clients.forEach(eachClient => {
            if (eachClient.readyState === WebSocket.OPEN) {
                eachClient.send(msgpack.encode({ action: 'user', data: [{ users: UserManager.gets() }] }));
            }
        });
    }
}
