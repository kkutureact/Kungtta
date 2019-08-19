import User from './User';

interface RoomManagerType {
    readonly id: number;
    readonly title: string;
    readonly users: User[];
    readonly type: string;
    readonly isStarted: boolean;
    readonly max: number;
}

const rooms: { [roomId: number]: RoomManagerType } = {};
let instance: any;

class RoomManager {

    constructor () {
        if (instance) return instance;
        instance = this;
    }

    addRoom (id: number, title: string, users: User[], type: string, max: number) {
        rooms[id] = { id: id, title: title, users: users, type: type, isStarted: false, max: max };
    }

    removeRoom (id: number) {
        delete rooms[id];
    }

    gets (): object {
        return rooms;
    }

    get (id: number): RoomManagerType {
        return rooms[id];
    }

    size (): number {
        return Object.keys(rooms).length;
    }
};

export default new RoomManager();