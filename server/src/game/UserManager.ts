interface Data {
    readonly nickname: string;
    readonly profile: string;
    readonly client: WebSocket;
}

const users: { [uuid: string]: Data } = {};

const manager = {
    addUser(key: string, nickname: string, profile: string, client: WebSocket) {
        users[key] = { nickname: nickname, profile: profile, client: client };
    },
    removeUser(uuid: string) {
        delete users[uuid];
    },
    gets() {
        return users;
    },
    get(uuid: string) {
        return users[uuid];
    }
};

export default manager;