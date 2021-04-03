import React, { Component } from 'react';
import Header from '../../common/header/Header';

class Login extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Login page</h1>
            </div>
        );
    }
}

export default Login;