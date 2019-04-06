import {ISocket} from './ISocket';
import Users from '../../database/Users';
import {logger} from '../../index';

export class JoinSocket implements ISocket {
    run(client: any, action: string, data: any): void {
        const uuid = data[0].uuid;

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

        //TODO: 접속 된 유저를 해당 채널 목록에 넣기
    }
}