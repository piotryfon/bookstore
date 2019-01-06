import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import PageNotFound from './PageNotFound';
import App from './App';

class Router extends Component {
    render() {
        return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/admin" component={AdminPanel}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
        )
    }
}
export default Router;