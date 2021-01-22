import React, {Component} from 'react';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

/*
 * App Component for link navigation and
 * routing of components
 */
export default class App extends Component{
    render () {
        return (
            <div className="App">
                <HashRouter>
                    <div>
                        <div className="header">
                            <NavLink exact activeClassName="active" to="/login">Login</NavLink>
                            <NavLink activeClassName="active" to="/home">Home</NavLink>
                        </div>

                        <div className="content">
                            <Switch>
                                <Route path="/login" component={Login}/>
                                <Route path="/home" component={Home}/>
                                <Redirect exact from="/" to="/login" component={Login} />
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        )
    }
}