import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'

import { HeroScreen } from '../components/Heroes/HeroScreen'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { DcScreen } from '../components/Dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
