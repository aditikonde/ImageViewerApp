import React, { Component } from 'react';
import Header from '../../common/header/Header';
class Profile extends Component {
    render() {
        return (
            <div>
                <Header isLoggedIn="true" />
                Profile
            </div>
        );
    }
}

export default Profile;