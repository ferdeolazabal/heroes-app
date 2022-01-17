import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
{/* : ( <div>You are not authorized to view this page</div> ) */}

export const PrivateRoute = ({
    isAunthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route {...rest}
            component={ (props) => (
                ( isAunthenticated ) 
                    ? ( <Component {...props} /> )
                    : ( <Redirect to="/Login" /> )
            ) }
        />
    )
}

PrivateRoute.propTypes = {
    isAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}