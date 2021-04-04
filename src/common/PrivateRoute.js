import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
    return (
        <Route

            render={props =>
                sessionStorage.getItem('access-token') == null ? (
                    <Redirect to={{ pathname: '/' }} />
                ) : (<Component {...props} />)}
        />
    )
}

export default PrivateRoute;