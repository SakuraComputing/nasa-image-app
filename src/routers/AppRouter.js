import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';

import LandingPage from '../components/LandingPage';
import { AssetItem } from '../components/AssetItem';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/asset/:id" component={AssetItem} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
