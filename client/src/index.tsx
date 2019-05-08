import React from 'react';
import ReactDOM from 'react-dom';
import {UserProvider} from './hooks/useUser';
import {BinaryType, createWebSocket} from 'use-ws';
import msgpack from 'msgpack-lite';
import Routes from './Routes';

export const {WebSocketProvider, useWebSocket} = createWebSocket({
    binaryType: BinaryType.ArrayBuffer,
    serialize(action, ...data) {
        return msgpack.encode({action: action, data: data});
    },
    deserialize(packet) {
        const decode = JSON.parse(packet.toString());
        return {action: decode.action, data: decode.data};
    }
});

const index = (
    <UserProvider>
        <Routes/>
    </UserProvider>
);

ReactDOM.render(index, document.getElementById('root'));