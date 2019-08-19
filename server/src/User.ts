export default class User {
    nickname: string = '';
    profile: string = '';
    client: WebSocket = {} as WebSocket;

    constructor (nickname: string, profile: string, client: WebSocket) {
        this.nickname = nickname;
        this.profile = profile;
        this.client = client;
    }

    setNickname(nickname: string) {
        this.nickname = nickname;
    }

    getNickname(): string {
        return this.nickname;
    }

    setProfile(profile: string) {
        this.profile = profile;
    }

    getProfile(): string {
        return this.profile;
    }

    setClient(client: WebSocket) {
        this.client = client;
    }

    getClient(): WebSocket {
        return this.client;
    }
};