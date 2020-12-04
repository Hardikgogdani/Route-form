import {Route, BrowserRouter, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Signup from "./Signup";
import Login from "./Login";
import User from "./User";
import 'antd/dist/antd.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signUp" component={Signup}/>
                    <Route path="/user" component={User}/>
                    <Route path="/edit" component={Signup}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;