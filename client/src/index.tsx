import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './App';
import Login from "./components/Login/Login";
import LoginError from "./components/Login/LoginError";

ReactDOM.render(
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/loginerror' component={LoginError}/>
            </Switch>
        </BrowserRouter>
    </>,
    document.getElementById('root'));