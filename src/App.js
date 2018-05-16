import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import WorkSpace from './containers/WorkSpace';

const Home = () =>
  <div>
    <Link to="/sampleHotelName/dashboard">Sample dashboard</Link>
    <hr />
    Home
  </div>;

const App = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/account" component={() => <div>Account</div>} />
    <Route path="/profile" component={() => <div>Profile</div>} />
    <Route path="/help" component={() => <div>Help</div>} />
    <Route path="/:hotelName" component={WorkSpace} />
  </Switch>;

export default App;
