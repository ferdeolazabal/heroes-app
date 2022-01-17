import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { SearchScreen } from '../search/SearchScreen'
import { FaUserCircle } from 'react-icons/fa';
import { types } from '../../types/types';
import { useHistory } from 'react-router-dom';

export const Navbar = ( ) => {

    const history = useHistory()
    const { dispatch, user } = useContext( AuthContext )
    
    const handleLogout = () => {
        
        const user = {
            logged: false
        }

        dispatch({
            type: types.logout,
            payload: user
        })

        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
        
            <div className="d-flex">
                <ul className="navbar-nav ml-auto ">
                    
                    <span className="nav-item nav-link tet-info">
                        { user.name }{' '}
                        <FaUserCircle />
                    </span>

                    <span
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </span>
                </ul>
            </div>
        </nav>
    )
}   