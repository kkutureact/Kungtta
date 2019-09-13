import { Command } from './command';
import msgpack from 'msgpack-lite';

export class HelpCommand implements Command {
    run (command: string, args: string[], myuuid: string, myclient: WebSocket): void {
        const msg = [
            '/id /uuid (자신의 고유번호를 확인합니다)',
            '/귓속말 /귓 /w <닉네임> <메세지> (플레이어에게 귓속말을 보냅니다)',
            '/청소 /clear (채팅창을 비웁니다)',
            '/도움말 /help (명령어 도움말을 확인합니다)'
        ];

        msg.forEach((v) => {
            myclient.send(msgpack.encode({
                action: 'chat',
                data: [{ 'nickname': '도움말', 'text': v, isNotice: true }]
            }));
        });
    }
}
