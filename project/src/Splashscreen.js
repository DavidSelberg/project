import React from 'react'
import SignUp from './pages/SignUp.js'
import Login from './pages/Login'
import { Route, Switch } from 'react-router-dom';

function Splashscreen() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </div>
    )
}

export default Splashscreen
