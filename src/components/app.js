import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Action from './Action/Action';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

import '../css/reset.css';
import '../css/global.css'

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/add" exact>
                    <Action />
                </Route>
                <Route path="/remove" exact>
                    <Action />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};