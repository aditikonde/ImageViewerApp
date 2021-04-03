import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header id="header">
                <div id="logo">
                    <span>Image Viewer</span>
                </div>
            </header>
        );
    }
}

export default Header;