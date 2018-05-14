import React from "react";
import { Router, Route } from 'react-router';

import App from './view/App';
import NotFound from '/view/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <Route path="/home" component={App}></Route>
            <Route path="*" component={NotFound}></Route>
        </Route>
    </Router>
);

export default Routes;