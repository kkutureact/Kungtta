import User from './User';

interface RoomManagerType {
    readonly title: string;
    readonly users: User[];
    readonly type: string;
    readonly isStarted: boolean;
    readonly max: number;
}

const rooms: { [roomId: string]: RoomManagerType } = {};
let instance: any;

class RoomManager {

    constructor () {
        if (instance) return instance;
        instance = this;
    }

    addRoom (id: string, title: string, users: User[], type: string, max: number) {
        rooms[id] = { title: title, users: users, type: type, isStarted: false, max: max };
    }

    removeRoom (id: string) {
        delete rooms[id];
    }

    gets (): object {
        return rooms;
    }

    get (id: string): RoomManagerType {
        return rooms[id];
    }

    size (): number {
        return Object.keys(rooms).length;
    }
};

export default new RoomManager();