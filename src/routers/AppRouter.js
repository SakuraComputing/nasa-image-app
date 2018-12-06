import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';

import LandingPage from '../components/LandingPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
