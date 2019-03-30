import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Login from './components/Login/Login';
import LoginError from './components/Login/LoginError';
import Admin from './components/Admin/Admin';
import Rooms from './components/Game/Rooms';
import {UserProvider} from './hooks/useUser';

import {BinaryType, createWebSocket} from 'use-ws';
import msgpack from 'msgpack-lite';

const WebSocket = createWebSocket({
    binaryType: BinaryType.ArrayBuffer,
    serialize(action, ...data) {
        return msgpack.encode({action: action, data: data});
    },
    deserialize(packet) {
        const decode = JSON.parse(packet.toString());
        return {action: decode.action, data: decode.data};
    }
});

export const {WebSocketProvider, useWebSocket} = WebSocket;

ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/loginerror' component={LoginError}/>
                <Route exact path='/admin' component={Admin}/>
                <WebSocketProvider
                    url={'ws://192.168.0.172:8080'}
                    onError={(event: any) => {
                        console.log(`WebSocket Error! ${JSON.stringify(event)}`);
                    }}>
                    <Route exact path='/rooms/:server' component={Rooms}/>
                </WebSocketProvider>
            </Switch>
        </BrowserRouter>
    </UserProvider>,
    document.getElementById('root'));