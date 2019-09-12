import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login/Login';
import LoginError from './pages/Login/LoginError';
import LoginBan from './pages/Login/LoginBan';
import Admin from './pages/Admin';
import { RoomProvider } from './pages/Room/RoomProvider';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/' component={Main}/>
                <Route exact={true} path='/login' component={Login}/>
                <Route exact={true} path='/loginerror' component={LoginError}/>
                <Route exact={true} path='/loginban/:reason/:exp' component={LoginBan}/>
                <Route exact={true} path='/admin' component={Admin}/>
                <Route exact={true} path='/rooms/:channel' component={RoomProvider}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
