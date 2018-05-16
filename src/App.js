import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Help from './containers/Help';
import NotFound from './view/NotFound';

const Account = () =>
  <div>
    Account
  </div>;
const Profile = () =>
  <div>
    Profile
  </div>;

const App = () =>
  <Switch>
    <Route exact path="/" component={() => <div>NULL</div>} />
    <Route path="/account" component={Account} />
    <Route path="/profile" component={Profile} />
    <Route path="/help" component={Help} />
    <Route path="/system" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Switch>;

export default App;
