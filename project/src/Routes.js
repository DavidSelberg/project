import React from 'react'
import Welcome from './Welcome'
import { Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Welcome} />
                {/*<Route path="/messages" component={Messages} />*/}
                {/*<Route path="/todo" component={Todo} />*/}
                <Route path="/login" component={Welcome} />
                <Route path="/signup" component={Welcome} />
            </Switch>
        </div>
    )
}

export default Routes
