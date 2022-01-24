import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
{/* : ( <div>You are not authorized to view this page</div> ) */}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route {...rest}
            component={ (props) => (
                ( isAuthenticated ) 
                    ? ( <Component {...props} /> )
                    : ( <Redirect to="/Login" /> )
            ) }
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}