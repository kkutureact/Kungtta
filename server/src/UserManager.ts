import User from './User';

const users: { [uuid: string]: User } = {};
let instance: any;

class UserManager {

    constructor () {
        if (instance) return instance;
        instance = this;
    }

    addUser (uuid: string, nickname: string, profile: string, client: WebSocket) {
        users[uuid] = new User(nickname, profile, client);
    }

    removeUser (uuid: string)  {
        delete users[uuid];
    }

    gets (): object {
        return users;
    }

    get (uuid: string): User {
        return users[uuid];
    }

    size (): number {
        return Object.keys(users).length;
    }
};

export default new UserManager();