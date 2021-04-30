import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('userToken');

        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/Login' }} />
        );
    }
}

export default ProtectedRoute;