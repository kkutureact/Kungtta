import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Login from "./components/Login/Login";
import LoginError from "./components/Login/LoginError";
import Admin from './components/Admin/Admin';

ReactDOM.render(
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/loginerror' component={LoginError}/>
                <Route exact path='/admin' component={Admin}/>
            </Switch>
        </BrowserRouter>
    </>,
    document.getElementById('root'));