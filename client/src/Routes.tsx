import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import App from './App';
import Login from './pages/Login/Login';
import LoginError from './pages/Login/LoginError';
import LoginBan from './pages/Login/LoginBan';
import Admin from './pages/Admin/Admin';
import {RoomProvider} from './pages/Room/RoomProvider';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/loginerror' component={LoginError}/>
                <Route exact path='/loginban' component={LoginBan}/>
                <Route exact path='/admin' component={Admin}/>
                <Route exact path='/rooms/:channel' component={RoomProvider}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
