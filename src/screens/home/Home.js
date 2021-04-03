import React, { Component } from 'react';
import Header from '../../common/header/Header';

class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Home page</h1>
            </div>
        );
    }
}

export default Home;