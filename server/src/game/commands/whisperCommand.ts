import { Command } from './command';
import UserManager from '../../UserManager';

export class WhisperCommand implements Command {
    run (command: string, args: string[], myuuid: string, myclient: WebSocket): void {
        const targetNickname = args[1];
        const targetUuid = Object.keys(UserManager.gets()).find(key => UserManager.get(key).nickname === targetNickname);
        const targetUser = UserManager.get(targetUuid!);

        if (targetUuid !== undefined && targetUser !== undefined) {
            const senderNickname = UserManager.get(myuuid).nickname;
            const text = args.slice(2).join(' ');
            const data = { 'nickname': `From @${senderNickname}`, 'text': text, isNotice: false };
            const senderData = { 'nickname': `To @${targetNickname}`, 'text': text, isNotice: false };

            targetUser.client.send(JSON.stringify({ action: 'chat', data: [data] }));
            myclient.send(JSON.stringify({ action: 'chat', data: [senderData] }));
        } else {
            const data = { 'nickname': `귓속말`, 'text': '존재하지 않는 사용자입니다. (닉네임은 대소문자를 구분합니다.)', isNotice: true };
            myclient.send(JSON.stringify({ action: 'chat', data: [data] }));
        }
    }
}
