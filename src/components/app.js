import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Action from './Action/Action';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import UserContext from '../contexts/userContext';

import '../css/reset.css';
import '../css/global.css'

export default function App(){
    const [user, setUser] = useState(localStorage.lenght!==0? JSON.parse(localStorage.getItem('user')): []);

    return(
        <UserContext.Provider value={{user, setUser}}> 
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
                        <Action type={"add"} />
                    </Route>
                    <Route path="/remove" exact>
                        <Action type={"remove"}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
};