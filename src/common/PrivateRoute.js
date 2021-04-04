import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = sessionStorage.getItem('access-token') == null ? false : true;

    return (
        <Route
            {...rest}
            render={props =>
                loggedIn ? (<Component {...props} />) : (
                    <Redirect to={{ pathname: '/' }} />
                )}
        />
    )
}

export default PrivateRoute;