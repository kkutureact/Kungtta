interface Data {
    readonly nickname: string;
    readonly profile: string;
    readonly client: WebSocket;
}

const users: { [uuid: string]: Data } = {};

const manager = {
    addUser (key: string, nickname: string, profile: string, client: WebSocket): void {
        users[key] = { nickname: nickname, profile: profile, client: client };
    },
    removeUser (uuid: string): void {
        delete users[uuid];
    },
    gets (): object {
        return users;
    },
    get (uuid: string): object {
        return users[uuid];
    },
    size (): number {
        return Object.keys(users).length;
    }
};

export default manager;
