import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import App from './App';
import Login from './pages/Login/Login';
import LoginError from './pages/Login/LoginError';
import LoginBan from './pages/Login/LoginBan';
import Admin from './pages/Admin/Admin';
import Rooms from './pages/Room/Room';
import config from './config';
import {WebSocketProvider} from './index';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/loginerror' component={LoginError}/>
                <Route exact path='/loginban' component={LoginBan}/>
                <Route exact path='/admin' component={Admin}/>
                <WebSocketProvider
                    url={config.endpointWS}
                    onError={(event: any) => {
                        console.log(`WebSocket Error! ${JSON.stringify(event)}`);
                    }}>
                    <Route exact path='/rooms/:channel' component={Rooms}/>
                </WebSocketProvider>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;