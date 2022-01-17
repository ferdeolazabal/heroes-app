import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/Login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    
    const { user } = useContext( AuthContext )

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact path="/Login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashBoardRoutes } 
                        isAunthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
