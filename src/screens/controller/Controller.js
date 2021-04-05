import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../screens/login/Login';
import Home from '../../screens/home/Home';
import Profile from '../profile/Profile';
import PrivateRoute from '../../common/PrivateRoute';
import { withRouter } from 'react-router';

class Controller extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} exact />
                    <PrivateRoute path="/home" component={Home} exact />
                    <PrivateRoute path="/profile" component={Profile} exact />
                </Switch>
            </Router>
        );
    }
}

export default Controller;