import React from 'react'
import history from '../../utils/history.js'
import { Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Home.jsx'
import Daftar from './Daftar.jsx'

import NavBar from '../../components/navbar.jsx'
import Profile from '../../components/Profile.js'

const ProtectedHome = () => {
    const [premise, setPremise] = React.useState({})

    return (
        <div>
            <NavBar premise={premise} />
            
            <Router history={history}>
            <Link to="/profile">Profile</Link>
            <Link to="/daftar">Profile</Link>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/daftar' exact component={Daftar} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    )
}

export default ProtectedHome
