const users: { [uuid: string]: {} } = {};

const manager = {
    addUser(uuid: string, nickname: string, profile: string) {
        users[uuid] = { nickname: nickname, profile: profile };
    },
    removeUser(uuid: string) {
        delete users[uuid]
    },
    get() {
        return users;
    }
}

export default manager;