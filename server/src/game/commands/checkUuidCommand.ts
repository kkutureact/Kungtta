import {Command} from './command';
import UserManager from '../UserManager';

export class CheckUuidCommand implements Command {
    run(command: string, args: string[], myself: string): void {
        const data = {'nickname': '당신의 UUID:', 'text': myself, isNotice: false};
        UserManager.get(myself).client.send(JSON.stringify({action: 'chat', data: [data]}));
    }
}