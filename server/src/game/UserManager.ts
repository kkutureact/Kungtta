interface UserManagerType {
    readonly nickname: string;
    readonly profile: string;
    readonly client: WebSocket;
}

const users: { [uuid: string]: UserManagerType } = {};

const manager = {
    addUser (uuid: string, nickname: string, profile: string, client: WebSocket): void {
        users[uuid] = { nickname: nickname, profile: profile, client: client };
    },
    removeUser (uuid: string): void {
        delete users[uuid];
    },
    gets (): object {
        return users;
    },
    get (uuid: string): UserManagerType {
        return users[uuid];
    },
    size (): number {
        return Object.keys(users).length;
    }
};

export default manager;
