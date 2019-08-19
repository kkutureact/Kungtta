import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './hooks/useUser';
import { BinaryType, createWebSocket } from 'use-ws';
import msgpack from 'msgpack-lite';
import Routes from './Routes';

function toBuffer(ab: ArrayBuffer) {
    let buf = Buffer.alloc(ab.byteLength);
    let view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

export const { WebSocketProvider, useWebSocket } = createWebSocket({
    binaryType: BinaryType.ArrayBuffer,
    serialize (action, ...data) {
        return msgpack.encode({ action: action, data: data });
    },
    deserialize (packet) {
        const decode = msgpack.decode(toBuffer(packet as ArrayBuffer));
        return { action: decode.action, data: decode.data };
    }
});

const index = (
    <UserProvider>
        <Routes/>
    </UserProvider>
);

ReactDOM.render(index, document.getElementById('root'));