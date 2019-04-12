import {ISocket} from './ISocket';
import {logger} from '../../index';

export class QuitSocket implements ISocket {
    run(client: any, action: string, data: any): void {
        const uuid = data[0].uuid;

        logger.info('나감 ' + uuid)

        //TODO: 나간 유저 목록에서 제거
    }
}