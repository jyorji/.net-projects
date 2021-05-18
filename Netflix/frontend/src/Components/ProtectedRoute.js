import React, { Component } from 'react'
import { Redirect, Route, useParams } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    //const Component = props.component;
    const isAuthenticated = localStorage.getItem('userToken');
    return isAuthenticated ? (
        <Route
            {...rest}
            render={
                (props) => {
                    return <Component {...props} />
                }
            }>

        </Route>
    ) : (
        <Redirect to={{ pathname: '/Login' }} />
    );
}

export default ProtectedRoute;