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
import config from './config';
import LoginBan from './components/Login/LoginBan';

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
    <WebSocketProvider
        url={config.endpointWS}
        onError={(event: any) => {
            console.log(`WebSocket Error! ${JSON.stringify(event)}`);
        }}>
        <UserProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/loginerror' component={LoginError}/>
                    <Route exact path='/loginban' component={LoginBan}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/rooms/:server' component={Rooms}/>
                </Switch>
            </BrowserRouter>
        </UserProvider>
    </WebSocketProvider>,
    document.getElementById('root'));