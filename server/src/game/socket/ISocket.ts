import {Client} from 'socket.io';

export interface ISocket {
    run(client: any, action: string, data: any): void;
}